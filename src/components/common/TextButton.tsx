import React, { useState } from "react";
import "./TextButton.css";
import ElementButton from "./ElementButton";

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
  return (
    <ElementButton
      isDisabled={isDisabled}
      defaultElement={
        <span
          className="text-button"
          style={{
            color: defaultTextColor,
          }}
        >
          {text}
        </span>
      }
      hoverElement={
        <span
          className="text-button"
          style={{
            color: hoverTextColor,
          }}
        >
          {text}
        </span>
      }
      clickedElement={
        <span
          className="text-button"
          style={{
            color: clickedTextColor,
          }}
        >
          {text}
        </span>
      }
      disabledElement={
        <span
          className="text-button"
          style={{
            color: disabledTextColor,
          }}
        >
          {text}
        </span>
      }
      onClick={onClick}
    />
  );
};

export default TextButton;
