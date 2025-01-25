import React from "react";
import "./Bar.css";

const Bar = () => {
  return (
    <div className="bar-overlap-3">
      <img
        className="bar-line"
        src="https://c.animaapp.com/m6UthH3E/img/line-1.svg"
      />

      <img
        className="bar-zkgame-logo"
        alt="Zkgame logo"
        src="https://c.animaapp.com/m6UthH3E/img/zkgame-logo-1@2x.png"
      />

      <div className="bar-text-wrapper-9">More Information</div>

      <p className="bar-about-us-payment">
        About us
        <br />
        Payment <br />
        Privacy Policy <br />
        Terms and Conditions
      </p>

      <div className="bar-vertical-line" />
      <div className="bar-horizontal-line-1" />
      <div className="bar-horizontal-line-2" />

      <img
        className="bar-info"
        alt="Info"
        src="https://c.animaapp.com/m6UthH3E/img/info-1@2x.png"
      />

      <div className="bar-trending-wrapper">
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
          src="https://c.animaapp.com/m6UthH3E/img/favourite-icon@2x.png"
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
      </div>

      <div className="bar-setting">
        <img
          className="bar-setting-2"
          alt="Setting"
          src="https://c.animaapp.com/m6UthH3E/img/setting@2x.png"
        />

        <div className="bar-text-wrapper-12">Setting</div>
      </div>
    </div>
  );
};

export default Bar;
