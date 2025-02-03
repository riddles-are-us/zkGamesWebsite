import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ContentGameCard.css";
import { GameData } from "./GameDatas";

const titleFontRatio = 2.5;
const descriptionFontRatio = 5;
interface Props {
  width: number;
  height: number;
  gameData: GameData;
}

const ContentGameCard = ({ width, height, gameData }: Props) => {
  const titleTextRef = useRef<HTMLParagraphElement>(null);
  const descriptionTextRef = useRef<HTMLParagraphElement>(null);
  const [titleFontSize, setTitleFontSize] = useState<number>(0);
  const [descriptionFontSize, setDescriptionFontSize] = useState<number>(0);
  const navigate = useNavigate();

  const adjustSize = () => {
    if (titleTextRef.current) {
      const parentHeight = titleTextRef.current.offsetHeight;
      setTitleFontSize(parentHeight / titleFontRatio);
    }
    if (descriptionTextRef.current) {
      const parentHeight = descriptionTextRef.current.offsetHeight;
      setDescriptionFontSize(parentHeight / descriptionFontRatio);
    }
  };

  useEffect(() => {
    adjustSize();
  }, [width]);

  const onClickCard = () => {
    navigate(`/trending/${gameData.id}`);
  };

  return (
    <div
      className="content-game-card"
      style={{
        width: `${width}px`,
        height: `${height}px`,
      }}
    >
      <div className="content-game-card-container" onClick={onClickCard}>
        <img className="content-game-card-image" src={gameData.thumbnailPath} />
        <div className="content-game-card-detail-container">
          <p
            ref={titleTextRef}
            className="content-game-card-detail-title-text"
            style={{ fontSize: titleFontSize }}
          >
            {gameData.title}
          </p>
          <p
            ref={descriptionTextRef}
            className="content-game-card-detail-description-text"
            style={{ fontSize: descriptionFontSize }}
          >
            {gameData.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContentGameCard;
