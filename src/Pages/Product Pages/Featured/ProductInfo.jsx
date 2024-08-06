import React, { useState } from "react";
import "./ProductInfo.css";
import { useStateValue } from "../../../Provider/StateProvider.jsx";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function ProductInfo({ id, rating, src, title, price, ratingtext = "5" }) {
  const [add, setAdd] = useState("Add to Cart");
  const [color, setColor] = useState("#c1c1c1");
  const [quantity, setQuantity] = useState(1);
  const [{ basket, user }, dispatch] = useStateValue();
  const navigate = useNavigate();
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: src,
        price: price,
        rating: rating,
        ratingtext: ratingtext,
        quantity: quantity,
      },
    });
    setAdd("Product Added in the Cart");
    setColor("#577776");
    setTimeout(() => {
      setAdd("Add to Cart");
      setColor("#c1c1c1");
    }, 1000);
  };
  function handleQuantity(e) {
    setQuantity(Number(e.target.value));
  }
  return (
    <div>
      <div className="product-display m-24">
        <div className="product-d-image">
          <div className="product-icons">
            <img src={src} width="100" />
            <img src={src} width="100" />
            <img src={src} width="100" />
            <img src={src} width="100" />
            <img src={src} width="100" />
          </div>
          <div className="product-main-image">
            <img src={src} width="800" />
          </div>
          <div className="product-d-details">
            <p className="product-title">{title}</p>
            <p className="brand-store">visit the stridefusion store</p>
            <div className="product-rating">
              <div>
                <div>
                  {ratingtext}
                  {Array(rating)
                    .fill()
                    .map((_, i) => (
                      <p key={i}>⭐</p>
                    ))}
                </div>
                <p>104,185 ratings | Search this page</p>
              </div>
              <h5>10K+ bought in past month</h5>
              <hr />
            </div>
            <div className="product-price">
              <div>
                <p>-35%</p>
                <h1>
                  <sup>₹</sup>
                  <span>{price}</span>
                </h1>
              </div>
              <h5>
                List Price: <span>₹4000</span>
              </h5>
              <p>
                Get <b>Fast, Free Shipping</b> with&nbsp;
                <span>Stridefusion Membership</span>
              </p>
              <p>
                <span>FREE Returns</span>
              </p>
              <p>
                <span>Join Membership to buy this item at ₹2000</span>
              </p>
              <p>
                Available at a lower price from <span>other sellers</span> that
                may not offer free shipping for StrideFusion Members
              </p>
            </div>
            <h1 className="my-2 font-medium">Product Details</h1>
            <div className="product-info">
              <p>
                <b>Material type</b>
              </p>
              <p>Synthetic</p>
              <p>
                <b>Closure type</b>
              </p>
              <p>Lace-Up</p>
              <p>
                <b>Heel type</b>
              </p>
              <p>No Heel</p>
              <p>
                <b>Sole material</b>
              </p>
              <p>Thermoplastic Elastomers</p>
              <p>
                <b>Style</b>
              </p>
              <p>Sneaker</p>
            </div>
            <hr />
            <div className="product-description">
              <h1>About this item</h1>
              <ul>
                <li>
                  Comfortable Men's Sneakers :- Made from durable PU with mesh
                  and synthetic material, these mens sneakers are soft,
                  comfortable and breathable, bringing you comfort all day long,
                  ideal for daily wear and sports
                </li>
                <li>
                  Non-slip Chunky Sneakers :- The anti-slip and chunky TPR
                  outsole design provides excellent anti-slip and shock-proof
                  performance, making you more comfortable and stable to wear,
                  without worrying about falling.
                </li>
                <li>
                  Stylish Design :- Solid colors combination, unique laces,
                  Mesh,making color contrast for visual impact. Pair with your
                  favorite cloth for a fabulous look or with your everyday
                  casual for effortless chic style
                </li>
                <li>
                  Fashion Sneakers :- These sneakers for men athletic wear,
                  which comes with stylish appearance and classic style, perfect
                  with sports and casual wear, suitable for daily wear, walking,
                  sports, work and so on.
                </li>
                <li>
                  Phylon TPR sole provides traction and grip over varied
                  surfaces.
                </li>
              </ul>
            </div>
          </div>
          <div className="product-d-purchase">
            <div className="title">
              <h3>Buy now:</h3>
            </div>
            <h1 className="price">
              ₹<span>{price}</span>
            </h1>
            <div className="gap">
              <p>
                Get <b>Fast, Free Shipping</b> with
                <span>Stridefusion Membership</span>.
              </p>
              <p>
                <span>FREE Returns</span>
              </p>
            </div>
            <div className="gap">
              <p>
                <span>Free delivery</span>
                <b>Wednesday</b>,
              </p>
              <p>
                <b>July 31 </b>on orders shipped by StrideFusion over ₹3000
              </p>
            </div>
            <div className="gap">
              <p>
                Or fastest delivery <b>Tomorrow</b>, <b>July 30</b>. Order
                within
                <span>10 hrs 56 mins</span>
              </p>
            </div>
            <div className="delivery-location">
              <i className="fa-solid fa-location-dot"></i>
              <p>
                <span>Deliver to Dwarka Mor 110075</span>
              </p>
            </div>
            <h2 className="product-stock">In Stock</h2>
            <select
              className="product-quantity"
              value={quantity}
              onChange={handleQuantity}
            >
              <option value="1">Quantity: 1</option>
              <option value="2">Quantity: 2</option>
              <option value="3">Quantity: 3</option>
              <option value="4">Quantity: 4</option>
              <option value="5">Quantity: 5</option>
            </select>

            <button
              style={{ backgroundColor: color }}
              className="btn"
              onClick={addToBasket}
            >
              {add}
            </button>
            <Link to={!user && "/login"}>
              <button
                className="btn product-buy"
                onClick={(e) => {
                  if (user) {
                    navigate("/Orderpage");
                  }
                }}
              >
                Buy Now
              </button>
            </Link>
            <div className="product-seller-info">
              <p>Ships from</p>
              <p>
                <span>Stridefusion</span>
              </p>
              <p>Sold by</p>
              <p>
                <span>GLC-OL</span>
              </p>
              <p>Returns</p>
              <p>
                <span>
                  Eligible for return, Refund or Replacement within 30 days of
                  receipt
                </span>
              </p>
              <p>Payment</p>
              <p>
                <span>Secure transaction</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductInfo;
