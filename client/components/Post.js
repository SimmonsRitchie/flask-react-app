import React, { useState } from "react";
import Card from "./Card";

const Post = () => {
  const [text, setText] = useState("");
  const [reverseText, setReverseText] = useState("");

  const clearText = () => {
    setText("");
    setReverseText("");
  };

  const getReverseText = (e) => {
    e.preventDefault();
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text }),
    };
    fetch("/reverse", requestOptions)
      .then((res) => res.json())
      .then((data) => setReverseText(data.text))
      .catch((err) => {
        console.log("Something went wrong!");
        console.log(err);
      });
  };

  return (
    <article>
      <h2 className="title is-4">POST request</h2>
      <form className="field has-addons" onSubmit={getReverseText}>
        <div className="control">
          <input
            className="input"
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter a word or phrase"
          />
        </div>
        <div className="control">
          <button type="submit" className="button is-info">
            Reverse
          </button>
        </div>
        <div className="control">
          <button
            type="button"
            onClick={clearText}
            className="button is-danger"
          >
            Clear
          </button>
        </div>
      </form>
      {reverseText && <Card>{reverseText}</Card>}
    </article>
  );
};

export default Post;
