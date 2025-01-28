import React, { useEffect, useRef, useState } from "react";
import "./ContentDetail.css";

const titleFontRatio = 30;
const descriptionFontRatio = 30;

const ContentDetail = () => {
  const titleTextRef = useRef<HTMLParagraphElement>(null);
  const descriptionTextRef = useRef<HTMLParagraphElement>(null);
  const [titleFontSize, setTitleFontSize] = useState<number>(0);
  const [descriptionFontSize, setDescriptionFontSize] = useState<number>(0);

  const adjustSize = () => {
    if (titleTextRef.current) {
      const parentWidth = titleTextRef.current.offsetWidth;
      setTitleFontSize(parentWidth / titleFontRatio);
    }
    if (descriptionTextRef.current) {
      const parentWidth = descriptionTextRef.current.offsetWidth;
      setDescriptionFontSize(parentWidth / descriptionFontRatio);
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
      <div className="content-background-container">
        <img
          className="content-background-container"
          alt="Game"
          src="https://c.animaapp.com/m6UthH3E/img/game1.png"
        />
        <img
          className="content-background-mask"
          alt="Top mask"
          src="https://c.animaapp.com/m6UthH3E/img/top-mask.png"
        />
      </div>
      <div className="content-detail-list">
        <div className="content-trending" />
        <div className="content-text-wrapper-4">Trending</div>

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

        <div className="content-select" />
        <div className="content-text-wrapper-3">Play</div>
      </div>
    </div>
  );
};

export default ContentDetail;
