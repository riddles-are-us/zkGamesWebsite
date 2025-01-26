import React from "react";
import "./Bar.css";
import TextButton from "./common/TextButton";
import BarTabButton from "./common/BarTabButton";

const Bar = () => {
  return (
    <div className="bar-overlap-3">
      <div className="bar-vertical-line" />
      <div className="bar-horizontal-line-1" />
      <div className="bar-horizontal-line-2" />

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
      </div>
      {/* <div className="bar-trending-wrapper">
        <div className="bar-trending-2">
          <img
            className="bar-trending-icon"
            alt="Trending icon"
            src="https://c.animaapp.com/m6UthH3E/img/trending-icon@2x.png"
          />

          <div className="bar-text-wrapper-10">Trending</div>
        </div>
      </div>

      <div className="bar-favourite">
        <img
          className="bar-favourite-icon"
          alt="Favourite icon"
          src=""
        />

        <div className="bar-text-wrapper-11">Favourite</div>
      </div>

      <div className="bar-wallet">
        <img
          className="bar-wallet-2"
          alt="Wallet"
          src="https://c.animaapp.com/m6UthH3E/img/wallet@2x.png"
        />

        <div className="bar-text-wrapper-11">Wallet</div>
      </div> */}

      <div className="bar-setting">
        <img
          className="bar-setting-2"
          alt="Setting"
          src="https://c.animaapp.com/m6UthH3E/img/setting@2x.png"
        />

        <div className="bar-text-wrapper-12">Setting</div>
      </div>

      <div className="bar-text-wrapper-9">More Information</div>

      <img
        className="bar-info"
        alt="Info"
        src="https://c.animaapp.com/m6UthH3E/img/info-1@2x.png"
      />

      <p className="bar-about-us-payment">
        <TextButton
          isDisabled={false}
          text={"About us"}
          fontRatio={12}
          onClick={() => {
            /* */
          }}
        />
        <br />
        <TextButton
          isDisabled={false}
          text={"Payment"}
          fontRatio={12}
          onClick={() => {
            /* */
          }}
        />
        <br />
        <TextButton
          isDisabled={false}
          text={"Privacy Policy"}
          fontRatio={12}
          onClick={() => {
            /* */
          }}
        />
        <br />
        <TextButton
          isDisabled={false}
          text={"Terms and Conditions"}
          fontRatio={12}
          onClick={() => {
            /* */
          }}
        />
      </p>
    </div>
  );
};

export default Bar;
