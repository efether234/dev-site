import React from "react";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container">
        <Link className="navbar-brand" href="/">
          Evan Fetherolf
        </Link>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" href="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/blog">
              Blog
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
