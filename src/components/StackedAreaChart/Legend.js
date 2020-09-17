import React from "react";
import PropTypes from "prop-types";

const CustomLegend = ({ payload }) => {
  return (
    <div className="chart-legend__container">
      {payload.map((entry) => {
        const { dataKey, name, fill } = entry.payload;
        return (
          <li key={dataKey} className="chart-legend__item">
            <div
              className="chart-legend__item-color"
              style={{
                backgroundColor: fill,
              }}
            />
            {name}
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
