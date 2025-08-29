"use client";

import React from "react";
import { LuArrowUpRight } from "react-icons/lu";
import {
  FaFacebook,
  FaPaperPlane,
  FaTwitter,
  FaWhatsapp,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  const navLinks = ["Home", "About", "Service", "Resume", "Project"];
  const contactLinks = [
    "+91 7738443636",
    "Jaycrea36@gmail.com",
    "Portfolio-jcrea.com",
  ];
  const socialIcons = [
    <FaFacebook className="hover:text-[#03c1cc]" />,
    <FaYoutube className="hover:text-[#03c1cc]" />,
    <FaWhatsapp className="hover:text-[#03c1cc]" />,
    <FaInstagram className="hover:text-[#03c1cc]" />,
    <FaTwitter className="hover:text-[#03c1cc]" />,
  ];

  return (
    <div className="h-auto w-full p-5 lg:pt-10 px-12 bg-[#272727] sm:rounded-tl-[54px] sm:rounded-tr-[54px] flex flex-col justify-between items-center gap-10 text-white mt-22">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row gap-3 md:gap-0 justify-between items-center w-full ">
        <h1 className="text-4xl md:text-6xl 2xl:text-7xl text-center md:text-start font-semibold md:w-100 lg:w-auto">
          Lets Connect there
        </h1>
        <a href="#contact" className="flex items-center text-xl 2xl:text-2xl bg-[#03c1cc] px-2 lg:px-3 py-2 rounded-full gap-1 hover:bg-[#22a9b0]">
          Hire me <LuArrowUpRight className="text-2xl" />
        </a>
      </div>

      {/* Middle Section */}
      <div className="flex flex-wrap justify-center lg:justify-between items-start w-full border-[#475467] border-b-2 border-t-2 py-5 md:py-10 gap-8 lg:gap-0">
        {/* Logo & Social */}
        <div className="flex flex-col justify-center">
          <div className="flex items-center justify-center lg:justify-start text-xl 2xl:text-2xl font-semibold">
            <img
              src="/images/logo.png"
              alt="logo"
              className="h-[66px] 2xl:h-[86px] w-[86px] 2xl:w-[76px] object-cover"
            />
            <p className="">JCREA</p>
          </div>

          <div className="m-3 flex flex-col items-center lg:items-start text-center lg:text-start">
            <p className="lg:w-131 2xl:w-161 2xl:text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              congue interdum ligula a dignissim. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Sed lobortis orci elementum egestas
              lobortis.
            </p>

            <div className="flex gap-4 mt-8 text-xl 2xl:text-3xl cursor-pointer">
              {socialIcons.map((Icon, i) => (
                <div key={i}>{Icon}</div>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation & Contact */}
        <div className="flex gap-7 sm:gap-5 2xl:gap-15 flex-col sm:flex-row">
          {/* Navigation */}
          <div className="flex flex-col justify-between items-center md:items-start text-center md:text-start">
            <h1 className="text-[#03c1cc] text-lg 2xl:text-2xl font-semibold">
              Navigation
            </h1>
            <div className="flex flex-col gap-3 mt-3">
              {navLinks.map((link, i) => (
                <a
                  key={i}
                  className="hover:border-b-1 cursor-pointer 2xl:text-xl"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center md:items-start text-center md:text-start">
            <h1 className="text-[#03c1cc] text-lg 2xl:text-2xl font-semibold">
              Contact
            </h1>
            <div className="flex flex-col gap-3 mt-3">
              {contactLinks.map((item, i) => (
                <a key={i} className="2xl:text-xl">
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Email Form */}
        <div className="text-lg 2xl:text-2xl text-center md:text-start">
          <h1 className="text-[#03c1cc] font-semibold">
            Get the latest information
          </h1>
          <form
            action="submit"
            className="bg-white w-[80vw] md:w-80 2xl:w-100 h-12 2xl:h-16 rounded-2xl mt-5 flex justify-between items-center"
          >
            <input
              type="email"
              placeholder="Email Address"
              className="outline-0 text-black mx-2 text-base 2xl:text-lg"
            />
            <button>
              <FaPaperPlane className="bg-[#03c1cc] hover:bg-[#22a9b0] text-5xl 2xl:text-[64px] rounded-tr-2xl rounded-br-2xl p-3" />
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="flex justify-between items-center w-full flex-col md:flex-row text-center md:text-start gap-2 text-xs sm:text-sm md:text-base">
        <p>Copyright© 2023 Jack. All Rights Reserved.</p>
        <p>User Terms & Conditions | Privacy Policy</p>
      </div>
    </div>
  );
};

export default Footer;