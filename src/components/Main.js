import React from "react";

class Main extends React.Component {
  render() {
    return (
      <section className="container">
        <div className="columns is-multiline">
          <div className="column is-8 is-offset-2 register">
            <h1 className="title is-1">Flask-React App</h1>
            <h2 className="subtitle colored is-4">
              Boilerplate app that uses Flask for the backend, React for the
              frontend.
            </h2>

            <button type="button" className="button">
              Test!
            </button>
          </div>
        </div>
      </section>
    );
  }
}

export default Main;
