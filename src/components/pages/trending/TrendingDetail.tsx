import React, { useEffect, useRef, useState } from "react";
import "./TrendingDetail.css";
import TextButton from "../../common/TextButton";
import TrendingCarousel from "./TrendingCarousel";
import { GameData } from "../../GameDatas";

const titleFontRatio = 18;
const descriptionFontRatio = 60;
const trendingFontRatio = 4;

interface Props {
  gameData: GameData;
}

const TrendingDetail = ({ gameData }: Props) => {
  const titleTextRef = useRef<HTMLParagraphElement>(null);
  const descriptionTextRef = useRef<HTMLParagraphElement>(null);
  const trendingTextRef = useRef<HTMLParagraphElement>(null);
  const [titleFontSize, setTitleFontSize] = useState<number>(0);
  const [descriptionFontSize, setDescriptionFontSize] = useState<number>(0);
  const [trendingFontSize, setTrendingFontSize] = useState<number>(0);

  const adjustSize = () => {
    if (titleTextRef.current) {
      const parentWidth = titleTextRef.current.offsetWidth;
      setTitleFontSize(parentWidth / titleFontRatio);
    }
    if (descriptionTextRef.current) {
      const parentWidth = descriptionTextRef.current.offsetWidth;
      setDescriptionFontSize(parentWidth / descriptionFontRatio);
    }
    if (trendingTextRef.current) {
      const parentWidth = trendingTextRef.current.offsetWidth;
      setTrendingFontSize(parentWidth / trendingFontRatio);
    }
  };

  useEffect(() => {
    adjustSize();
    window.addEventListener("resize", () => {
      adjustSize();
    });
    return () => {
      window.removeEventListener("resize", () => {
        adjustSize();
      });
    };
  }, []);

  const onClickPlay = () => {
    window.open(gameData.link, "_blank");
  };

  return (
    <div className="trending-detail-container">
      <TrendingCarousel images={gameData.imagePaths} />
      <div className="trending-detail-list">
        <div className="trending-detail-trending-container">
          <div
            ref={trendingTextRef}
            className="trending-detail-trending-text"
            style={{ fontSize: trendingFontSize }}
          >
            Trending
          </div>
        </div>

        <p
          ref={titleTextRef}
          className="trending-detail-title-text"
          style={{ fontSize: titleFontSize }}
        >
          {gameData.title}
        </p>

        <p
          ref={descriptionTextRef}
          className="trending-detail-description-text"
          style={{ fontSize: descriptionFontSize }}
        >
          {gameData.description}
        </p>

        <div className="trending-detail-play-container">
          <TextButton
            isDisabled={false}
            text={"Play"}
            fontRatio={8}
            onClick={onClickPlay}
          />
        </div>
      </div>
    </div>
  );
};

export default TrendingDetail;
