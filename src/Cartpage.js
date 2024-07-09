import React from "react"
import "./Home.css"
import Navbar from "./Navbar"
import Search from "./Search.jpg"
import Filter from "./Filter.jpg"
import Rectanglenine from "./Rectanglenine.jpg"
import Rectanglethree from "./Rectanglethree.jpg";
import Rectanglefour from "./Rectanglefour.jpg";
import Rectanglefive from "./Rectanglefive.jpg";
import Rectanglesix from "./Rectanglesix.jpg";
import cart from "./cart.jpg";
import Wishlist from "./Wishlist.jpg";
import Frameone from "./Frameone.png";
import Framefour from "./Framefour.jpg";
import Footer from "./Footer"
import Extrafooter from "./Extrafooter"
import Framefive from "./Framefive.jpg";
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
<div className="d-flex justify-content-between">

    <div className="col-4">

<img src={Rectanglenine} alt=""/>




    </div>

    <div className="col-2">
        <p>$15.00</p>
<p>Koncafe earrings</p>
<p>55 pieces available</p>

    </div>

    <div className="col-2">
        1
    </div>

    <div>
        $15.00
    </div>
<div>
    $15.00
</div>
<div>
<i class="fa fa-shopping-basket"></i>

</div>
</div>
<div className="d-flex justify-content-between">

    <div className="col-4">

<img src={Rectanglenine} alt=""/>




    </div>

    <div className="col-2">
        <p>$450.00</p>
<p>Vase de la vase</p>
<p>15 pieces available</p>

    </div>

    <div className="col-2">
        5
    </div>

    <div>
        $450.00
    </div>
<div>
    $2250.00
</div>
<div>
<i class="fa fa-shopping-basket"></i>

</div>
</div>
<div className="d-flex justify-content-between">

    <div className="col-4">

<img src={Rectanglenine} alt=""/>




    </div>

    <div className="col-2">

        <p>$25.00</p>
<p>Tender petals</p>
<p>32 pieces available</p>

    </div>

    <div className="col-2">
        1
    </div>

    <div>
        $25.00
    </div>
<div>
    $25.00
</div>
<div>
<i class="fa fa-shopping-basket"></i>

</div>
</div>

<p>Apply discount</p>


<div d-flex>
    <ul>
        <li>
            Sub-total
        </li>
        
        <li>
            Discount
        </li>
        
        <li>
            Total amount
        </li>
        
        
    </ul>

    <ul>

        
    <li>
            $4,500.00
        </li>
        
        <li>
          $450.00
        </li>
        
        <li>
          $4,050.00
        </li>
    </ul>
</div>




<div>Check out</div>

<p>People also buy</p>
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
              <img src={Framefour} alt="" className="frame" />
            </p>
          </div>

          <div className="standard">
            <img src={Rectanglefive} alt="" className="wares-images" />

            <p className="money">$50.00</p>
            <div className="d-flex justify-content-between">
              <div>
                <p className="wares-details">Flat clay barry</p>
                <p className="wares-details2">55pieces available</p>
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
            <p className="money">$80.00</p>
            <div className="d-flex justify-content-between">
              <div>
                <p className="wares-details">Deep cantu bowl</p>
                <p className="wares-details2">5 pieces available</p>
              </div>

              <div>
                <img src={Wishlist} alt="" className="wares-details2" />

                <p>
                  <img src={cart} alt="" className="wares-details2" />
                </p>
              </div>
            </div>
            <p>
              <img src={Framefive} alt="" className="frame" />
            </p>
          </div>
        </div>
<Footer/>
<Extrafooter/>
        </div>

    )
}