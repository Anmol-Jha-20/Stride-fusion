import React from "react";
import "./OrderPage.css";
import { useStateValue } from "../../Provider/StateProvider.jsx";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../../reducer.js";

function OrderPage() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="mt-28">
      <div className="container">
        <h1 className="font-medium">Order Confirmation</h1>
        <div id="order-details">
          <p>
            <strong>Order ID:</strong> <span id="order-id">123456</span>
          </p>
          <p>
            <strong>Customer Name:</strong> {user?.email}
          </p>
          <CurrencyFormat
            renderText={(value) => (
              <>
                <p className="mt-4 text-xl ml-1">
                  Order Total ({basket.length} items): <strong>{value}</strong>{" "}
                </p>
              </>
            )}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"₹"}
          />
          <p>
            <strong>Shipping Address:</strong> Dwarka Mor, Delhi 110075
          </p>
        </div>
        <div id="confirmation-message">
          <p>Your order has been confirmed. Thank you for shopping with us!</p>
        </div>
      </div>
    </div>
  );
}

export default OrderPage;
