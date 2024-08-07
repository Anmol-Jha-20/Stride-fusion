import React from "react";
import "./ScrollProduct.css";

function ScrollProduct({ image, title }) {
  return (
    <div className="scroll__product mx-8 p-5 mb-4">
      <div className="product__scroll">
        <img className="max-w-52 h-64 object-contain" src={image} />
      </div>
      <span>{title}</span>
    </div>
  );
}

export default ScrollProduct;
