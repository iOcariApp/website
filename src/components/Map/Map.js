import React from "react";
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

const getCountryCenter = feature => geoCentroid(feature);

const getISO = geography => geography.properties.ISO_A2;

const features = feature(atlas, atlas.objects[Object.keys(atlas.objects)[0]])
  .features;
const countryCenters = features.map(feature => ({
  iso: getISO(feature),
  coordinates: getCountryCenter(feature),
}));

const sameISO = countryISO => country => country.iso === countryISO;

const getCountryMarkerCoordinates = countryISO =>
  countryCenters.find(sameISO(countryISO)).coordinates;

const getMarkers = countries =>
  countries.map(country => ({
    ...country,
    coordinates: getCountryMarkerCoordinates(country.iso),
  }));

const countryHasVotes = (countries, countryISO) =>
  countries.findIndex(sameISO(countryISO)) >= 0;

const getCountryNameByISO = (countries, countryISO) =>
  countries.find(sameISO(countryISO)).name;

const Map = ({ countries, vote }) => {
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
          <Geographies geography={atlas}>
            {(geographies, projection) =>
              geographies.map(
                (geography, i) =>
                  exclude.indexOf(geography.properties.CONTINENT) === -1 && (
                    <Geography
                      key={`geography-${i}`}
                      geography={geography}
                      projection={projection}
                      onClick={() => {
                        vote(getCountryNameByISO(markers, getISO(geography)));
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
                style={{
                  default: { stroke: "#455A64" },
                  hover: { stroke: "#FF5722" },
                  pressed: { stroke: "#FF5722" },
                }}
                onClick={() => {
                  vote(marker.name);
                }}
              >
                {marker.exists ? pinkBubble : blueBubble}
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
              </Marker>
            ))}
          </Markers>
        </ZoomableGroup>
      </ComposableMap>
    </div>
  );
};

Map.propTypes = {
  countries: PropTypes.array,
  vote: PropTypes.func,
};

export default Map;
