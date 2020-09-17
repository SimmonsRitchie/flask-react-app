import React from "react";
import PropTypes from "prop-types";
import Block from "./Block";

const LegendColor = ({ title, colorScale }) => {
  const colors = colorScale.range();
  const colorRanges = colorScale.range().map((d) => colorScale.invertExtent(d));
  return (
    <div className="legend-color-container__container">
      <div className="legend-color-container__container-title">
        <span className="has-text-weight-semibold">{title}</span>
      </div>
      <div className="legend-color-container__color-container">
        {colors.map((color, idx) => {
          const range = colorRanges[idx];
          const text = range[0];
          const hideText = idx !== 0;
          return (
            <Block
              key={color + text}
              color={color}
              text={text}
              hideText={hideText}
            />
          );
        })}
      </div>
    </div>
  );
};

LegendColor.propTypes = {
  title: PropTypes.string.isRequired,
  colorScale: PropTypes.func.isRequired,
};

export default LegendColor;
