import React from "react";
import { useStateValue } from "../Provider/StateProvider.jsx";

function CheckoutProduct({
  id,
  image,
  title,
  rating,
  ratingtext,
  price,
  quantity,
}) {
  const [{ basket }, dispatch] = useStateValue();
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className="checkoutProduct flex my-5">
      <img
        className="checkoutProduct_image object-contain w-[12rem] h-[12rem]"
        src={image}
      />

      <div className="CheckoutProduct_info pl-5">
        <p className="checkoutProduct_title text-xl font-extrabold">{title}</p>
        <p>
          <small>₹</small> <strong>{quantity * price}</strong>
        </p>
        <div className="checkoutProduct_rating flex">
          {ratingtext}
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>⭐</p>
            ))}
        </div>
        <p>Quantity: {quantity}</p>
        <button
          className="mt-3 px-3 text-[#111] bg-[#c1c1c1] cursor-pointer"
          onClick={removeFromBasket}
        >
          Remove from Cart
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
