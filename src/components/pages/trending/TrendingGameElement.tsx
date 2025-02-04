import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./TrendingGameElement.css";
import { GameData } from "../../GameDatas";
import TextButton from "../../common/TextButton";

const titleFontRatio = 2.5;
const descriptionFontRatio = 5;
interface Props {
  width: number;
  height: number;
  gameData: GameData;
}

const TrendingGameElement = ({ width, height, gameData }: Props) => {
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

  const onClickPlay = () => {
    window.open(gameData.link, "_blank");
  };

  return (
    <div
      className="trending-game-element"
      style={{
        width: `${width}px`,
        height: `${height}px`,
      }}
    >
      <div className="trending-game-element-container" onClick={onClickCard}>
        <img
          className="trending-game-element-image"
          src={gameData.thumbnailPath}
        />
        <div className="trending-game-element-detail-container">
          <p
            ref={titleTextRef}
            className="trending-game-element-detail-title-text"
            style={{ fontSize: titleFontSize }}
          >
            {gameData.title}
          </p>
          <p
            ref={descriptionTextRef}
            className="trending-game-element-detail-description-text"
            style={{ fontSize: descriptionFontSize }}
          >
            {gameData.description}
          </p>

          <div className="trending-game-element-detail-play-container">
            <TextButton
              isDisabled={false}
              text={"Play"}
              fontRatio={8}
              onClick={onClickPlay}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingGameElement;
