import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <p>Iam no class</p>
      <p className="customClass">Iam custom class</p>
      <div className="navbar-links">
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/portfolios">
          <a>Portfolio</a>
        </Link>
        <Link href="/blogs">
          <a>Blog</a>
        </Link>
        <Link href="/cv">
          <a>Cv</a>
        </Link>
      </div>
      <style jsx>
        {`
          .customClass {
            color: red;
          }
          .navbar-links {
            display: flex;
            justify-content: space-around;
          }
        `}
      </style>
    </>
  );
};

export default Header;
