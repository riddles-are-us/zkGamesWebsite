import React from "react";
import "./Bar.css";
import TextButton from "./common/TextButton";
import BarTabButton from "./common/BarTabButton";
import BarMoreInformationButton from "./common/BarMoreInformationButton";

const Bar = () => {
  return (
    <div className="bar-container">
      <div className="bar-vertical-line" />

      <div className="bar-tab-list">
        <div className="bar-zkgame-logo-container">
          <img
            className="bar-zkgame-logo-image"
            alt="Zkgame logo"
            src="https://c.animaapp.com/m6UthH3E/img/zkgame-logo-1@2x.png"
          />
        </div>
        <div className="bar-tab-button-container">
          <BarTabButton
            isDisabled={false}
            isSelected={true}
            imagePath={
              "https://c.animaapp.com/m6UthH3E/img/trending-icon@2x.png"
            }
            text={"Trending"}
            fontRatio={7}
            onClick={() => {
              /* */
            }}
          />
        </div>

        <div className="bar-tab-button-container">
          <BarTabButton
            isDisabled={false}
            isSelected={false}
            imagePath={
              "https://c.animaapp.com/m6UthH3E/img/favourite-icon@2x.png"
            }
            text={"Favorite"}
            fontRatio={7}
            onClick={() => {
              /* */
            }}
          />
        </div>

        <div className="bar-tab-button-container">
          <BarTabButton
            isDisabled={false}
            isSelected={false}
            imagePath={"https://c.animaapp.com/m6UthH3E/img/wallet@2x.png"}
            text={"Wallet"}
            fontRatio={7}
            onClick={() => {
              /* */
            }}
          />
        </div>

        <div className="bar-horizontal-line-container">
          <div className="bar-horizontal-line" />
        </div>
        <div className="bar-tab-button-container">
          <BarTabButton
            isDisabled={false}
            isSelected={false}
            imagePath={"https://c.animaapp.com/m6UthH3E/img/setting@2x.png"}
            text={"Setting"}
            fontRatio={7}
            onClick={() => {
              /* */
            }}
          />
        </div>

        <div className="bar-horizontal-line-container">
          <div className="bar-horizontal-line" />
        </div>

        <div className="bar-more-information-button-container">
          <BarMoreInformationButton
            isDisabled={false}
            imagePath={"https://c.animaapp.com/m6UthH3E/img/info-1@2x.png"}
            text={"More Information"}
            fontRatio={10}
            onClick={() => {
              /* */
            }}
          />
        </div>
        <div className="bar-tab-text-container">
          <TextButton
            isDisabled={false}
            text={"About us"}
            fontRatio={15}
            textAlign={"left"}
            onClick={() => {
              /* */
            }}
          />
        </div>
        <div className="bar-tab-text-container">
          <TextButton
            isDisabled={false}
            text={"Payment"}
            fontRatio={15}
            textAlign={"left"}
            onClick={() => {
              /* */
            }}
          />
        </div>
        <div className="bar-tab-text-container">
          <TextButton
            isDisabled={false}
            text={"Privacy Policy"}
            fontRatio={15}
            textAlign={"left"}
            onClick={() => {
              /* */
            }}
          />
        </div>
        <div className="bar-tab-text-container">
          <TextButton
            isDisabled={false}
            text={"Terms and Conditions"}
            fontRatio={15}
            textAlign={"left"}
            onClick={() => {
              /* */
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Bar;
