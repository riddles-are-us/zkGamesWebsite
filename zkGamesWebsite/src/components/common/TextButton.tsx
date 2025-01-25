import React, { useState } from "react";
import "./TextButton.css";

interface Props {
  isDisabled: boolean;
  text: string;
  defaultTextColor?: string;
  hoverTextColor?: string;
  clickedTextColor?: string;
  disabledTextColor?: string;
  onClick: () => void;
}

const TextButton = ({
  isDisabled,
  text,
  defaultTextColor = "#e6e6e6",
  hoverTextColor = "#ffffff",
  clickedTextColor = "#e6e6e6",
  disabledTextColor = "#808080",
  onClick,
}: Props) => {
  const [isClicked, setIsClicked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseDown = () => {
    if (!isDisabled) {
      setIsClicked(true);
    }
  };

  const handleMouseUp = () => {
    if (!isDisabled) {
      setIsClicked(false);
      onClick();
    }
  };

  const handleMouseLeave = () => {
    if (!isDisabled) {
      setIsClicked(false);
      setIsHovered(false);
    }
  };

  const handleMouseEnter = () => {
    if (!isDisabled) {
      setIsHovered(true);
    }
  };

  return (
    <button
      className={`text-button ${isDisabled ? "text-button-disabled" : ""}`}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      disabled={isDisabled}
    >
      <span
        className="text-button-text"
        style={{
          color: isDisabled
            ? disabledTextColor
            : isClicked
            ? clickedTextColor
            : isHovered
            ? hoverTextColor
            : defaultTextColor,
        }}
      >
        {text}
      </span>
    </button>
  );
};

export default TextButton;
