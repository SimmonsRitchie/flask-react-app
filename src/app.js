/* eslint-disable no-console */
/* eslint-disable no-undef */
import "./styles/styles.scss";

import React from "react";
import ReactDOM from "react-dom";
import Main from "./components/Main";
import Loader from "./components/Loader";
import loadData from "./utils/load";

// RENDERAPP
// Function below checks to see whether we have already rendered the page
// if we have, it ensures we don't render it again.
let hasRendered = false;
const renderApp = (data) => {
  if (!hasRendered) {
    ReactDOM.render(<Main data={data} />, document.getElementById("app"));
    hasRendered = true;
  }
};

// LOADING PAGE
ReactDOM.render(<Loader />, document.getElementById("app"));

// RENDER APP AFTER LOADING DATA
loadData()
  .then((data) => {
    renderApp(data);
  })
  .catch((e) => {
    console.error(e);
  });
