"use client";


import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/src/ScrollTrigger";

const HireMe = () => {
  gsap.registerPlugin(ScrollTrigger);

  //  Function to animate image
  const animateImage = () => {
    gsap.fromTo(
      "#side-img",
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#side-img",
          start: "top 60%",
          toggleActions: "play none none none",
        },
      }
    );
  };

  //  Function to animate text
  const animateText = () => {
    gsap.fromTo(
      ".Text",
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".Text",
          start: "top 60%",
          toggleActions: "play none none none",
        },
      }
    );
  };

  //  Run animations
  useGSAP(() => {
    animateImage();
    animateText();
  }, []);

  return (
    <div
      id="about"
      className="lg:h-[100vh] w-auto flex justify-center items-center sm:rounded-[50px] bg-[#F2F4F7] lg:my-12 "
    >
      <div className="flex  items-center gap-10 ">
        <div className="relative w-fit group hidden lg:block">
          

          {/* Side Image */}
          <img
            id="side-img"
            src="/images/sidePic.png"
            alt="sidPic"
            className="relative z-10 w-[30vw] object-cover"
          />
           {/* Animated Border Circles */}
          <div className="flex justify-between items-center relative bottom-120 right-5">
            <div className="absolute inset-0 z-0 hidden lg:block w-[300px] 2xl:w-[475px] h-[300px] 2xl:h-[475px] border-[#03c1cc] border-2 left-16 top-12 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-0" />
          <div className="absolute inset-0 z-0 hidden lg:block w-[375px] 2xl:w-[500px] h-[375px] 2xl:h-[500px] border-[#03c1cc] border-2 left-10 top-6 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100" />
          <div className="absolute inset-0 z-0 hidden lg:block w-[425px] 2xl:w-[550px] h-[425px] 2xl:h-[550px] border-[#03c1cc] border-2  left-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200" />
          </div>
        </div>

        {/* Text Section */}
        <div className="Text flex flex-col items-center lg:items-start gap-10 lg:gap-10 my-5 text-center lg:text-start">
          <div className="flex flex-col gap-8 lg:gap-5">
            <h1 className="text-4xl sm:text-6xl 2xl:text-7xl font-semibold">
              Why <span className="text-[#03c1cc]">Hire me</span> ?
            </h1>
            <div className="md:w-[495px] text-[15px] md:text-[20px] 2xl:text-2xl text-[#3f3f3f]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              lacus nunc, posuere in justo vulputate, bibendum sodales{" "}
            </div>
          </div>

          {/* Stats */}
          <div className="flex justify-between gap-10 lg:gap-10 text-[#3f3f3f]">
            {[
              { count: "450+", label: "Project Completed" },
              { count: "450+", label: "Project Completed" },
            ].map((item, index) => (
              <div key={index} className="text-base flex flex-col gap-2">
                <h2 className="text-2xl sm:text-3xl 2xl:text-4xl font-semibold">
                  {item.count}
                </h2>
                <p className="text-[14px] sm:text-base 2xl:text-xl">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          {/* Button */}
          <a href="#contact" className="py-3 sm:py-4 px-5 sm:px-8 border font-semibold rounded-2xl text-2xl sm:text-3xl 2xl:text-4xl w-fit hover:bg-black hover:text-white duration-300 cursor-pointer">
            Hire me
          </a>
        </div>
      </div>
    </div>
  );
};

export default HireMe;
