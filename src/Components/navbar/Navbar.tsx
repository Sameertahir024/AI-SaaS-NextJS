import React from "react";
import "./Navbar.css";
import Link from "next/link";
import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
// import { useUser } from "@clerk/nextjs";

const Navbar = () => {
  // const { user } = useUser();

  // if (!user) return window.alert("NO user found");
  return (
    <div className="main">
      <div className="logo">
        <Image src="/svgs/Logo.svg" alt="NAv-logo" width={219} height={36} />
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
          <UserButton
            appearance={{
              elements: {
                userButtonAvatarBox: "size-6",
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
