import React, { useEffect, useRef, useState } from "react";
import "./ContentGameCard.css";

const titleFontRatio = 2.5;
const descriptionFontRatio = 5;
interface Props {
  width: number;
  height: number;
  title: string;
  description: string;
  link: string;
  imagePath: string;
}

const ContentGameCard = ({
  width,
  height,
  title,
  description,
  link,
  imagePath,
}: Props) => {
  const titleTextRef = useRef<HTMLParagraphElement>(null);
  const descriptionTextRef = useRef<HTMLParagraphElement>(null);
  const [titleFontSize, setTitleFontSize] = useState<number>(0);
  const [descriptionFontSize, setDescriptionFontSize] = useState<number>(0);

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
    <div
      className="content-game-card"
      style={{
        width: `${width}px`,
        height: `${height}px`,
      }}
    >
      <div className="content-game-card-container">
        <img className="content-game-card-image" src={imagePath} />
        <div className="content-game-card-detail-container">
          <p
            ref={titleTextRef}
            className="content-game-card-detail-title-text"
            style={{ fontSize: titleFontSize }}
          >
            {title}
          </p>
          <p
            ref={descriptionTextRef}
            className="content-game-card-detail-description-text"
            style={{ fontSize: descriptionFontSize }}
          >
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContentGameCard;
