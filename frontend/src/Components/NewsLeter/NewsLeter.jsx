import React from "react";
import "./NewsLeter.css";

const NewsLeter = () => {
  return (
    <div className="newsletter">
      <h1>GET EXCULSIVE OFFERS ON YOUR MAIL</h1>
      <p>Subscribe to our newsletter and stay updated</p>
      <div>
        <input type="email" placeholder="Your Email ID" />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default NewsLeter;
