import React from "react";
import PropTypes from "prop-types";
import { formatComma, formatPerc } from "../../utils/dataHelpers/formatters";
import TooltipWrapper from "./TooltipWrapper";
import lightenDarkColor from "../../utils/dataHelpers/lightenDarkenColor";

const Tooltip = ({
  active,
  payload,
  label,
  includePercent,
  reverseList,
  colorList,
  tooltipFormatter,
}) => {
  const formattedLabel = label;
  tooltipFormatter = tooltipFormatter || formatComma;
  if (active) {
    const payloadSum = payload.reduce((accum, item) => accum + +item.value, 0);
    let tooltipPayload = payload;
    if (reverseList) {
      tooltipPayload = payload.reverse();
    }
    return (
      <TooltipWrapper label={formattedLabel}>
        {tooltipPayload.map((entry) => {
          const { dataKey, name, value, fill } = entry;
          const cleanValue = tooltipFormatter(+value);
          let cleanPercValue;
          if (includePercent) {
            const percValue = (value / payloadSum) * 100;
            cleanPercValue = formatPerc(percValue, 0);
          }
          let labelColor;
          if (colorList) {
            labelColor = lightenDarkColor(fill, -48);
          }
          return (
            <div className="chart-tooltip__value-container" key={dataKey}>
              <span style={{ color: labelColor }}>{name}</span>
              {": "}
              <span className="chart-tooltip__value">{cleanValue}</span>
              {includePercent && (
                <span className="chart-tooltip__value">{` (${cleanPercValue})`}</span>
              )}
            </div>
          );
        })}
      </TooltipWrapper>
    );
  }
  return null;
};

Tooltip.defaultProps = {
  active: false,
  payload: [],
  label: "",
  includePercent: false,
  reverseList: false,
  colorList: true,
  tooltipFormatter: null,
};

Tooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.arrayOf(PropTypes.object),
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  includePercent: PropTypes.bool,
  reverseList: PropTypes.bool,
  colorList: PropTypes.bool,
  tooltipFormatter: PropTypes.func,
};

export default Tooltip;
