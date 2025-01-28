import React, { useEffect, useRef, useState } from "react";
import "./ContentBar.css";

interface Props {
  fontRatio: number;
}

const ContentBar = ({ fontRatio }: Props) => {
  const textRef = useRef<HTMLParagraphElement>(null);
  const [fontSize, setFontSize] = useState<number>(0);
  const [textWidth, setTextWidth] = useState<number>(0);

  const adjustSize = () => {
    if (textRef.current) {
      const parentHeight = textRef.current.offsetHeight;
      setFontSize(parentHeight / fontRatio);
    }
  };

  const adjustWidth = () => {
    if (textRef.current) {
      setTextWidth(textRef.current.scrollWidth); // Set width to the exact text content width
    }
  };

  useEffect(() => {
    adjustSize();
    adjustWidth();
    window.addEventListener("resize", () => {
      adjustSize();
      adjustWidth();
    });
    return () => {
      window.removeEventListener("resize", () => {
        adjustSize();
        adjustWidth();
      });
    };
  }, [textRef]);

  return (
    <div className="content-bar-container">
      <div className="content-search">
        <div className="content-overlap-group-2">
          <img
            className="content-img"
            alt="Search"
            src="https://c.animaapp.com/m6UthH3E/img/search-1@2x.png"
          />

          <input className="content-input" placeholder="Search" type="text" />
        </div>
      </div>

      <div className="content-bar-right-list">
        <img
          className="content-bar-notification-image"
          alt="Alert"
          src="https://c.animaapp.com/m6UthH3E/img/alart@2x.png"
        />

        <img
          className="content-bar-user-image"
          alt="User"
          src="https://c.animaapp.com/m6UthH3E/img/user@2x.png"
        />

        <p
          ref={textRef}
          className="content-bar-user-name-text"
          style={{
            fontSize: fontSize,
            width: `${textWidth}px`, // Dynamically adjust width
          }}
        >
          Name name namename namename name
        </p>

        <img
          className="content-bar-more-image"
          alt="More"
          src="https://c.animaapp.com/m6UthH3E/img/more@2x.png"
        />
      </div>
    </div>
  );
};

export default ContentBar;
