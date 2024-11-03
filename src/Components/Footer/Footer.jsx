import React from 'react'
import bgImg from "../../assets/img/Cards2/img1.jpg"
import logo from "../../assets/img/LOGO.png";

const Footer = () => {
  return (
    <div >
        <footer className="footer bg-base-200 font-semibold	text-base-contenth p-10" style={{ backgroundImage: `url(${bgImg})` }}>
  <nav>
    <img src={logo} alt="Logo" className="h-12 w-auto" />
    <a className="link link-hover ">No. 250D,</a>
    <a className="link link-hover">Ederamulla,</a>
    <a className="link link-hover">Wattala, SriLanka</a>
    <a className="link link-hover">Tel :- ++94771181803</a>
    <a className="link link-hover">Email :- travelwithsrilanka.official@gmail.com</a>
    <a className="link link-hover">website :- support@travelwithsrilanka.com    </a>
  </nav>
  <nav>
    
    <a className="link link-hover">Home</a>
    <a className="link link-hover">Srilanka</a>
    <a className="link link-hover">Custom Tours</a>
    <a className="link link-hover">Packages</a>
  </nav>
  <nav>
    
    <a className="link link-hover">Destinations</a>
    <a className="link link-hover">Special Offers</a>
    <a className="link link-hover">About Us</a>
    <a className="link link-hover">Contact Us</a>
  </nav>
  <form>
    <h6 className="footer-title">Newsletter</h6>
    <fieldset className="form-control w-80">
      <label className="label">
        <span className="label-text">Enter your email address</span>
      </label>
      <div className="join">
        <input
          type="text"
          placeholder="username@site.com"
          className="input input-bordered join-item" />
        <button className="btn btn-warning join-item">Subscribe</button>
      </div>
    </fieldset>
  </form>
  
</footer>
    </div>
  )
}

export default Footer