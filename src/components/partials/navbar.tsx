"use client";

import "../../static/css/partials/navbar.scss";
// import NavLinks from "../nav-links";
import React, { useState, useEffect } from "react";
import { FiMenu } from "react-icons/fi";
import { IoCloseOutline } from "react-icons/io5";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import Link from "next/link";

const links = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About Us",
    href: "/about-us",
  },
  {
    name: "Services",
    href: "/services",
  },
  {
    name: "Portfolio",
    href: "/portfolio",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export default function Navbar() {
  const [isFixed, setIsFixed] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const pathname = usePathname();

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const targetPosition = 47;

      if (scrollPosition > targetPosition) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`${isOpen ? "" : "open "}navbar${isFixed ? " fixed" : ""}`}>
      <img
        src="/images/logo-header.png"
        alt="navbar logo"
        className="navbar-logo"
      />

      <div className="nav-links">
        <div className="nav-header">
          <img src="/images/logo-vector.png" alt="logo sidebar" />
          <button onClick={toggleNavbar} className="close-button">
            <IoCloseOutline className="icon white" />
          </button>
        </div>
        <ul className="links">
          {links.map((link) => {
            return (
              <li className="link" key={link.name}>
                <Link
                  onClick={closeNavbar}
                  href={link.href}
                  className={clsx("a-link", {
                    active: pathname === link.href,
                  })}
                >
                  <p>{link.name}</p>
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="nav-footer">
          <p>Copyright 2024 © gruposoftware</p>
        </div>
      </div>

      <button onClick={toggleNavbar} className="toggle-menu-button">
        <FiMenu className="icon" />
      </button>
    </nav>
  );
}
