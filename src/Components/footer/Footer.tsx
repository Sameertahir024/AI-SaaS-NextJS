import Image from "next/image";
import Link from "next/link";
import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">
            <Image
              src="/svgs/Logo.svg"
              alt="Footer Logo"
              width={219}
              height={36}
            />
          </div>
          <div className="footer-links">
            <ul>
              <li>
                <Link href="/">About us</Link>
              </li>
              <li>
                <Link href="/">Contact</Link>
              </li>
              <li>
                <Link href="/">Pricing</Link>
              </li>
            </ul>
          </div>
          <div className="footer-social">
            <Image
              src="/svgs/Social icon.svg"
              alt="Facebook"
              width={30}
              height={30}
            />
            <Image
              src="/svgs/Social icon2.svg"
              alt="Facebook"
              width={30}
              height={30}
            />

            {/* Add more social icons as needed */}
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Your Company Name. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
