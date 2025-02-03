import React, { useState } from "react";
import mask from "../images/backgrounds/mask.png";
import "./Carousel.css"; // External CSS file for styling

interface Props {
  images: string[];
}

const Carousel = ({ images }: Props) => {
  const [index1, setIndex1] = useState(0);
  const [index2, setIndex2] = useState(1);
  const [index3, setIndex3] = useState(2);
  const totalImages = images.length;

  const nextSlide = () => {
    setIndex1((prev) => (prev + 1) % totalImages);
    setIndex2((prev) => (prev + 1) % totalImages);
    setIndex3((prev) => (prev + 1) % totalImages);
  };

  const prevSlide = () => {
    setIndex1((prev) => (prev - 1 + totalImages) % totalImages);
    setIndex2((prev) => (prev - 1 + totalImages) % totalImages);
    setIndex3((prev) => (prev - 1 + totalImages) % totalImages);
  };

  return (
    <>
      <div className="content-detail-background-container">
        <img
          className="content-detail-background-container"
          alt="Game"
          src={images[index1]}
        />
        <img className="content-detail-background-mask" alt="mask" src={mask} />
      </div>
      <div className="carousel-container">
        <img className="carousel-image-1" src={images[index1]} />
        <img className="carousel-image-2" src={images[index2]} />
        <img className="carousel-image-3" src={images[index3]} />

        <button className="carousel-btn left" onClick={prevSlide} />
        <button className="carousel-btn right" onClick={nextSlide} />
      </div>
    </>
  );
};

export default Carousel;
