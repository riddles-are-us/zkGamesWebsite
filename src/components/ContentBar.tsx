import React, { useEffect, useRef, useState } from "react";
import "./ContentBar.css";
import search from "../images/backgrounds/search.png";
import notification from "../images/backgrounds/notification.png";
import user from "../images/backgrounds/user.png";
import more from "../images/backgrounds/more.png";

const fontRatio = 3;

const ContentBar = () => {
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
      setTextWidth(textRef.current.scrollWidth);
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
  }, [textRef, fontSize]);

  return (
    <div className="content-bar-container">
      <div className="content-search-container">
        <img className="content-bar-search-image" alt="Search" src={search} />

        <input
          className="content-bar-input"
          placeholder="Search"
          type="text"
          style={{
            fontSize: fontSize * 2,
          }}
        />
      </div>

      <div className="content-bar-right-list">
        <img
          className="content-bar-notification-image"
          alt="Notification"
          src={notification}
        />

        <img className="content-bar-user-image" alt="User" src={user} />

        <p
          ref={textRef}
          className="content-bar-user-name-text"
          style={{
            fontSize: fontSize,
            width: `${textWidth}px`,
          }}
        >
          Name
        </p>

        <img className="content-bar-more-image" alt="More" src={more} />
      </div>
    </div>
  );
};

export default ContentBar;
