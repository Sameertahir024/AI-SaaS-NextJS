import Image from "next/image";
import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1 className="hero-heading">
          Navigating the digital landscape for success
        </h1>
      </div>
      <div className="hero-image">
        <Image
          src="/Saas-images/Illustration.png"
          alt="Hero"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
};

export default Hero;
