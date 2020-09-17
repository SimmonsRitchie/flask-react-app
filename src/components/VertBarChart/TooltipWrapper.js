import React from "react";
import PropTypes from "prop-types";

const TooltipWrapper = ({ label, children }) => (
  <div className="chart-tooltip-wrapper__container">
    {label && <div className="chart-tooltip-wrapper__label">{label}</div>}
    {children}
  </div>
);

TooltipWrapper.defaultProps = {
  label: null,
};

TooltipWrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  label: PropTypes.string,
};

export default TooltipWrapper;
