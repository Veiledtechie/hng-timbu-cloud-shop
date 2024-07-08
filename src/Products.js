import React from "react";
import "./Home.css";
import Rectanglethree from "./Rectanglethree.jpg";
import Rectanglefour from "./Rectanglefour.jpg";
import Rectanglefive from "./Rectanglefive.jpg";
import Rectanglesix from "./Rectanglesix.jpg";
import cart from "./cart.jpg";
import Wishlist from "./Wishlist.jpg";
import Frameone from "./Frameone.png";

export default function Products() {
  return (
    <div className="header">
      <nav className="d-flex justify-content-between mt-5">
        <ul className="featured-categories">
          <li className="featured">Featured categories</li>
          <li>Dinnerware</li>
          <li>Mugs & Teapots</li>
          <li>Home Decor</li>
          <li>Vases</li>

          <li>Jewelry</li>
          <li>Platters</li>
          <li>Lanterns</li>
        </ul>
      </nav>

      <section>
        <div className="d-flex justify-content-between mt-5 ">
          <div className="standard">
            <img src={Rectanglethree} alt="" className="wares-images" />
            <p className="money">$450.00</p>
            <div className="d-flex justify-content-between">
              <div>
                <p className="wares-details">Standard pedestal bowl</p>
                <p className="wares-details2">55 pieces available</p>
              </div>
              <div>
                <img src={Wishlist} alt="" className="wares-details2" />

                <p>
                  <img src={cart} alt="" className="wares-details2" />
                </p>
              </div>
            </div>
            <p>
              <img src={Frameone} alt="" className="frame" />
            </p>
          </div>

          <div className="standard">
            <img src={Rectanglefour} alt="" className="wares-images" />

            <p className="money">$250.00</p>
            <div className="d-flex justify-content-between">
              <div>
                <p className="wares-details">3-piece Calmaria-set</p>
                <p className="wares-details2">12 pieces available</p>
              </div>

              <div>
                <img src={Wishlist} alt="" className="wares-details2" />

                <p>
                  <img src={cart} alt="" className="wares-details2" />
                </p>
              </div>
            </div>
            <p>
              <img src={Frameone} alt="" className="frame" />
            </p>
          </div>

          <div className="standard">
            <img src={Rectanglefive} alt="" className="wares-images" />

            <p className="money">$250.00</p>
            <div className="d-flex justify-content-between">
              <div>
                <p className="wares-details">3-piece Calmaria-set</p>
                <p className="wares-details2">12 pieces available</p>
              </div>

              <div>
                <img src={Wishlist} alt="" className="wares-details2" />

                <p>
                  <img src={cart} alt="" className="wares-details2" />
                </p>
              </div>
            </div>
            <p>
              <img src={Frameone} alt="" className="frame" />
            </p>
          </div>
          <div className="standard">
            <img src={Rectanglesix} alt="" className="wares-images" />
          </div>
        </div>
      </section>
    </div>
  );
}
