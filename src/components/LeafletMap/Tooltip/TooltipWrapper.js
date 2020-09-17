import React from "react";
import PropTypes from "prop-types";

const TooltipWrapper = ({ label, subLabel, footnote, children }) => (
  <div className="tooltip-wrapper__container">
    <div className="tooltip-wrapper__label-container">
      {label && <div className="tooltip-wrapper__label">{label}</div>}
      {subLabel && <div className="tooltip-wrapper__sub-label">{subLabel}</div>}
    </div>
    {children}
    <div className="tooltip-wrapper__footnote">{footnote}</div>
  </div>
);

TooltipWrapper.defaultProps = {
  label: null,
  subLabel: null,
  footnote: null,
};

TooltipWrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  label: PropTypes.string,
  subLabel: PropTypes.string,
  footnote: PropTypes.string,
};

export default TooltipWrapper;
