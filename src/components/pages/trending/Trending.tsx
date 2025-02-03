import React from "react";
import "./Trending.css";
import TrendingContent from "./TrendingContent";
import Bar from "../../Bar";

export const Trending = (): JSX.Element => {
  return (
    <div className="trending-container">
      <Bar />
      <TrendingContent />
    </div>
  );
};
