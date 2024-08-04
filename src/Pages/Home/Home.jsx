import React from "react";
import shoeVideo from "../../assets/shoeVideo.mp4";
import ScrollProduct from "../../components/Home Component/ScrollProduct/ScrollProduct.jsx";
import HomeCard from "../../components/Home Component/Home Card/HomeCard.jsx";
import OuterSlider from "../../components/Home Component/Image Slider/OuterSlider.jsx";
import ProductSlider from "../../components/Home Component/Product Slider/ProductSlider.jsx";
import SportSlider from "../../components/Home Component/Home Sport/SportSlider.jsx";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <main>
      <div className="hero__section relative">
        <div className="video__element w-full h-[130vh] absolute top-0 left-0">
          <video
            className="w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            src={shoeVideo}
            autoPlay
            loop
            muted
          ></video>
        </div>
      </div>
      <div className="featured pt-[112rem]">
        <div className="text-2xl pl-5">Featured</div>
        <div className="scroll__products flex overflow-x-auto gap-5 mt-3">
          <Link to="/stussyy">
            <ScrollProduct
              image="https://m.media-amazon.com/images/I/71udcnhlrvL._SY535_.jpg"
              title="Men's STUSSYY (MEMORY TECH) Running Shoes"
            />
          </Link>
          <Link to="/campusterminator">
            <ScrollProduct
              image="https://m.media-amazon.com/images/I/7116DVkEANL._SY535_.jpg"
              title="Campus Mens Terminator (N) Running Shoes"
            />
          </Link>
          <Link to="/SparxSxO661g">
            <ScrollProduct
              image="https://m.media-amazon.com/images/I/61SVQjnjCeL._SX695_.jpg"
              title="SPARX mens Sx0661g Sneaker"
            />
          </Link>
          <Link to="/SparxSx0414g">
            <ScrollProduct
              image="https://m.media-amazon.com/images/I/612Izduw2iL._SY535_.jpg"
              title="SPARX Mens Sx0414g Running Shoe"
            />
          </Link>
          <Link to="/RedTapeCasual">
            <ScrollProduct
              image="https://m.media-amazon.com/images/I/61wKonFdAaL._SY535_.jpg"
              title="Red Tape Casual Sneaker Shoes"
            />
          </Link>
          <Link to="/AdidasAerobolt">
            <ScrollProduct
              image="https://m.media-amazon.com/images/I/51JIjh8YcvL._SY535_.jpg"
              title="Adidas mens Aerobolt Running Shoe"
            />
          </Link>
          <Link to="/CampusAgr">
            <ScrollProduct
              image="https://m.media-amazon.com/images/I/61BzpN826fL._SY535_.jpg"
              title="Campus Men's AGR-004 Walking Shoes"
            />
          </Link>
          <Link to="/SparxSx0706g">
            <ScrollProduct
              image="https://m.media-amazon.com/images/I/41BNwMRUaJL._SY535_.jpg"
              title="SPARX mens Sx0706g Running Shoe"
            />
          </Link>
        </div>
      </div>
      <div className="card mt-20 relative">
        <div className="trending text-2xl pl-5 my-6 flex">Trending</div>
        <HomeCard
          username="Nike Alate Bra"
          src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_848,c_limit/98109be2-1124-4d08-9b58-1d2388dbadf4/image.jpg"
          text="Looks Smooth, Feels Smoother"
        />
        <div className="just__in absolute top-[6.6%] left-[47%]">
          <HomeCard
            username="Just In: Air Max Dn"
            src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_761,c_limit/3c39a38c-9064-4e47-a740-b4d3d64d0e7a/image.png"
            text="Victor Wembanyama: Otherworldly Moves"
          />
        </div>
      </div>
      <div className="Deals mt-14">
        <div className="text-2xl pl-5 font-bold">Deals Under ₹1200</div>
        <div className="scroll__products flex overflow-x-auto gap-5 mt-3">
          <Link to="/AsianWonder">
            <ScrollProduct
              image="https://m.media-amazon.com/images/I/61utX8kBDlL._SY535_.jpg"
              title="ASIAN Men's Wonder-13"
            />
          </Link>
          <Link to="/SparxSynthetic">
            <ScrollProduct
              image="https://m.media-amazon.com/images/I/61z1INciL8L._SY535_.jpg"
              title="Sparx Men's Synthetic Running Shoes"
            />
          </Link>
          <Link to="/Centrino3392">
            <ScrollProduct
              image="https://m.media-amazon.com/images/I/71I8S-yPG+L._SY535_.jpg"
              title="Centrino Mens 3392 Causal Shoes "
            />
          </Link>
          <Link to="/AsianFuture01">
            <ScrollProduct
              image="https://m.media-amazon.com/images/I/610fN3RyKFL._SY535_.jpg"
              title="ASIAN Future-01 White Blue"
            />
          </Link>
          <Link to="/BourgeLoirez1">
            <ScrollProduct
              image="https://m.media-amazon.com/images/I/91LDlF9zQaL._SX695_.jpg"
              title="Bourge Mens Loire-z1 Running Shoes"
            />
          </Link>
          <Link to="/AsianF04">
            <ScrollProduct
              image="https://m.media-amazon.com/images/I/61C7ArtiuZL._SY535_.jpg"
              title="ASIAN F-04 Running Shoes"
            />
          </Link>
        </div>
      </div>
      <div className="home__slider mt-14">
        <OuterSlider />
      </div>
      <div className="pt-20">
        <div className="text-3xl pl-5">Classics Spotlight</div>
        <ProductSlider />
      </div>
      <div className="pt-20">
        <div className="text-3xl pl-5 font-medium">Shop by Sport</div>
        <SportSlider />
      </div>
    </main>
  );
}

export default Home;
