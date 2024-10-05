"use client";
import React from "react";
import "./Navbar.css";
import Link from "next/link";
import Image from "next/image";
import { UserButton, useUser } from "@clerk/nextjs";

const Navbar = () => {
  const { user } = useUser();
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
          {user?.firstName ? (
            <>
              <UserButton
                appearance={{
                  elements: {
                    userButtonAvatarBox: "size-6",
                  },
                }}
              />
            </>
          ) : (
            <Link href="/sign-in">Sign in</Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
