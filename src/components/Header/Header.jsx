import React from "react";
import Logo from "../Logo.jsx";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import "./Header.css";
import { useStateValue } from "../../Provider/StateProvider.jsx";
import { auth } from "../../firebase.js";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <>
      <div className="header absolute top-0 z-[4]">
        <div className="header__elements flex justify-evenly">
          <div className="logo__name">
            <Link to="/">
              <Logo />
            </Link>
          </div>
          <div className="header__elements flex m-[1.5rem]">
            <div className="text-xl px-2 py-3">New & Featured</div>
            <div className="text-xl px-2 py-3">Men</div>
            <div className="text-xl px-2 py-3">Women</div>
            <div className="text-xl px-2 py-3">Kids</div>
            <div className="text-xl px-2 py-3">Sale</div>
            <div className="text-xl px-2 py-3">Customise</div>
            <div className="text-xl px-2 py-3">Sneakers</div>
          </div>
          <div className="header__input m-[0.5rem] flex items-center">
            <input
              className="bg-gray-200 rounded-sm px-1 h-8"
              type="text"
              placeholder="Search"
            />
            <button className="header__search bg-gray-300 h-[2.2rem] px-1 ">
              <SearchIcon className="search__icon" />
            </button>
          </div>
          <div className="header__nav flex my-[2.2rem]">
            <Link to={!user && "/login"}>
              <div className="log__in" onClick={handleAuthentication}>
                <span className="text-xl">{user ? "Logout" : "Login"}</span>
              </div>
            </Link>
            <Link to="/checkout">
              <div className="cart mx-4 mt-1 flex">
                <i className="fa-solid fa-cart-shopping"></i>
                <span className="text-2xl mt-[-0.5rem] ml-1">
                  {basket?.length}
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
