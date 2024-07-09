import React from "react"
import "./Home.css"
import Navbar from "./Navbar"
import Search from "./Search.jpg"
import Filter from "./Filter.jpg"
export default function Cartpage(){
    return(

        <div>

<Navbar/>
 
<div className=" row search-container mt-5 ">
          <div className=" col-6 products-label">Your Cart</div>
          <div className=" col-6 search-input">
            <input
              type="search"
              
              className="form-control"
            />
            <img src={Search} alt="" className="search-icon" />
          <span className="search-word">Search</span>
          <img src={Filter} alt="" className="search-icontwo"/>
          </div>
          </div>
        </div>
    )
}