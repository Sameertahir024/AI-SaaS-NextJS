import React from "react";
import "./Companies.css";
import Image from "next/image";
const Companies = () => {
  interface CompanyLogo {
    src: string;
    alt: string;
  }

  const companyLogos: CompanyLogo[] = [
    { src: "/Company logo.png", alt: "Company 1 Logo" },
    { src: "/Company logo2.png", alt: "Company 2 Logo" },
    { src: "/Company logo3.png", alt: "Company 3 Logo" },
    { src: "/Company logo4.png", alt: "Company 4 Logo" },
    { src: "/Company logo5.png", alt: "Company 5 Logo" },
  ];

  return (
    <div>
      <div className="main">
        {companyLogos?.map((image, index) => {
          return (
            <div className="images" key={index}>
              <Image
                src={image.src}
                alt={image.alt}
                width={300}
                height={150}
                style={{ width: "100%", height: "auto", maxWidth: "300px" }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Companies;
