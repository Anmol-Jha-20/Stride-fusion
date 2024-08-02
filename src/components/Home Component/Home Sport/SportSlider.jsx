import React, { useState } from "react";

function SportSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const products = [
    {
      img: "https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_541,c_limit/a51d84b2-282a-44d6-957d-aa57473ed73d/nike-just-do-it.jpg",
      text: "Basketball Shoes",
      text2: "Styles made for your game.",
    },
    {
      img: "https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_541,c_limit/0376dfa6-a2d7-4867-bd13-4b8e465705c1/nike-just-do-it.jpg",
      text: "Golf Shoes",
      text2: "Conquer any course in style.",
    },
    {
      img: "https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_541,c_limit/3df1f8e5-5ece-4e81-87e6-f8a30c8a3fab/nike-just-do-it.jpg",
      text: "Trail Shoes",
      text2: "Gear that leads to wild places.",
    },
    {
      img: "https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_541,c_limit/65feef8f-2167-425a-801c-54fd50a85034/nike-just-do-it.jpg",
      text: "Tennis Shoes",
      text2: "Serve up in style.",
    },
    {
      img: "https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_541,c_limit/94ef3e07-a6da-4c4d-9c1d-c2abd0752b0a/nike-just-do-it.jpg",
      text: "Football Shoes",
      text2: "Bring mad style to the pitch with the latest gear.",
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
    <div className="relative max-w-[80rem] mx-auto">
      <div className="arrow flex justify-end mr-8">
        <button className="text-4xl m-3 font-semibold" onClick={gotoPrevSlide}>
          &lt;
        </button>
        <button className="text-4xl font-semibold" onClick={gotoNextSlide}>
          &gt;
        </button>
      </div>
      <div className="flex overflow-hidden items-center justify-center gap-4">
        {products
          .slice(currentIndex, currentIndex + 3)
          .map((products, index) => (
            <div
              key={index}
              className="flex-shrink justify-center items-center p-4"
            >
              <img
                className="object-cover hover:scale-105 duration-300"
                src={products.img}
                alt=""
              />
              <div className="text-xl ml-3 mt-3 font-medium">
                {products.text}
              </div>
              <p className="ml-3 my-1">{products.text2}</p>
              <span className="ml-3 font-semibold">Shop</span>
            </div>
          ))}
      </div>
    </div>
  );
}

export default SportSlider;
