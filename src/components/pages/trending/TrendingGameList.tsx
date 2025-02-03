import React, { useEffect, useRef, useState } from "react";
import "./TrendingGameList.css";
import TrendingGameElement from "./TrendingGameElement";
import Grid from "../../common/Grid";
import { gameDatas } from "../../GameDatas";

const fontRatio = 4;
const columnCount = 4;

const TrendingGameList = () => {
  const rowCount = Math.ceil(gameDatas.length / columnCount);
  const textRef = useRef<HTMLParagraphElement>(null);
  const gridRef = useRef<HTMLParagraphElement>(null);
  const [fontSize, setFontSize] = useState<number>(0);
  const [gridElementWidth, setGridElementWidth] = useState<number>(0);
  const [gridElementHeight, setGridElementHeight] = useState<number>(0);

  const adjustSize = () => {
    if (textRef.current) {
      const parentHeight = textRef.current.offsetHeight;
      setFontSize(parentHeight / fontRatio);
    }
    if (gridRef.current) {
      const width = gridRef.current.offsetWidth / 4;
      const height = (width * 405) / 332;
      setGridElementWidth(width);
      setGridElementHeight(height);
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
    <div className="trending-game-list-container">
      <div className="trending-game-list-list">
        <p
          ref={textRef}
          className="trending-game-list-title-text"
          style={{ fontSize: fontSize }}
        >
          Featured
        </p>

        <div
          ref={gridRef}
          className="trending-game-list-game-card-grid"
          style={{ height: gridElementHeight * rowCount }}
        >
          <Grid
            elementWidth={gridElementWidth}
            elementHeight={gridElementHeight}
            columnCount={columnCount}
            rowCount={rowCount}
            elements={gameDatas
              .slice(0, columnCount * rowCount)
              .map((gameData, index) => (
                <TrendingGameElement
                  key={index}
                  width={gridElementWidth}
                  height={gridElementHeight}
                  gameData={gameData}
                />
              ))}
          />
        </div>
      </div>
    </div>
  );
};

export default TrendingGameList;
