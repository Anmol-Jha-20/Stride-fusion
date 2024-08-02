import { useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "./ImageSlider.css";

const slideStyles = {
  width: "100%",
  height: "100%",
  backgroundSize: "cover",
  backgroundPosition: "center",
  zIndex: "-1",
  marginBottom: "-150px",
  overflow: "hidden",
};

function ImageSlider({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const slideStylesWidthBackground = {
    ...slideStyles,
    backgroundImage: `url(${slides[currentIndex].url})`,
  };

  return (
    <div className="slider">
      <div>
        <div className="left__arrowstyles" onClick={goToPrevious}>
          <ArrowBackIosIcon />
        </div>
        <div className="right__arrowstyles" onClick={goToNext}>
          <ArrowForwardIosIcon />
        </div>
      </div>
      <div style={slideStylesWidthBackground}></div>
    </div>
  );
}

export default ImageSlider;
