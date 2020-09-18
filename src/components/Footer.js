import React from "react";
import PropTypes from "prop-types";

const Footer = ({ byline, outlet, outletUrl, source, footnote }) => {
  return (
    <div>
      <div className="footer__container">
        <div>
          {footnote && (
            <p>
              <span className="footer__label">NOTE: </span>
              {footnote}
            </p>
          )}
          <div>
            <div>
              <span className="footer__label">CHART: </span>
              <span>{`${byline.toUpperCase()} / `}</span>
              <a href={outletUrl}>{outlet}</a>
              <span className="footer__separator" />
              <span>{`Source: ${source}`}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Footer.defaultProps = {
  footnote: null,
};

Footer.propTypes = {
  byline: PropTypes.string.isRequired,
  outlet: PropTypes.string.isRequired,
  outletUrl: PropTypes.string.isRequired,
  source: PropTypes.string,
  footnote: PropTypes.string,
};

export default Footer;
