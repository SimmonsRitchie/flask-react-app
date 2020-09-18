import React from "react";
import PropTypes from "prop-types";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import { pymSendHeight } from "../utils/handlePym";

class Main extends React.Component {
  componentDidMount() {
    // This is intended to fix bug where app is clipped at bottom
    // on initial load.
    pymSendHeight({ timeout: 500 });
    pymSendHeight({ timeout: 1000 });
  }

  componentDidUpdate() {
    // Because our app changes height based on displayed content, we
    // update the iframe height after DOM elements have been updated.
    pymSendHeight();
  }

  render() {
    const { data } = this.props;
    return (
      <div className="container__outer">
        <div className="container__inner">
          <Header headline="Experimental app" />
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
