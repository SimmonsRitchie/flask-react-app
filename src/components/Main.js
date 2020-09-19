import React from "react";
import PropTypes from "prop-types";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

class Main extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <div className="container__outer">
        <div className="container__inner">
          <Header headline="Experimental apsdfdsfsdp!!!???" />
          <Body data={data} />
          <Footer
            byline="DSR"
            outlet="Spotlight PA"
            outletUrl="https://www.spotlightpa.org/"
          />
        </div>
      </div>
    );
  }
}

Main.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Main;
