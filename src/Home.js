import React from "react";
import "./Home.css";
import Searchbox from "./Searchbox"
import Products from "./Products"
import Navbar from "./Navbar"
import Footer from "./Footer"

import Extrafooter from "./Extrafooter";
import Rectangleone from "./Rectangleone.png";
import Rectangletwo from "./Rectangletwo.png";

export default function Home() {
  return (
    <div>
      
<Navbar/>
      <section>
        <Searchbox/>

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
      <Footer />
      <Extrafooter />
      
    </div>
  );
}
