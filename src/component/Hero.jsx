import React from "react";

function Hero() {
  return (
    <>
      <main className="hero container">
        <div className="hero-content">
          <h1>YOUR FEET DESERVE THE BEST</h1>
          <p>
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.
          </p>

          <div className="hero-btn">
            <button className="first-btn">Shop Now</button>
            <button className="secon-btn">Category</button>
          </div>

          <div className="shopping">
            <p>Also Available On</p>
    
          <div className="brand-icons">
            <img src="\public\img\amazon (1).png" alt="logo" />
            <img src="\public\img\flipkart.png" alt="logo" />
          </div>
          </div>

        </div>
        <div className="hero-img">
            <img src="\img\shoe_image.png" alt="image-sho" />
        </div>
      </main>
    </>
  );
}

export default Hero;
