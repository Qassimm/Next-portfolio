"use client"


import React from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import { LuArrowUpRight } from "react-icons/lu";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

const Hero = () => {
  const buttons = [
    { label: "Portfolio", iconPosition: "right", href:'#resume' },
    { label: "Hire Me", iconPosition: "left", href:'#contact' },
  ];

  useGSAP(() => {

    const heroSplit = SplitText.create('#home h3', {type:'words'})
    const tl = gsap.timeline({
      defaults: { delay: 0.25, duration: 1, ease: "power3.out" },
    });

    tl.fromTo(
      ".hello",
      { y: -15, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, delay: 2.5 }
    );

    tl.from(heroSplit.words, {
      yPercent:100,
      opacity:0,
      stagger:0.04
    })

    tl.from(
      "hero",
      {
        x: -5,
        opacity: 0,

        stagger: 0.15,
      },
      "<"
    );

    tl.fromTo(
      ".hero-center",
      { y: 15, opacity: 0 },
      { y: 0, opacity: 1, ease: "power2.out", duration: 0.8 },
      "-=0.4"
    );

    tl.from(
      ".left-content",
      {
        x: -150,
        opacity: 0,
        duration: 0.9,
      },
      "-=0.2"
    );

    tl.from(
      ".right-content",
      {
        x: 150,
        opacity: 0,
        duration: 0.9,
      },
      "<"
    );
  }, []);

  return (
    // orange colore #FD853A
    // black color #171717

    <div
      id="home"
      className=" lg:h-[100vh] text-[#131313] w-auto p-5 md:pt-10 md:px-10 md:py-0 flex justify-evenly items-center flex-col"
    >
      <div className="text-center flex flex-col justify-center items-center translate-y-15 ">
        <p className="hello py-2 2xl:px-4  border-2  border-[#131313] rounded-full w-[103px] 2xl:text-2xl font-semibold ">
          Hello!
        </p>
        <div className="text-4xl sm:text-5xl md:text-7xl lg:text-[85px] 2xl:text-[150px] font-semibold font-outfit  mt-2.5 md:mt-0">
          <h3 className="word">I'm <span className="word text-[#03c1cc]">Jack,</span><br />Product Designer</h3>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-15 md:gap-0  w-full justify-between items-center  translate-y-25">
        <div className="left-content w-[320px] font-semibold flex md:flex-none flex-col   items-center md:items-start text-center md:text-start">
          <FaQuoteLeft className="text-xl 2xl:text-3xl mb-1" />
          <p className="2xl:text-2xl">
            Jenny's Exceptional product design ensure our website's
            success.Highly Recommended
          </p>
        </div>

        <div className="right-content flex flex-col justify-end items-center  sm:items-end  text-end ">
          <div className="flex">
            {Array(5)
              .fill(0)
              .map((_, index) => (
                <span key={index}>
                  <FaStar className="text-[#03c1cc] text-3xl 2xl:text-6xl" />
                </span>
              ))}
          </div>
          <h1 className="text-4xl 2xl:text-6xl  font-semibold">10 Years</h1>
          <p className="2xl:text-2xl ">Experience</p>
        </div>
      </div>

      <div className="hero-center grid place-items-center relative mt-85 lg:mt-30">
        <img
          src="/images/HeroPic.png"
          alt="HeroPic"
          className=" h-[430px] 2xl:h-[66vh] absolute object-cover -top-66 sm:-top-64.5 2xl:-top-100 z-10"
        />
        <div className="w-80 sm:w-140 h-90 sm:h-100 2xl:h-80 bg-[#58f7ff] rounded-t-full absolute -top-51 sm:-top-37.5" />

        <div className="w-[300px] 2xl:w-[360px] rounded-full border-[#131313] border-2 p-2 2xl:p-4 backdrop-blur-md bg-white/30 flex justify-between items-center text-lg z-50  ">
          {buttons.map((btn, i) => (
        <a
          key={i}
          href={btn.href}
          className="group relative overflow-hidden hover:bg-[#03c1cc] rounded-full px-5 2xl:px-7 py-2 2xl:py-3 hover:text-xl flex justify-center items-center duration-300 cursor-pointer"
        >
          {/* Left Icon */}
          {btn.iconPosition === "left" && (
            <span className="absolute start-[-30px] transition-all duration-300 group-hover:start-4">
              <LuArrowUpRight className="text-2xl" />
            </span>
          )}

          {/* Label */}
          <span
            className={`font-normal transition-all group-hover:font-semibold ${
              btn.iconPosition === "left"
                ? "group-hover:ms-6"
                : "group-hover:me-6"
            }`}
          >
            {btn.label}
          </span>

          {/* Right Icon */}
          {btn.iconPosition === "right" && (
            <span className="absolute end-[-30px] transition-all duration-300 group-hover:end-4">
              <LuArrowUpRight className="text-2xl" />
            </span>
          )}
        </a>
      ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;