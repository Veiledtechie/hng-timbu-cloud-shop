import React from "react";
import "./Home.css";
import Products from "./Products";
import MivamartImage from "./MivamartImage.jpg";
import Wishlist from "./Wishlist.jpg";
import Search from "./Search.jpg";
import cart from "./cart.jpg";
import profile from "./profile.jpg";
import Rectangleone from "./Rectangleone.png";
import Rectangletwo from "./Rectangletwo.png";

export default function Home() {
  return (
    <div className="container">
      <nav className="d-flex justify-content-between">
        <img
          src={MivamartImage}
          alt="Logo of online shop"
          className="mivamart"
        />
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#">Products</a>
          </li>
          <li>
            <a href="#">Best sellers</a>
          </li>
          <li>
            <a href="#">Catalog</a>
          </li>
          <li>
            <a href="#">Contact us</a>
          </li>
        </ul>
        <ul className="icons">
          <li>
            <img src={Search} alt="" />
          </li>
          <li>
            <img src={Wishlist} alt="" />
          </li>
          <li>
            <img src={cart} alt="" />
          </li>

          <li>
            <img src={profile} alt="" />
          </li>
        </ul>
      </nav>

      <section>
        <div className=" row search-container mt-5 ">
          <div className=" col-6 products-label">Products</div>
          <div className=" col-6 search-input">
            <input
              type="search"
              placeholder="Search"
              className="form-control"
            />
            <img src={Search} alt="" className="search-icon" />
          </div>
        </div>

        <div className="row mt-5 memories">
          <div className="col-6">
            <h2 className="memories-details">Make Memories with Miva</h2>
            <p className="memories-details-two">
              Explore our curated selection of premium quality designed and
              handmade pieces to elevate your decor
            </p>
          </div>

          <div className="col-6 memories-images">
            <img src={Rectangletwo} alt="" className="rectangle2" />

            <img src={Rectangleone} alt="" className="Rectangle1" />
          </div>
        </div>
      </section>
      <Products />
    </div>
  );
}
