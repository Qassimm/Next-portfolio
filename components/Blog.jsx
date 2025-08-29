"use client";

import React from "react";
import { LuArrowUpRight } from "react-icons/lu";
import { Blogs } from "./Data/Blogs";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/src/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Blog = () => {
  useGSAP(() => {
    const animateFromTo = (trigger, fromVars, toVars) => {
      gsap.fromTo(trigger, fromVars, {
        ...toVars,
        scrollTrigger: {
          trigger,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      });
    };

    const animateFrom = (trigger, vars, start = "top 60%") => {
      gsap.from(trigger, {
        ...vars,
        scrollTrigger: {
          trigger,
          start,
          toggleActions: "play none none none",
        },
      });
    };

    animateFromTo(
      ".text",
      { opacity: 0, scale: 0.3 },
      { opacity: 1, scale: 1, duration: 0.6, ease: "back.out(1.7)" }
    );

    animateFromTo(
      "#stars",
      { opacity: 0, rotate: 0, scale: 0.3 },
      {
        opacity: 1,
        rotate: 1080,
        scale: 1,
        duration: 1.5,
        ease: "back.out(1.7)",
      }
    );

    animateFrom(".blog-heading", { x: -150, opacity: 0, duration: 0.6 });
    animateFrom(
      ".blog-button",
      { x: 150, opacity: 0, duration: 0.6 },
      "top 70%"
    );
    animateFrom(
      ".blog-cards",
      { opacity: 0, duration: 1, ease: "power2.out" },
      "top 50%"
    );
  }, []);

  return (
    <div className="mb-12">
      <div className="w-full  h-[20vh] bg-[#03c1cc] sm:rounded-tl-[60px] sm:rounded-br-[60px] flex items-center mb-1 sm:mb-5">
        <div className="overflow-hidden w-full  h-[12vh] bg-white -rotate-2 flex">
          <div className="animate-slide flex w-max  justify-center items-center text-3xl md:text-4xl text-black font-semibold gap-5 md:gap-10 whitespace-nowrap">
            {["App Design", "Dashboard", "Wireframe", "User Reference"]
              .map((text, index) => (
                <React.Fragment key={index}>
                  <div
                    id="stars"
                    className="text-[#03c1cc] text-3xl md:text-3xl lg:text-6xl"
                  >
                    ✦
                  </div>
                  <p className="text">{text}</p>
                </React.Fragment>
              ))
              .flat()
              .concat(
                ["App Design", "Dashboard", "Wireframe", "User Reference"].map(
                  (text, index) => (
                    <React.Fragment key={index + 4}>
                      <div
                        id="stars"
                        className="text-[#03c1cc]  text-2xl md:text-3xl lg:text-6xl"
                      >
                        ✦
                      </div>
                      <p className="text">{text}</p>
                    </React.Fragment>
                  )
                )
              )}
          </div>
        </div>
      </div>

      <div
        id="project"
        className="flex flex-col sm:flex-row text-center sm:text-start gap-6 sm:gap-0 justify-between items-center h-auto w-full md:gap-10 lg:gap-5 p-5 lg:p-10 mb-5"
      >
        <h1 className="blog-heading text-5xl 2xl:text-6xl sm:w-60 2xl:w-auto text-black font-semibold">
          From my blog post
        </h1>
        <button className="blog-button px-5 py-1 sm:py-2 text-lg 2xl:text-2xl text-white rounded-full bg-[#03c1cc] hover:bg-[#22a9b0] cursor-pointer">
          See All
        </button>
      </div>

      <div className="blog-cards flex flex-wrap justify-center items-center gap-16 lg:gap-8">
        {Blogs.map(({ image, category, author, date, description }, index) => (
          <div
            key={index}
            className="flex flex-col justify-between text-center lg:text-start items-center lg:items-start gap-4"
          >
            <div
              className="w-[300px] sm:w-[390px] md:w-[490px] lg:w-[350px] 2xl:w-[450px] h-[310px] sm:h-[400px] md:h-[500px] lg:h-[360px] 2xl:h-[460px] rounded-xl bg-center bg-cover group bg-no-repeat flex justify-end items-end"
              style={{ backgroundImage: `url(${image})` }}
            >
              <LuArrowUpRight className="p-2 text-7xl sm:text-8xl md:text-9xl lg:text-8xl 2xl:text-[120px] duration-300 group-hover:bg-[#03c1cc] text-white group-hover:text-[#131313] bg-[#1D2939] rounded-full" />
            </div>

            <h1 className="bg-[#F2F4F7] text-lg 2xl:text-xl text-black p-3 rounded-2xl">
              {category}
            </h1>

            <div className="flex justify-between items-center 2xl:text-xl gap-4">
              <p className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#03c1cc] inline-block" />
                {author}
              </p>
              <p className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#03c1cc] inline-block" />
                {date}
              </p>
            </div>

            <p className="text-3xl 2xl:text-4xl sm:w-100 2xl:w-120 text-black">
              {description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;