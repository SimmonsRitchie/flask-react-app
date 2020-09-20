import React, { useState } from "react";
import Card from "./Card";

const Get = () => {
  const [greeting, setGreeting] = useState("");

  const getMsg = () => {
    console.log("Getting message...");
    fetch("/data")
      .then((res) => res.json())
      .then((data) => {
        console.log("Got message!");
        setGreeting(data.greeting);
      })
      .catch((err) => {
        console.log("Something went wrong!");
        console.log(err);
      });
  };

  return (
    <article>
      <h2 className="title is-4">GET request</h2>
      <div className="buttons">
        <button type="button" onClick={getMsg} className="button">
          Get message
        </button>
        <button
          type="button"
          onClick={() => setGreeting("")}
          className="button"
        >
          Clear
        </button>
      </div>
      {greeting && <Card>{greeting}</Card>}
    </article>
  );
};

export default Get;
