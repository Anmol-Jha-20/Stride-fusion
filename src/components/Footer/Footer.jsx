import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer w-full mt-10 h-[30rem] bg-slate-100">
      <div className="flex p-10 justify-evenly items-center gap-4">
        <div className="flex flex-col">
          <div className="shoes text-xl font-semibold mt-28">Shoes</div>
          <div className="space__top mt-3">All Shoes</div>
          <div className="space__top mt-3">Custom Shoes</div>
          <div className="space__top mt-3">Jordan Shoes</div>
          <div className="space__top mt-3">Running Shoes</div>
          <div className="space__top mt-3">Basketball Shoes</div>
          <div className="space__top mt-3">Football Shoes</div>
          <div className="space__top mt-3">Gym & Training Shoes</div>
          <div className="space__top none mt-3">Lifestyle Shoes</div>
        </div>
        <div className="sports__container flex flex-col">
          <div className="sports text-xl font-semibold mt-28">Sports</div>
          <div className="mt-3">Cricket</div>
          <div className="mt-3">Running</div>
          <div className="mt-3">Football</div>
          <div className="mt-3">Tennis</div>
          <div className="mt-3">Basketball Shoes</div>
          <div className="mt-3">Outdoor</div>
          <div className="mt-3">Swimming</div>
          <div className="mt-3">Skateboarding</div>
        </div>
        <div className="kids__container flex flex-col">
          <div className="kids text-xl font-semibold mt-28">Kids'</div>
          <div className="space__top none mt-3">Infant & Toddler Shoes</div>
          <div className="space__top mt-3">Kids' Shoes</div>
          <div className="space__top mt-3">Kids' Jordan Shoes</div>
          <div className="space__top mt-3">Kids' Running Shoes</div>
          <div className="space__top mt-3">Kids' Basketball Shoes</div>
          <div className="space__top mt-3">Kids' Football Shoes</div>
          <div className="space__top none mt-3">Kids' Socks</div>
          <div className="space__top none mt-3">Kids' Lifestyle Shoes</div>
        </div>
        <div className="support__container flex flex-col">
          <div className="support text-xl font-semibold mt-28">Support</div>
          <div className="space__top mt-3">Help</div>
          <div className="space__top mt-3">Customer Services</div>
          <div className="space__top mt-3">Returns & Exchanges</div>
          <div className="space__top mt-3">Shipping</div>
          <div className="space__top safety mt-3">Product Safety</div>
          <div className="space__top mt-3">Order Tracker</div>
          <div className="space__top mt-3">Store Finder</div>
          <div className="space__top mt-3">strideClub</div>
          <div className="space__top mt-3">strideclub Terms and conditions</div>
        </div>
      </div>
      <div className="p-4">© 2024 Stridefusion, Inc. All rights reserved</div>
    </div>
  );
}

export default Footer;
