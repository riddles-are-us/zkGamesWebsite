import React, { useEffect, useRef, useState } from "react";
import "./TrendingHeader.css";
import search from "../../../images/backgrounds/search.png";
import notification from "../../../images/backgrounds/notification.png";
import user from "../../../images/backgrounds/user.png";
import more from "../../../images/backgrounds/more.png";

const fontRatio = 3;

const TrendingHeader = () => {
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
    <div className="trending-header-container">
      <div className="content-search-container">
        <img
          className="trending-header-search-image"
          alt="Search"
          src={search}
        />

        <input
          className="trending-header-input"
          placeholder="Search"
          type="text"
          style={{
            fontSize: fontSize * 2,
          }}
        />
      </div>

      <div className="trending-header-right-list">
        <img
          className="trending-header-notification-image"
          alt="Notification"
          src={notification}
        />

        <img className="trending-header-user-image" alt="User" src={user} />

        <p
          ref={textRef}
          className="trending-header-user-name-text"
          style={{
            fontSize: fontSize,
            width: `${textWidth}px`,
          }}
        >
          Name
        </p>

        <img className="trending-header-more-image" alt="More" src={more} />
      </div>
    </div>
  );
};

export default TrendingHeader;
