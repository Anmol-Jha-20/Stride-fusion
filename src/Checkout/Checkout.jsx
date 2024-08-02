import React from "react";
import { useStateValue } from "../Provider/StateProvider";
import Subtotal from "../Subtotal/Subtotal";
import CheckoutProduct from "./CheckoutProduct.jsx";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="checkout mt-24 flex p-5 bg-white h-max">
      <div className="checkout__left">
        <div>
          <h3>Hello, {user ? user.email : "Guest"}</h3>
          <h2 className="checkout__title mr-3 p-3 border-b border-gray-100 text-2xl font-semibold">
            Your Shopping Cart
          </h2>

          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              rating={item.rating}
              ratingtext={item.ratingtext}
              price={item.price}
            />
          ))}
        </div>
      </div>
      <div className="checkout_right ml-16">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
