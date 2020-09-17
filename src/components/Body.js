/* eslint-disable react/prefer-stateless-function */
import React from "react";
import PropTypes from "prop-types";

class Body extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <div className="body__container">
        Insert map/chart/interactive thing here.
      </div>
    );
  }
}

Body.propTypes = {
  data: PropTypes.objectOf(PropTypes.array).isRequired,
};

export default Body;
