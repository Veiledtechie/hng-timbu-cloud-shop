import React from "react";
import "./Home.css";
import Rectanglethree from "./Rectanglethree.jpg";
import Rectanglefour from "./Rectanglefour.jpg";
import Rectanglefive from "./Rectanglefive.jpg";
import Rectanglesix from "./Rectanglesix.jpg";
import cart from "./cart.jpg";
import Wishlist from "./Wishlist.jpg";
import Frameone from "./Frameone.png";
import Framefour from "./Framefour.jpg";
import Framefive from "./Framefive.jpg";
import Framesix from "./Framesix.jpg";
import Frameseven from "./Frameseven.jpg";
import Frameeight from "./Frameeight.jpg";
import Framenine from "./Framenine.jpg";
import Frameten from "./Frameten.jpg";
import Rectangleseven from "./Rectangleseven.jpg";
import Rectangleeight from "./Rectangleeight.jpg";
import Rectanglenine from "./Rectanglenine.jpg";
import Rectangleten from "./Rectangleten.jpg";
import Rectangleeleven from "./Rectangleeleven.jpg";
import Rectangletwelve from "./Rectangletwelve.jpg";
import Rectanglethirteen from "./Rectanglethirteen.jpg";
import Rectanglefourteen from "./Rectanglefourteen.png";
import Rectanglefifteen from "./Rectanglefifteen.png";
import Rectanglesixteen from "./Rectanglesixteen.png";
import Rectangleseventeen from "./Rectangleseventeen.png";
import Rectangleeighteen from "./Rectangleeighteen.png";

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

      <main>
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
        <div className="d-flex justify-content-between mt-3 ">
          <div className="standard">
            <img src={Rectangleseven} alt="" className="wares-images" />
            <p className="money">$100.00</p>
            <div className="d-flex justify-content-between">
              <div>
                <p className="wares-details">Piecer bowl</p>
                <p className="wares-details2">7 pieces available</p>
              </div>
              <div>
                <img src={Wishlist} alt="" className="wares-details2" />

                <p>
                  <img src={cart} alt="" className="wares-details2" />
                </p>
              </div>
            </div>
            <p>
              <img src={Framesix} alt="" className="frame" />
            </p>
          </div>

          <div className="standard">
            <img src={Rectangleeight} alt="" className="wares-images" />

            <p className="money">$25.00</p>
            <div className="d-flex justify-content-between">
              <div>
                <p className="wares-details">Tender petals</p>
                <p className="wares-details2">32 pieces available</p>
              </div>

              <div>
                <img src={Wishlist} alt="" className="wares-details2" />

                <p>
                  <img src={cart} alt="" className="wares-details2" />
                </p>
              </div>
            </div>
            <p>
              <img src={Frameseven} alt="" className="frame" />
            </p>
          </div>

          <div className="standard">
            <img src={Rectanglenine} alt="" className="wares-images" />

            <p className="money">$60.00</p>
            <div className="d-flex justify-content-between">
              <div>
                <p className="wares-details">Sensei ceramic</p>
                <p className="wares-details2">35 pieces available</p>
              </div>

              <div>
                <img src={Wishlist} alt="" className="wares-details2" />

                <p>
                  <img src={cart} alt="" className="wares-details2" />
                </p>
              </div>
            </div>
            <p>
              <img src={Frameeight} alt="" className="frame" />
            </p>
          </div>
          <div className="standard">
            <img src={Rectangleten} alt="" className="wares-images" />
            <p className="money">$75.00</p>
            <div className="d-flex justify-content-between">
              <div>
                <p className="wares-details">Melon candy</p>
                <p className="wares-details2">75 pieces available</p>
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
        <div className="d-flex justify-content-between mt-3 ">
          <div className="standard">
            <img src={Rectangleeleven} alt="" className="wares-images" />
            <p className="money">$250.00</p>
            <div className="d-flex justify-content-between">
              <div>
                <p className="wares-details">Vased bowl</p>
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
              <img src={Framenine} alt="" className="frame" />
            </p>
          </div>

          <div className="standard">
            <img src={Rectangletwelve} alt="" className="wares-images" />

            <p className="money">$50.00</p>
            <div className="d-flex justify-content-between">
              <div>
                <p className="wares-details">Artistic value</p>
                <p className="wares-details2">13 pieces available</p>
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
            <img src={Rectanglethirteen} alt="" className="wares-images" />

            <p className="money">$20.00</p>
            <div className="d-flex justify-content-between">
              <div>
                <p className="wares-details">Rabaun case</p>
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
              <img src={Frameten} alt="" className="frame" />
            </p>
          </div>
          <div className="standard">
            <img src={Rectanglefourteen} alt="" className="wares-images" />
            <p className="money">$70.00</p>
            <div className="d-flex justify-content-between">
              <div>
                <p className="wares-details">Flowered cantu</p>
                <p className="wares-details2">9 pieces available</p>
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
        <div className="d-flex justify-content-between mt-3 ">
          <div className="standard">
            <img src={Rectanglefifteen} alt="" className="wares-images" />
            <p className="money">$120.00</p>
            <div className="d-flex justify-content-between">
              <div>
                <p className="wares-details">Laniel anged</p>
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
              <img src={Framesix} alt="" className="frame" />
            </p>
          </div>

          <div className="standard">
            <img src={Rectanglesixteen} alt="" className="wares-images" />

            <p className="money">$35.00</p>
            <div className="d-flex justify-content-between">
              <div>
                <p className="wares-details">3-piece petal</p>
                <p className="wares-details2">32 pieces available</p>
              </div>

              <div>
                <img src={Wishlist} alt="" className="wares-details2" />

                <p>
                  <img src={cart} alt="" className="wares-details2" />
                </p>
              </div>
            </div>
            <p>
              <img src={Frameseven} alt="" className="frame" />
            </p>
          </div>

          <div className="standard">
            <img src={Rectangleseventeen} alt="" className="wares-images" />

            <p className="money">$75.00</p>
            <div className="d-flex justify-content-between">
              <div>
                <p className="wares-details">Lux Sensei ceramic</p>
                <p className="wares-details2">15 pieces available</p>
              </div>

              <div>
                <img src={Wishlist} alt="" className="wares-details2" />

                <p>
                  <img src={cart} alt="" className="wares-details2" />
                </p>
              </div>
            </div>
            <p>
              <img src={Frameeight} alt="" className="frame" />
            </p>
          </div>
          <div className="standard">
            <img src={Rectangleeighteen} alt="" className="wares-images" />
            <p className="money">$175.00</p>
            <div className="d-flex justify-content-between">
              <div>
                <p className="wares-details">Mariane</p>
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
              <img src={Framefive} alt="" className="frame" />
            </p>
          </div>
        </div>
      </main>

      <section>
        <div className="d-flex justify-content-between">
          <ul className="section-box">
            <p>
              <i class="fa-solid fa-angle-left"></i>
            </p>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
          </ul>
          <p>...</p>
          <p>
            <i class="fa-solid fa-angle-right"></i>
          </p>
        </div>
      </section>
    </div>
  );
}
