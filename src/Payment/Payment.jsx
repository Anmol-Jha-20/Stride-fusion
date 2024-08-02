import React from "react";
import "./Payment.css";
import { useStateValue } from "../Provider/StateProvider.jsx";
import CheckoutProduct from "../Checkout/CheckoutProduct.jsx";
import { Link } from "react-router-dom";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../reducer.js";
import { CardElement } from "@stripe/react-stripe-js";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  const handleClick = (e) => {
    e.preventDefault();
    alert("Your order is Placed");
  };
  return (
    <div className="payment mt-24">
      <div className="payment_container">
        <h1 className="text-xl">
          Checkout (
          <Link to="/checkout" className="text-indigo-400">
            {basket?.length} items
          </Link>
          )
        </h1>

        <div className="payment_section">
          <div className="payment_title">
            <h3 className="text-2xl font-semibold">Delivery Address</h3>
          </div>
          <div className="payment_address">
            <p>{user?.email}</p>
            <p>1234 Prithviraj Road</p>
            <p>Delhi, India</p>
          </div>
        </div>

        <div className="payment_section">
          <div className="payment_title">
            <h3 className="text-2xl font-semibold">
              Review items and Delivery
            </h3>
          </div>
          <div className="payment_items">
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
                ratingtext={item.ratingtext}
              />
            ))}
          </div>
        </div>

        <div className="payment_section">
          <div className="payment_title">
            <h3 className="text-2xl font-semibold">Payment Method</h3>
          </div>
          <div className="payment_details">
            <form onSubmit={handleClick}>
              <div className="row">
                <div className="col">
                  <h3 className="title">payment</h3>

                  <div className="inputBox">
                    <span>cards accepted :</span>
                    <img src="card_img.png" alt="" />
                  </div>
                  <div className="inputBox">
                    <span>name on card :</span>
                    <input type="text" placeholder="mr. john deo" required />
                  </div>

                  <CardElement />
                </div>
              </div>
              <CurrencyFormat
                renderText={(value) => (
                  <>
                    <h3>Order Total: {value}</h3>
                  </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"₹"}
              />
              <button className="submit-btn">
                <span>Buy Now</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
