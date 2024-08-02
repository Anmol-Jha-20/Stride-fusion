import ImageSlider from "./ImageSlider.jsx";
import "./ImageSlider.css";

function OuterSlider() {
  const slides = [
    {
      url: "https://images.unsplash.com/photo-1455849318743-b2233052fcff?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Image1",
    },
    {
      url: "https://plus.unsplash.com/premium_photo-1705554330163-2e0ccc1808e2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Image2",
    },
    {
      url: "https://images.unsplash.com/photo-1448387473223-5c37445527e7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Image3",
    },
    {
      url: "https://images.unsplash.com/photo-1438962136829-452260720431?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Image4",
    },
    {
      url: "https://images.unsplash.com/photo-1463100099107-aa0980c362e6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Image5",
    },
  ];
  return (
    <div>
      <div className="container__styles">
        <ImageSlider slides={slides} />
      </div>
    </div>
  );
}

export default OuterSlider;
