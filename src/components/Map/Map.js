import React, { Fragment } from "react";
import PropTypes from "prop-types";
import style from "./map.scss";

import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
  Markers,
  Marker,
} from "react-simple-maps";
import { geoCentroid } from "d3-geo";
import { feature } from "topojson-client";

import atlas from "./atlas.json";

import cubeLogo from "components/CountriesVote/cube-logo.svg";

const blueBubble = (
  <path
    style={{
      fill: "#0277bd",
      stroke: "#fff",
      strokeWidth: 2,
    }}
    d="M0,34.45A34.45,34.45,0,1,1,63.14,53.527L69.807,66.86,56.524,60.9A34.451,34.451,0,0,1,0,34.45Z"
    transform="translate(-70,-70)"
  />
);

const pinkBubble = (
  <path
    style={{
      fill: "#f50057",
      stroke: "#fff",
      strokeWidth: 2,
    }}
    d="M0,34.45A34.45,34.45,0,1,1,63.14,53.527L69.807,66.86,56.524,60.9A34.451,34.451,0,0,1,0,34.45Z"
    transform="translate(-70,-70)"
  />
);

const exclude = ["Antarctica"];

const getContinent = geography => geography.properties.CONTINENT;
const getISO = geography => geography.properties.ISO_A2;
const getName = geography => geography.properties.NAME;

const getCountryCenter = feature => geoCentroid(feature);

const features = feature(atlas, atlas.objects[Object.keys(atlas.objects)[0]])
  .features;
const countryCenters = features.map(feature => ({
  name: getName(feature),
  iso: getISO(feature),
  coordinates: getCountryCenter(feature),
}));

const sameISO = countryISO => country => country.iso === countryISO;

const getCountryMarkerCoordinates = countryISO =>
  countryCenters.find(sameISO(countryISO)).coordinates;

const getMarkers = countries =>
  countries.filter(country => country.votes > 0).map(country => ({
    ...country,
    coordinates: getCountryMarkerCoordinates(country.iso),
  }));

const countryHasVotes = (countries, countryISO) => {
  const country = countries.find(sameISO(countryISO));
  return country && country.votes > 0;
};

const getCountryNameByISO = countryISO =>
  countryCenters.find(sameISO(countryISO)).name;

class Map extends React.Component {
  state = {
    shouldUpdate: false,
  };

  componentDidUpdate = prevProps => {
    if (prevProps.countries.length !== this.props.countries.length) {
      this.updateMapVisuals();
    }
  };

  onClick = name => {
    const { vote } = this.props;

    vote(name);

    this.updateMapVisuals();
  };

  updateMapVisuals = () => {
    this.setState(
      {
        shouldUpdate: true,
      },
      () => {
        this.setState({ shouldUpdate: false });
      }
    );
  };

  render() {
    const { shouldUpdate } = this.state;
    const { countries } = this.props;

    const markers = getMarkers(countries);

    return (
      <div className={style.main}>
        <ComposableMap
          projectionConfig={{ scale: 300 }}
          width={1400}
          height={800}
          style={{
            width: "100%",
            height: "auto",
          }}
        >
          <ZoomableGroup center={[10, 20]} disablePanning>
            <Geographies geography={atlas} disableOptimization={shouldUpdate}>
              {(geographies, projection) =>
                geographies.map(
                  (geography, i) =>
                    exclude.indexOf(getContinent(geography)) === -1 && (
                      <Geography
                        key={`geography-${i}`}
                        geography={geography}
                        projection={projection}
                        tabable={false}
                        onClick={() => {
                          this.onClick(getCountryNameByISO(getISO(geography)));
                        }}
                        style={{
                          default: {
                            fill: countryHasVotes(countries, getISO(geography))
                              ? "#0DBED1"
                              : "#028C9B",
                            stroke: "#FFFFFF",
                            strokeWidth: 0.5,
                            outline: "none",
                          },
                          hover: {
                            fill: "#0DBED1",
                            stroke: "#FFFFFF",
                            strokeWidth: 0.5,
                            outline: "none",
                          },
                          pressed: {
                            fill: "#0DBED1",
                            stroke: "#FFFFFF",
                            strokeWidth: 0.5,
                            outline: "none",
                          },
                        }}
                      />
                    )
                )
              }
            </Geographies>
            <Markers>
              {markers.map((marker, i) => (
                <Marker
                  key={`marker-${i}`}
                  marker={marker}
                  tabable={false}
                  style={{
                    default: { outline: "none" },
                    hover: { outline: "none" },
                    pressed: { outline: "none" },
                  }}
                  onClick={() => {
                    this.onClick(marker.name);
                  }}
                >
                  {marker.exists ? (
                    <Fragment>
                      {pinkBubble}
                      <image
                        xlinkHref={cubeLogo}
                        width={39}
                        height={35}
                        transform="translate(-55,-53)"
                      />
                    </Fragment>
                  ) : (
                    <Fragment>
                      {blueBubble}
                      <text
                        textAnchor="middle"
                        x={35}
                        y={45}
                        style={{
                          fill: "#FFFFFF",
                          stroke: "none",
                          fontSize: 24,
                          cursor: "pointer",
                        }}
                        transform="translate(-70,-70)"
                      >
                        {`+${marker.votes}`}
                      </text>
                    </Fragment>
                  )}
                </Marker>
              ))}
            </Markers>
          </ZoomableGroup>
        </ComposableMap>
      </div>
    );
  }
}

Map.propTypes = {
  countries: PropTypes.array,
  vote: PropTypes.func,
};

export default Map;
