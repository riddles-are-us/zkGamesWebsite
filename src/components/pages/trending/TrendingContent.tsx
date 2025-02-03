import React from "react";
import { useParams } from "react-router-dom";
import "./TrendingContent.css";
import TrendingHeader from "./TrendingHeader";
import TrendingDetail from "./TrendingDetail";
import TrendingGameList from "./TrendingGameList";
import { gameDatas } from "../../GameDatas";

const TrendingContent = () => {
  const { gameId } = useParams<{ gameId: string }>();
  const gameData = gameDatas.find((gameData) => gameData.id == gameId);

  return (
    <div className="trending-content-container">
      <TrendingHeader />
      {gameData && <TrendingDetail gameData={gameData} />}
      <TrendingGameList />
    </div>
  );
};

export default TrendingContent;
