import React from "react";
import PropTypes from "prop-types";

const CustomLegend = ({ payload }) => {
  return (
    <div className="chart-legend__container">
      {payload.map((entry) => {
        const { legendType, dataKey, value, color } = entry;
        return (
          <li key={dataKey} className="chart-legend__item">
            <div
              className={`chart-legend__item-color ${
                legendType === "line" ? "line-color" : ""
              }`}
              style={{
                backgroundColor: color,
              }}
            />
            {value}
          </li>
        );
      })}
    </div>
  );
};

CustomLegend.defaultProps = {
  payload: null,
};

CustomLegend.propTypes = {
  payload: PropTypes.arrayOf(PropTypes.any),
};

export default CustomLegend;
