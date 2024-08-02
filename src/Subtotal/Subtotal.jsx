import React from "react";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../reducer.js";
import { useStateValue } from "../Provider/StateProvider.jsx";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Subtotal() {
  const navigate = useNavigate();
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p className="mt-4 text-xl ml-1">
              Subtotal ({basket.length} items): <strong>{value}</strong>{" "}
            </p>
            <small className="subtotal_gift">
              <input type="checkbox" className="input mr-10 ml-1 mt-2 " /> This
              order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
      />
      <Link to={!user && "/login"}>
        <button
          className="btn bg-[#c1c1c1] rounded-sm w-full h-8 mt-6 text-[#111] cursor-pointer"
          onClick={(e) => {
            if (user) {
              navigate("/payment");
            }
          }}
        >
          Proceed to Checkout
        </button>
      </Link>
    </div>
  );
}

export default Subtotal;
