import React from "react"
import "./Home.css"
import Navbar from "./Navbar"
import Search from "./Search.jpg"
import Filter from "./Filter.jpg"
import Rectanglenine from "./Rectanglenine.jpg"
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
          <div className="text-center">
            <p>Enjoy Free Shipping on Orders Over $50.</p>
            
            <p>You have a 10% discount. Checkout now to redeem it.</p>
             </div>
<div>
<span>Description</span>
<span>Quantity</span>
<span>Price</span>
<span>Total</span>



</div>

<div className="d-flex justify-content-between">

    <div className="col-4">

<img src={Rectanglenine} alt=""/>




    </div>

    <div className="col-2">
<p>Sensei Ceramic</p>
<p>35 pieces available</p>

    </div>

    <div className="col-2">
        2
    </div>

    <div>
        $60.00
    </div>
<div>
    $120.00
</div>
<div>
<i class="fa fa-shopping-basket"></i>

</div>
</div>




        </div>
    )
}