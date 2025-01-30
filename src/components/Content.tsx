import React from "react";
import "./Content.css";
import ContentBar from "./ContentBar";
import ContentDetail from "./ContentDetail";
import ContentList from "./ContentList";

const Content = () => {
  return (
    <div className="content-container">
      <ContentBar />
      <ContentDetail />
      <ContentList />
    </div>
  );
};

export default Content;
