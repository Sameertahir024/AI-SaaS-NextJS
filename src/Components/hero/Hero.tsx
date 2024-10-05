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
        <p>
          Our digital marketing agency helps businesses grow and succeed online
          through a range of services including SEO, PPC, social media
          marketing, and content creation.
        </p>
        <button className="btn">Book a consultation</button>
      </div>
      <div className="hero-image">
        <Image
          src="/Illustration.png"
          alt="Hero"
          width={500}
          height={500}
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </div>
    </div>
  );
};

export default Hero;
