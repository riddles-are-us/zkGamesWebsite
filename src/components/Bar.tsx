import React from "react";
import "./Bar.css";
import TextButton from "./common/TextButton";
import BarTabButton from "./common/BarTabButton";
import BarMoreInformationButton from "./common/BarMoreInformationButton";
import zkgame_logo from "../images/backgrounds/zkgame_logo.png";
import trending from "../images/backgrounds/trending.png";
import favorite from "../images/backgrounds/favorite.png";
import wallet from "../images/backgrounds/wallet.png";
import setting from "../images/backgrounds/setting.png";
import info from "../images/backgrounds/info.png";

const Bar = () => {
  return (
    <div className="bar-container">
      <div className="bar-vertical-line" />

      <div className="bar-tab-list">
        <div className="bar-zkgame-logo-container">
          <img
            className="bar-zkgame-logo-image"
            alt="Zkgame logo"
            src={zkgame_logo}
          />
        </div>
        <div className="bar-tab-button-container">
          <BarTabButton
            isDisabled={false}
            isSelected={true}
            imagePath={trending}
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
            imagePath={favorite}
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
            imagePath={wallet}
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
            imagePath={setting}
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
            imagePath={info}
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
