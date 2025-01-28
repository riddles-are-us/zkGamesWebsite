import React from "react";
import "./Content.css";
import ContentBar from "./ContentBar";

const Content = () => {
  return (
    <div className="content-container">
      <ContentBar fontRatio={3} />
      <div className="content-detail-container">
        <img
          className="content-game"
          alt="Game"
          src="https://c.animaapp.com/m6UthH3E/img/game1.png"
        />

        <img
          className="content-top-mask"
          alt="Top mask"
          src="https://c.animaapp.com/m6UthH3E/img/top-mask.png"
        />
        <div className="content-select" />

        <div className="content-text-wrapper-2">Automata</div>

        <div className="content-text-wrapper-3">Play</div>

        <p className="content-p">
          Information Information Information Information Information
        </p>

        <div className="content-trending" />

        <div className="content-text-wrapper-4">Trending</div>
      </div>
      <div className="content-game-list-container">
        <div className="content-text-wrapper-5">Featured</div>

        <div className="content-card">
          <img
            className="content-rectangle"
            alt="Rectangle"
            src="https://c.animaapp.com/m6UthH3E/img/rectangle-1@2x.png"
          />

          <div className="content-overlap-2">
            <div className="content-play">
              <div className="content-frame">
                <div className="content-text-wrapper-6">Play</div>
              </div>
            </div>

            <div className="content-frame-2">
              <div className="content-text-wrapper-7">MemeDisco</div>

              <div className="content-text-wrapper-8">
                information ajsfvijfpvpojsdcsdcv pdvjpowejc posvjvs
              </div>
            </div>
          </div>
        </div>

        <div className="content-card-2">
          <img
            className="content-rectangle"
            alt="Rectangle"
            src="https://c.animaapp.com/m6UthH3E/img/rectangle-1-1@2x.png"
          />

          <div className="content-overlap-2">
            <div className="content-play">
              <div className="content-frame">
                <div className="content-text-wrapper-6">Play</div>
              </div>
            </div>

            <div className="content-frame-2">
              <div className="content-text-wrapper-7">MemeDisco</div>

              <div className="content-text-wrapper-8">
                information ajsfvijfpvpojsdcsdcv pdvjpowejc posvjvs
              </div>
            </div>
          </div>
        </div>

        <div className="content-card-3">
          <img
            className="content-rectangle"
            alt="Rectangle"
            src="https://c.animaapp.com/m6UthH3E/img/rectangle-1-2@2x.png"
          />

          <div className="content-overlap-2">
            <div className="content-play">
              <div className="content-frame">
                <div className="content-text-wrapper-6">Play</div>
              </div>
            </div>

            <div className="content-frame-2">
              <div className="content-text-wrapper-7">MemeDisco</div>

              <div className="content-text-wrapper-8">
                information ajsfvijfpvpojsdcsdcv pdvjpowejc posvjvs
              </div>
            </div>
          </div>
        </div>

        <div className="content-card-4">
          <img
            className="content-rectangle"
            alt="Rectangle"
            src="https://c.animaapp.com/m6UthH3E/img/rectangle-1-3@2x.png"
          />

          <div className="content-overlap-2">
            <div className="content-play">
              <div className="content-frame">
                <div className="content-text-wrapper-6">Play</div>
              </div>
            </div>

            <div className="content-frame-2">
              <div className="content-text-wrapper-7">MemeDisco</div>

              <div className="content-text-wrapper-8">
                information ajsfvijfpvpojsdcsdcv pdvjpowejc posvjvs
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
