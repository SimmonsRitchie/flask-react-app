import React from "react";
import PropTypes from "prop-types";
import { formatCommaZeroDp } from "../../../utils/dataHelpers/formatters";

const Block = ({ color, text, hideText = false }) => {
  const cleanText = formatCommaZeroDp(text);
  return (
    <div className="legend-color-block__container">
      <div
        className="legend-color-block__swatch"
        style={{ backgroundColor: color }}
      />
      {hideText && <div className="legend-color-block__text">{cleanText}+</div>}
    </div>
  );
};

Block.propTypes = {
  color: PropTypes.string.isRequired,
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  hideText: PropTypes.bool.isRequired,
};

export default Block;
