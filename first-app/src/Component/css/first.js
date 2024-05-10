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
const Beta = () => {
  return (
    <div className="add">
      <h2>４月２６日</h2>
      <p>Reactお勉強</p>
    </div>
  );
};
export { Hello, Alt, Beta };
