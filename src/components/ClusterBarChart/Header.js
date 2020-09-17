import React from "react";
import PropTypes from "prop-types";

const Header = ({ title, description }) => (
  <div className="chart-header__container">
    <div className="chart-header__title">{title}</div>
    {description && (
      <div className="chart-header__description">{description}</div>
    )}
  </div>
);

Header.defaultProps = {
  description: "",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
};

export default Header;
