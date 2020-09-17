import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartBar } from "@fortawesome/free-solid-svg-icons";
// import { faChartBar } from "@fortawesome/free-regular-svg-icons";

const Header = ({ headline, subtitle }) => (
  <div className="header__container">
    <div className="header__headline-container">
      <div className="header__icon-container">
        <FontAwesomeIcon icon={faChartBar} color="white" />
      </div>
      <h4 className="pl-6	title is-5 has-text-weight-bold is-uppercase header__headline">
        {headline}
      </h4>
    </div>
    <div className="header__subtitle-container">
      {subtitle && <p>{subtitle}</p>}
    </div>
  </div>
);

Header.defaultProps = {
  subtitle: null,
};

Header.propTypes = {
  headline: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};

export default Header;
