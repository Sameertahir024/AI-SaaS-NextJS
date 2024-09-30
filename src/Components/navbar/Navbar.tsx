import React from "react";
import Avatars from "../common/Avatars";
import "./Navbar.css";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="main">
      <div className="logo">
        <Image
          src="/Saas-images/svgs/Logo.svg"
          alt="logo"
          width={319}
          height={36}
        />
      </div>
      <div className="links-container">
        <ul className="links">
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
        <div>
          <Avatars name="H" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
