import React from "react";
import "./Content.css";
import ContentBar from "./ContentBar";
import ContentDetail from "./ContentDetail";

const Content = () => {
  return (
    <div className="content-container">
      <ContentBar />
      <ContentDetail />
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
