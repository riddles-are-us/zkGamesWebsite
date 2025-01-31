import React, { useEffect, useRef, useState } from "react";
import "./ContentDetail.css";
import TextButton from "./common/TextButton";

const titleFontRatio = 18;
const descriptionFontRatio = 60;
const trendingFontRatio = 4;

const ContentDetail = () => {
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

  return (
    <div className="content-detail-container">
      <div className="content-detail-background-container">
        <img
          className="content-detail-background-container"
          alt="Game"
          src="https://c.animaapp.com/m6UthH3E/img/game1.png"
        />
        <img
          className="content-detail-background-mask"
          alt="Top mask"
          src="https://c.animaapp.com/m6UthH3E/img/top-mask.png"
        />
      </div>
      <div className="content-detail-list">
        <div className="content-detail-trending-container">
          <div
            ref={trendingTextRef}
            className="content-detail-trending-text"
            style={{ fontSize: trendingFontSize }}
          >
            Trending
          </div>
        </div>

        <p
          ref={titleTextRef}
          className="content-detail-title-text"
          style={{ fontSize: titleFontSize }}
        >
          Automata
        </p>

        <p
          ref={descriptionTextRef}
          className="content-detail-description-text"
          style={{ fontSize: descriptionFontSize }}
        >
          Information Information Information Information Information
        </p>

        <div className="content-detail-play-container">
          <TextButton
            isDisabled={false}
            text={"Play"}
            fontRatio={8}
            onClick={() => {
              /* */
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ContentDetail;
