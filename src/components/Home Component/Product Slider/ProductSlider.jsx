import React, { useState } from "react";
import "./ProductSlider.css";

function ProductSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const products = [
    {
      img: "https://m.media-amazon.com/images/I/71qj8pazIdL._SY535_.jpg",
      text: "Air Jordan 1",
    },
    {
      img: "https://m.media-amazon.com/images/I/71JYxFln0+L._SX695_.jpg",
      text: "Blazer",
    },
    {
      img: "https://m.media-amazon.com/images/I/71-Ve9Dm8HL._SX695_.jpg",
      text: "Air Force 1",
    },
    {
      img: "https://m.media-amazon.com/images/I/61n6bSLTciL._SY535_.jpg",
      text: "Sneaker",
    },
    {
      img: "https://m.media-amazon.com/images/I/51eh7polk1L._SY535_.jpg",
      text: "Puma",
    },
    {
      img: "https://m.media-amazon.com/images/I/51qCp48G8QL._SX695_.jpg",
      text: "Neeman",
    },
    {
      img: "https://m.media-amazon.com/images/I/71BgzABJjiL._SX695_.jpg",
      text: "Dunk",
    },
  ];

  const totalProducts = products.length;
  const gotoPrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalProducts - 1 : prevIndex - 1
    );
  };

  const gotoNextSlide = () => {
    setCurrentIndex((nextIndex) =>
      nextIndex === totalProducts - 1 ? 0 : nextIndex + 1
    );
  };
  return (
    <div>
      <div className="arrow flex justify-end mr-8">
        <button className="text-4xl m-3 font-semibold" onClick={gotoPrevSlide}>
          &lt;
        </button>
        <button className="text-4xl font-semibold" onClick={gotoNextSlide}>
          &gt;
        </button>
      </div>
      <div className="relative max-w-[80rem] mx-auto py-20">
        <div className="product__image flex overflow-hidden items-center justify-center gap-1 h-80">
          {products
            .slice(currentIndex, currentIndex + 4)
            .map((products, index) => (
              <div
                key={index}
                className="flex-shrink justify-center items-center p-4 w-80"
              >
                <img
                  className="object-contain hover:scale-105 duration-300 w-full h-72"
                  src={products.img}
                  alt="Shoes"
                />
                <div className="text-2xl ml-12 mt-3 font-medium">
                  {products.text}
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default ProductSlider;
