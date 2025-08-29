"use client";

import React, { useRef } from "react";
import { ExperienceWork } from "./Data/ExperienceWork";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const MyWorkExperience = () => {
  gsap.registerPlugin(ScrollTrigger);

  const containerRef = useRef(null);

  // Animate heading text
  const animateHeading = () => {
    gsap.fromTo(
      "#heading-text",
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#heading-text",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  };

  // Animate left content
  const animateLeftItems = () => {
    gsap.utils.toArray(".exp-left").forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  };

  // Animate right content
  const animateRightItems = () => {
    gsap.utils.toArray(".exp-right").forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  };

  // useGSAP hook to trigger all animations
  useGSAP(() => {
    animateHeading();
    animateLeftItems();
    animateRightItems();
  }, []);

  return (
    <div
      ref={containerRef}
      className="lg:min-h-[100vh] w-full p-8 lg:p-10 flex flex-col items-center text-[#131313] gap-10 sm:gap-20 relative"
    >
      <div>
        <h1
          id="heading-text"
          className="text-4xl sm:text-6xl 2xl:text-8xl font-semibold text-center"
        >
          My <span className="text-[#03c1cc]">Work Experience</span>
        </h1>
      </div>

      <div className="flex justify-between flex-col items-center gap-10 sm:gap-15 lg:gap-2 w-full">
        {ExperienceWork.map((exp, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row gap-5 border rounded-2xl sm:border-0 py-5 justify-center sm:justify-between items-center sm:items-start w-full"
          >
            {/* LEFT SIDE */}
            <div className="exp-left sm:w-40 md:w-50 lg:w-fit text-center md:text-start">
              <h1 className="text-3xl sm:text-xl md:text-2xl lg:text-3xl 2xl:text-4xl font-semibold">
                {exp.company}
              </h1>
              <p className="text-[#98A2B3] sm:text-[12px] md:text-base 2xl:text-xl">
                {exp.duration}
              </p>
            </div>

            {/* RIGHT SIDE */}
            <div className="exp-right flex flex-col justify-start items-center sm:items-start text-center md:text-start sm:w-50 lg:w-auto">
              <h1 className="text-xl sm:text-xl md:text-2xl lg:text-3xl 2xl:text-4xl font-semibold">
                {exp.role}
              </h1>
              <p className="text-[#98A2B3] lg:w-85 sm:text-[12px] lg:text-base 2xl:text-xl">
                {exp.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <img
        src="/images/listline.png"
        alt=""
        className="hidden sm:block h-260 lg:h-190 2xl:h-220 object-cover absolute top-16 sm:top-40 lg:top-36 z-[-1]"
      />
    </div>
  );
};

export default MyWorkExperience;