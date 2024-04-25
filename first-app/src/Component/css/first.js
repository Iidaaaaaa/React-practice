import React from "react";
import css from "./css/first.css";

const Hello = () => {
  return (
    <div class="test">
      <h1>こんにちは</h1>
      <p>お元気ですか</p>
      <hr />
    </div>
  );
};

const Alt = () => {
  return (
    <div className="add">
      <h2>失敗もあるよ</h2>
      <p>おつにだ</p>
    </div>
  );
};
export { Hello, Alt };
