"use client";

import React  from "react";
import { LuArrowUpRight } from "react-icons/lu";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/src/ScrollTrigger";
import { useRef } from "react";

const Form = () => {


    const leafRef = useRef(null);
      const leafRef2 = useRef(null);
      const leafRef3 = useRef(null);
      const formRef = useRef(null);
      const ctx = useRef(null);

       gsap.registerPlugin(ScrollTrigger);


       useGSAP(() => {

        ctx.current = gsap.context(() => {
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
            start: "top 80%",
            end: "top 0%",
            scrub: true,
          },
        }
      );

      gsap.fromTo(
        leafRef2.current,
        { x: 0, filter: "blur(0px)" },
        {
          x: 200,
          filter: "blur(3px)",
          rotation: 50,
          ease: "sine.inOut",
          scrollTrigger: {
            trigger: leafRef2.current,
            start: "top 70%",
            end: "top 0%",
            scrub: true,
          },
        }
      );

      gsap.fromTo(
        leafRef3.current,
        { x: 0, filter: "blur(0px)" },
        {
          x: 40,
          filter: "blur(3px)",
          ease: "sine.inOut",
          scrollTrigger: {
            trigger: leafRef3.current,
            start: "top 70%",
            end: "top 0%",
            scrub: true,
          },
        }
      );
        })

       gsap.fromTo(
  formRef.current,
  { opacity: 0, y: 50 },
  {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: formRef.current,
      start: "top 80%",
      toggleActions: "play none none none",
    },
  }
);

       }, [])

       

  return (
    <div className="min-h-screen w-auto bg-cover sm:rounded-[50px] relative overflow-hidden flex justify-center items-center  bg-[#EBECF0] py-12 lg:py-0"
          style={{ backgroundImage: `url("/images/Background.png")` }}>
      <form ref={formRef} className="form p-6 w-[90vw]  md:w-[75vw]  bg-[#EBECF0] rounded-2xl shadow-[inset_2px_2px_5px_#BABECC,inset_-5px_-5px_10px_#FFF] z-10">

        <div className="py-6 text-center ">
          <h1 className="text-2xl md:text-5xl font-semibold text-[#03c1cc]/75 drop-shadow-sm">Contact Us Now</h1>
        </div>

       
        <label className="block mb-6 w-full lg:text-lg">
          <input
            type="text"
            placeholder="Enter your full name"
            className="w-full px-4 py-3 rounded-full bg-[#EBECF0] shadow-[inset_2px_2px_5px_#BABECC,inset_-5px_-5px_10px_#FFF] focus:shadow-[inset_1px_1px_2px_#BABECC,inset_-1px_-1px_2px_#FFF] transition-all outline-none"
          />
        </label>

        <label className="block mb-6 w-full lg:text-lg">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-3 rounded-full bg-[#EBECF0] shadow-[inset_2px_2px_5px_#BABECC,inset_-5px_-5px_10px_#FFF] focus:shadow-[inset_1px_1px_2px_#BABECC,inset_-1px_-1px_2px_#FFF] transition-all outline-none"
          />
        </label>

        <label className="block mb-6 w-full lg:text-lg">
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded-full bg-[#EBECF0] shadow-[inset_2px_2px_5px_#BABECC,inset_-5px_-5px_10px_#FFF] focus:shadow-[inset_1px_1px_2px_#BABECC,inset_-1px_-1px_2px_#FFF] transition-all outline-none"
          />
        </label>

       

        {/* 🔹 Login Button */}
        <div className="w-full flex justify-center items-center ">
            <button
          type="button"
          className="w-50  py-3 text-lg rounded-full font-semibold text-[#03c1cc] hover:text-black bg-[#EBECF0] hover:bg-[#03c1cc] shadow-[-5px_-5px_20px_#FFF,5px_5px_20px_#BABECC] hover:shadow-[-2px_-2px_5px_#FFF,2px_2px_5px_#BABECC] active:shadow-[inset_1px_1px_2px_#BABECC,inset_-1px_-1px_2px_#FFF] transition-all flex justify-center items-center gap-2 mt-10"
        >
        Submit <LuArrowUpRight />
        </button>
        </div>
      </form>



      <div className="image-class hidden lg:block">
              <img
                src="/images/Leaf.png"
                alt=""
                ref={leafRef}
                className="h-80 mt-4 absolute -left-25 top-30 rotate-70 z-5"
              />
              <img
                src="/images/Leaf.png"
                alt=""
                ref={leafRef2}
                className="h-30 mt-4 absolute left-1/3 top-0 z-5"
              />
              <img
                src="/images/Leaf.png"
                alt=""
                ref={leafRef3}
                className="h-145 mt-4 absolute -right-30 top-30 z-5"
              />
            </div>
    </div>
  );
};

export default Form;