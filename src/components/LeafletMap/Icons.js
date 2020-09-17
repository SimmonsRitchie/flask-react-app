import React from "react";
import { Pane, CircleMarker, Tooltip } from "react-leaflet";
import PropTypes from "prop-types";
import MapTooltip from "./Tooltip";
import COLORS from "../../utils/constants";

const Icons = ({ iconData, propertyID, radius, tooltipSchema }) => {
  return (
    <Pane name="icons" style={{ zIndex: 500 }}>
      {iconData.map((datum) => {
        const { properties, geometry } = datum;
        const { coordinates } = geometry;
        return (
          <CircleMarker
            key={properties[propertyID]}
            center={[coordinates[1], coordinates[0]]}
            radius={radius}
            color={COLORS.markers}
            weight={1}
            fillColor={COLORS.markers}
            fillOpacity={1}
          >
            <Tooltip direction="auto" offset={[-8, -2]} opacity={1}>
              <MapTooltip properties={properties} schema={tooltipSchema} />
            </Tooltip>
          </CircleMarker>
        );
      })}
    </Pane>
  );
};

Icons.propTypes = {
  iconData: PropTypes.arrayOf(PropTypes.object).isRequired,
  propertyID: PropTypes.string.isRequired,
  radius: PropTypes.number.isRequired,
  tooltipSchema: PropTypes.arrayOf(PropTypes.object),
};

export default Icons;
