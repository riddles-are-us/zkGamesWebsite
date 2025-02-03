import React from "react";
import { useParams } from "react-router-dom";
import "./Content.css";
import ContentBar from "./ContentBar";
import ContentDetail from "./ContentDetail";
import ContentList from "./ContentList";
import { gameDatas } from "./GameDatas";

const Content = () => {
  const { gameId } = useParams<{ gameId: string }>();
  const gameData = gameDatas.find((gameData) => gameData.id == gameId);

  return (
    <div className="content-container">
      <ContentBar />
      {gameData && <ContentDetail gameData={gameData} />}
      <ContentList />
    </div>
  );
};

export default Content;
