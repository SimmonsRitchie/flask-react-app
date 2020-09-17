import React from "react";
import PropTypes from "prop-types";
import {
  formatComma,
  formatPerc,
  titleCase,
} from "../../utils/dataHelpers/formatters";
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
  tooltipLabelFormatter,
}) => {
  const formattedLabel = tooltipLabelFormatter
    ? tooltipLabelFormatter(label)
    : label;
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
          const { dataKey, name, value } = entry;
          const cleanValue = tooltipFormatter(+value);
          let cleanPercValue;
          if (includePercent) {
            const percValue = (value / payloadSum) * 100;
            cleanPercValue = formatPerc(percValue, 0);
          }
          return (
            <div className="chart-tooltip__value-container" key={dataKey}>
              <span>{titleCase(name)}</span>
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
  tooltipLabelFormatter: null,
};

Tooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.arrayOf(PropTypes.object),
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  includePercent: PropTypes.bool,
  reverseList: PropTypes.bool,
  colorList: PropTypes.bool,
  tooltipFormatter: PropTypes.func,
  tooltipLabelFormatter: PropTypes.func,
};

export default Tooltip;
