import React, { useState } from "react";
import Get from "./Get";
import Post from "./Post";

const Main = () => {
  return (
    <section className="container">
      <div className="columns is-multiline">
        <div className="column is-8 is-offset-2">
          <h1 className="title is-1">Flask-React App!!!</h1>
          <h2 className="subtitle colored is-4">
            Boilerplate app that uses Flask for the backend, React for the
            frontend.
          </h2>
        </div>
        <div className="column is-8 is-offset-2">
          {" "}
          <Get />
        </div>
        <div className="column is-8 is-offset-2">
          {" "}
          <Post />
        </div>
      </div>
    </section>
  );
};

export default Main;
