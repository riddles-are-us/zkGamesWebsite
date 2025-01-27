import React, { useEffect, useRef, useState } from "react";
import "./BarMoreInformationButton.css";
import ElementButton from "./ElementButton";

interface Props {
  isDisabled: boolean;
  imagePath: string;
  text: string;
  fontRatio: number;
  defaultTextColor?: string;
  hoverTextColor?: string;
  clickedTextColor?: string;
  disabledTextColor?: string;
  onClick: () => void;
}

const BarMoreInformationButton = ({
  isDisabled,
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
      <>
        <img className="bar-more-information-button-image" src={imagePath} />
        <p
          ref={textRef}
          className="bar-more-information-button-text"
          style={{
            fontSize: fontSize,
            color: color,
          }}
        >
          {text}
        </p>
      </>
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

export default BarMoreInformationButton;
