import React, { useEffect, useRef, useState } from "react";
import "./BarTabButton.css";
import ElementButton from "./ElementButton";

interface Props {
  isDisabled: boolean;
  isSelected: boolean;
  imagePath: string;
  text: string;
  fontRatio: number;
  defaultTextColor?: string;
  hoverTextColor?: string;
  clickedTextColor?: string;
  disabledTextColor?: string;
  onClick: () => void;
}

const BarTabButton = ({
  isDisabled,
  isSelected,
  imagePath,
  text,
  fontRatio,
  defaultTextColor = "#e6e6e6",
  hoverTextColor = "#ffffff",
  clickedTextColor = "#e6e6e6",
  disabledTextColor = "#808080",
  onClick,
}: Props) => {
  const textRef = useRef<HTMLParagraphElement>(null);
  const [fontSize, setFontSize] = useState<number>(0);

  const adjustSize = () => {
    if (textRef.current) {
      const parentWidth = textRef.current.offsetWidth;
      setFontSize(parentWidth / fontRatio);
    }
  };

  useEffect(() => {
    adjustSize();
    window.addEventListener("resize", adjustSize);
    return () => {
      window.removeEventListener("resize", adjustSize);
    };
  }, []);

  const getElement = (color: string) => {
    return (
      <div
        className={
          isSelected ? "bar-tab-selected-container" : "bar-tab-normal-container"
        }
      >
        <img className="bar-tab-button-image" src={imagePath} />
        <p
          ref={textRef}
          className="bar-tab-button-text"
          style={{
            fontSize: fontSize,
            color: color,
          }}
        >
          {text}
        </p>
      </div>
    );
  };

  return (
    <ElementButton
      isDisabled={isDisabled}
      defaultElement={getElement(defaultTextColor)}
      hoverElement={getElement(hoverTextColor)}
      clickedElement={getElement(clickedTextColor)}
      disabledElement={getElement(disabledTextColor)}
      onClick={onClick}
    />
  );
};

export default BarTabButton;
