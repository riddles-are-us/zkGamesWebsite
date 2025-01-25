import React from "react";
import "./Main.css";
import Content from "./Content";
import Bar from "./Bar";

export const Main = (): JSX.Element => {
  return (
    <div className="main">
      <div className="main-div">
        <Content />
        <Bar />
      </div>
    </div>
  );
};
