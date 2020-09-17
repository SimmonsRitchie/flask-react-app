import React, { useState } from "react";
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
} from "react-simple-maps";
import PropTypes from "prop-types";
import ReactTooltip from "react-tooltip";
import createColorScale from "../../utils/createColorScale";
import Tooltip from "./Tooltip";
import LegendColor from "./LegendColor";

const PA_CENTER = [-77.641, 40.989];

const SimpleMap = ({
  geoData,
  csvData,
  colorAccessor,
  tooltipSchema,
  legendTitle,
  geoJoinAccessor,
  csvJoinAccessor,
}) => {
  const [tooltipContent, setTooltipContent] = useState("");
  const colorScale = createColorScale({
    data: csvData,
    accessor: colorAccessor,
  });

  return (
    <div className="simple-map__container">
      <LegendColor colorScale={colorScale} title={legendTitle} />
      <ComposableMap
        data-tip=""
        projection="geoMercator"
        projectionConfig={{
          scale: 7500,
        }}
        width={773}
        height={449}
        style={{
          width: "100%",
          height: "auto",
        }}
      >
        <ZoomableGroup center={PA_CENTER} zoom={1} disablePanning>
          <Geographies geography={geoData.features}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const datum = csvData.find(
                  (item) =>
                    item[csvJoinAccessor].toLowerCase() ===
                    geo.properties[geoJoinAccessor].toLowerCase()
                );
                return (
                  <Geography
                    onMouseEnter={() => {
                      setTooltipContent(datum);
                    }}
                    onMouseLeave={() => {
                      setTooltipContent("");
                    }}
                    key={geo.rsmKey}
                    geography={geo}
                    fill={datum ? colorScale(datum[colorAccessor]) : "green"}
                    style={{
                      default: {
                        stroke: "white",
                        strokeWidth: 0.75,
                        outline: "none",
                      },
                      hover: {
                        opacity: "0.5",
                        stroke: "white",
                        strokeWidth: 2,
                        outline: "black",
                      },
                      pressed: {
                        opacity: "0.5",
                        stroke: "white",
                        strokeWidth: 0.75,
                        outline: "none",
                      },
                    }}
                  />
                );
              })
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
      {tooltipSchema && (
        <ReactTooltip type="dark">
          {tooltipContent && (
            <Tooltip data={tooltipContent} schema={tooltipSchema} table />
          )}
        </ReactTooltip>
      )}
    </div>
  );
};

SimpleMap.defaultProps = {
  geoJoinAccessor: "NAME",
  tooltipSchema: [],
  legendTitle: "",
};

SimpleMap.propTypes = {
  geoData: PropTypes.objectOf(PropTypes.any).isRequired,
  csvData: PropTypes.arrayOf(PropTypes.object).isRequired,
  csvJoinAccessor: PropTypes.string.isRequired,
  colorAccessor: PropTypes.string.isRequired,
  geoJoinAccessor: PropTypes.string,
  tooltipSchema: PropTypes.arrayOf(PropTypes.object),
  legendTitle: PropTypes.string,
};

export default SimpleMap;
