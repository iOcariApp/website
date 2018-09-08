import React from "react";
import PropTypes from "prop-types";
import style from "./map.scss";

import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
} from "react-simple-maps";

import atlas from "./atlas.json";

const wrapperStyles = {
  width: "100%",
  maxWidth: 980,
  margin: "0 auto",
};

const include = ["Antarctica"];

const Map = () => (
  <div style={wrapperStyles}>
    <ComposableMap
      projectionConfig={{ scale: 300 }}
      width={1400}
      height={800}
      style={{
        width: "100%",
        height: "auto",
      }}
    >
      <ZoomableGroup center={[0, 20]} disablePanning>
        <Geographies geography={atlas}>
          {(geographies, projection) =>
            geographies.map(
              (geography, i) =>
                console.log(geography) ||
                (include.indexOf(geography.properties.CONTINENT) === -1 && (
                  <Geography
                    key={i}
                    geography={geography}
                    projection={projection}
                    style={{
                      default: {
                        fill: "#028C9B",
                        stroke: "#FFFFFF",
                        strokeWidth: 0.5,
                        outline: "none",
                      },
                      hover: {
                        fill: "#CFD8DC",
                        stroke: "#607D8B",
                        strokeWidth: 0.75,
                        outline: "none",
                      },
                      pressed: {
                        fill: "#FF5722",
                        stroke: "#607D8B",
                        strokeWidth: 0.75,
                        outline: "none",
                      },
                    }}
                  />
                ))
            )
          }
        </Geographies>
      </ZoomableGroup>
    </ComposableMap>
  </div>
);

export default Map;
