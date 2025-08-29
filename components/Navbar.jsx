"use client";

import React, { useState, useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeLink, setActiveLink] = useState("#home");

  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const navLinks1 = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
  ];

  const navLinks2 = [
    { label: "Resume", href: "#resume" },
    { label: "Project", href: "#project" },
    { label: "Contact", href: "#contact" },
  ];

  useEffect(() => {
  const handleScroll = () => {
    if (window.innerWidth >= 768) { 
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    } else {
      
      setShowNavbar(true);
    }
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, [lastScrollY]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const handleClick = (href) => {
    setActiveLink(href);
    setIsOpen(false);
  };

  const tl = gsap.timeline();

  useGSAP(() => {
    tl.fromTo(
      ".logo",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1,
        delay: 0.5,
      }
    );

    tl.fromTo(
      ".left-nav",
      {
        x: -50,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.9,
        ease: "power3.out",
      },
      "-=0.2"
    );

    // Right Nav from right
    tl.fromTo(
      ".right-nav",
      {
        x: 50,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.9,
        ease: "power3.out",
      },
      "<" // same time
    );
  }, []);

  return (
    <div
      id="container"
      className={`md:p-2 lg:p-5 fixed z-[100] w-screen transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="bg-[#131313] w-auto 2xl:h-[10vh] px-6 sm:px-4 md:rounded-full flex justify-between items-center text-white">
        {/* Left Links */}
        {navLinks1.map((link, i) => (
          <a
            key={i}
            href={link.href}
            onClick={() => handleClick(link.href)}
            className={`left-nav hidden md:flex cursor-pointer py-[10px] lg:py-[10px] 2xl:py-[15px] px-[16px] lg:px-[40px] 2xl:px-[45px] rounded-full duration-300 lg:text-lg 2xl:text-3xl ${
              activeLink === link.href
                ? "bg-[#03c1cc] text-black"
                : "hover:bg-[#4b4b4b]"
            }`}
          >
            {link.label}
          </a>
        ))}

        {/* Logo */}
        <a href="#home" className="logo flex justify-center items-center text-2xl 2xl:text-4xl font-bold md:mx-8">
          <img
            src="/images/logo.png"
            alt="Logo"
            className="h-auto w-[75px] 2xl:w-[120px]"
          />
          <p>JCREA</p>
        </a>

        {/* Right Links */}
        {navLinks2.map((link, i) => (
          <a
            key={i}
            href={link.href}
            onClick={() => handleClick(link.href)}
            className={`right-nav hidden md:flex cursor-pointer py-[10px] lg:py-[10px] 2xl:py-[15px] px-[16px] lg:px-[40px] 2xl:px-[45px] rounded-full duration-300 lg:text-lg 2xl:text-3xl ${
              activeLink === link.href
                ? "bg-[#03c1cc] text-black"
                : "hover:bg-[#4b4b4b]"
            }`}
          >
            {link.label}
          </a>
        ))}

        {/* Hamburger Icon (mobile only) */}
        <div
          ref={buttonRef}
          onClick={() => setIsOpen(!isOpen)}
          className="flex flex-col justify-between w-[28px] h-[22px] mr-5 cursor-pointer z-50 md:hidden"
        >
          <span
            className={`h-[3px] w-full bg-white rounded transition-transform duration-300 ${
              isOpen ? "rotate-45 translate-y-[9.5px]" : ""
            }`}
          />
          <span
            className={`h-[3px] w-full bg-white rounded transition-opacity duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-[3px] w-full bg-white rounded transition-transform duration-300 ${
              isOpen ? "-rotate-45 -translate-y-[9.5px]" : ""
            }`}
          />
        </div>

        {/* Mobile Menu */}
        <div
          ref={menuRef}
          className={`md:hidden bg-[#171717] text-white absolute w-75 h-[100vh] right-0 top-19 px-10 py-6 flex flex-col gap-8 transition-all duration-300 ease-in-out rounded-l-xl ${
            isOpen
              ? "translate-x-0 opacity-100"
              : "translate-x-5 opacity-0 pointer-events-none"
          }`}
        >
           <a className="logo flex items-center text-2xl 2xl:text-4xl font-bold md:hidden">
          <img
            src="/images/Logo.png"
            alt="Logo"
            className="h-auto w-[75px] 2xl:w-[120px]"
          />
          <p>JCREA</p>
        </a>
          {[...navLinks1, ...navLinks2].map((link, i) => (
            <a
              key={i}
              href={link.href}
              onClick={() => handleClick(link.href)}
              className={`text-lg pb-1 border-1 border-gray-800 cursor-pointer rounded px-2 py-1 transition-colors duration-200 ${
                activeLink === link.href
                  ? "bg-[#03c1cc] text-black"
                  : "hover:text-gray-300"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a href="#about" className="text-xl bg-[#03c1cc] text-white px-4 text-start py-2 rounded-full mt-0 cursor-pointer">Hire Me</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;