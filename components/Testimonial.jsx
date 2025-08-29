"use client";

import React, { useRef } from "react";
import { FaQuoteRight, FaStar } from "react-icons/fa";
import { Testimonials } from "./Data/Testimonial";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/src/ScrollTrigger";

const Testimonial = () => {
  const leafRef = useRef(null);
  const leafRef2 = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.fromTo(
      leafRef.current,
      { y: 0, rotate: 70, filter: "blur(0px)" },
      {
        y: 80,
        rotate: 150,
        filter: "blur(3px)",
        duration: 8,
        ease: "sine.inOut",
        scrollTrigger: {
          trigger: leafRef.current,
          start: "top 90%",
          end: "top 0%",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      leafRef2.current,
      { x: 0, filter: "blur(0px)" },
      {
        x: -200,
        filter: "blur(3px)",
        rotation: -50,
        ease: "sine.inOut",
        scrollTrigger: {
          trigger: leafRef2.current,
          start: "top 80%",
          end: "top 0%",
          scrub: true,
        },
      }
    );

    gsap.from(".testimonial-heading", {
      opacity: 0,
      y: -20,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".testimonial-heading",
        start: "top 60%",
        toggleActions: "play none none none",
      },
    });

    gsap.from(".test-text", {
      opacity: 0,
      y: -20,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".test-text",
        start: "top 60%",
        toggleActions: "play none none none",
      },
    });
  }, []);

  return (
    <div
      className="lg:h-auto 2xl:h-[100vh] lg:py-10 w-auto bg-cover sm:rounded-[50px] relative text-white overflow-hidden my-12"
      style={{ backgroundImage: `url("/images/Background.png")` }}
    >
      {/* Black overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px] rounded-[50px] z-5" />

      {/* Content Wrapper Centered */}
      <div className="z-20 relative p-5 h-full flex flex-col justify-center">
        <div className="flex justify-center items-center flex-col gap-10">
          {/* Heading + Paragraph */}
          <div className="flex flex-col text-center justify-center items-center gap-4">
            <h1 className="testimonial-heading md:w-120 2xl:w-220 lg:leading-15 text-4xl lg:text-5xl 2xl:text-6xl font-semibold text-center">
              Testimonials That Speak to{" "}
              <span className="text-[#03c1cc]">My Results</span>
            </h1>

            <p className="test-text lg:w-200 lg:text-[20px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              congue interdum ligula a dignissim. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Sed lobortis orci elementum egestas
              lobortis.
            </p>
          </div>

          {/* Testimonials Slider */}
          <div className="flex flex-col justify-center items-center gap-10">
            <div className="testimonial-wrapper overflow-hidden mt-20">
              <div className="testimonial-track flex w-max animate-scroll-left gap-8">
                {[...Testimonials, ...Testimonials].map((item, index) => (
                  <div
                    key={index}
                    className="shrink-0 w-[95vw] md:w-[95vw] lg:w-[55vw] md:h-[260px] 2xl:h-[360px] rounded-[24px] bg-white/15 backdrop-blur-[3px] p-3 flex flex-col justify-center items-center md:items-start gap-6"
                  >
                    {/* Profile Info */}
                    <div className="flex justify-between items-center w-full">
                      <div className="flex gap-5 relative z-10">
                        <img
                          src="/images/testimonial.jpg"
                          alt={item.name}
                          className="h-[55px] w-[55px] 2xl:h-[105px] 2xl:w-[105px] object-cover rounded-full"
                        />
                        <div>
                          <h2 className="font-semibold text-[23px] 2xl:text-[28px]">
                            {item.name}
                          </h2>
                          <p className="2xl:text-xl">{item.position}</p>
                        </div>
                      </div>
                      <FaQuoteRight className="hidden md:block text-9xl absolute right-10 top-5 text-[#6670854D]" />
                    </div>

                    {/* Rating */}
                    <div className="flex text-2xl gap-1">
                      {Array(item.rating)
                        .fill(0)
                        .map((_, i) => (
                          <span key={i}>
                            <FaStar className="text-[#03c1cc] text-3xl 2xl:text-6xl" />
                          </span>
                        ))}
                      <p>{item.rating.toFixed(1)}</p>
                    </div>

                    {/* Feedback */}
                    <p className="text-center md:text-start 2xl:text-xl">
                      {item.feedback}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Leaves */}
      <div className="image-class hidden lg:block">
        <img
          src="/images/Leaf.png"
          alt=""
          ref={leafRef}
          className="h-80 mt-4 absolute -left-25 top-0 rotate-70 z-5"
        />
        <img
          src="/images/Leaf.png"
          alt=""
          ref={leafRef2}
          className="h-30 mt-4 absolute right-0 top-0 z-5"
        />
      </div>
    </div>
  );
};

export default Testimonial;