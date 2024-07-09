import React from "react";
import "./Footer.css";

import MivamartImage from "./MivamartImage.jpg";
import Applepay from "./Apple Pay.jpg";
import Googlepay from "./Google Pay.jpg";
import Paypal from "./Paypal.jpg";
import Visa from "./Visa.jpg";
export default function Footer() {
  return (
    <div className=" container mt-5">
      <footer className="d-flex justify-content-between footer-nav">
        <div className="company">
          <img
            src={MivamartImage}
            alt="Logo of online shop"
            className="mivamart-two"
          />
          <p className="footer-mailing"> Join our mailing list</p>
          <p className="footer-example">example@gmail.com</p>
          <hr />
          <p className="footer-submit text-center">Submit</p>
        </div>
        <div>
          <h3>Company</h3>

          <p>Our story</p>
          <p>Products</p>
          <p>Terms & conditions</p>
          <p>Privacy policy</p>
        </div>
        <div>
          <h3>Social media</h3>

          <p>Facebook</p>
          <p>Instagram</p>
          <p>X(Twitter)</p>
        </div>
        <div>
          <h3>Support</h3>

          <p>Live chat</p>
          <p>Contact us</p>
        </div>

        <div className="mivamart-two">
          <img src={Applepay} alt="" />

          <img src={Visa} alt="" />

          <img src={Googlepay} alt="" />

          <img src={Paypal} alt="" />
        </div>
      </footer>
     
    </div>
  );
}
