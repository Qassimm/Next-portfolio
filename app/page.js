"use client";

import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Form from "@/components/Form";
import Hero from "@/components/Hero";
import HireMe from "@/components/HireMe";
import MyServices from "@/components/MyServices";
import MyWorkExperience from "@/components/MyWorkExperience";
import Portfolio from "@/components/Portfolio";
import Testimonial from "@/components/Testimonial";

import { Toaster } from 'react-hot-toast';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Lenis from 'lenis';
import React, { useEffect, useRef } from 'react'



export default function Home() {

   useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf); 

    return () => {
      lenis.destroy();
    };
  }, []);  

   const outlineRef  = useRef(null);
   const dotRef = useRef(null)

   useGSAP(() => {
      const dotX = gsap.quickTo(dotRef.current, "x", {duration:0.4, ease:"power3.out"});
      const dotY = gsap.quickTo(dotRef.current, "y", {duration:0.4, ease:"power3.out"});
      const outlineX = gsap.quickTo(outlineRef.current, "x", {duration:0.4, ease:"power3.out"});
      const outlineY = gsap.quickTo(outlineRef.current, "y", {duration:0.4, ease:"power3.out"});

      const mouseMove = (e) => {
        dotX(e.clientX - 6);
        dotY(e.clientY - 6);
        outlineX(e.clientX - 20);
        outlineY(e.clientY - 20);
      };

      window.addEventListener('mousemove', mouseMove);

      // hover animations
      const addHover = () => {
        gsap.to(outlineRef.current, { scale: 1.3, duration: 0.2, ease: "power3.out" });
        gsap.to(dotRef.current, {opacity:0, duration:0})
      };

      const removeHover = () => {
        gsap.to(outlineRef.current, { scale: 1, duration: 0.2, ease: "power3.out" });
        gsap.to(dotRef.current, {opacity:1, duration:0})
      };

      const hoverables = document.querySelectorAll("a, button, .hoverable");
      hoverables.forEach((el) => {
        el.addEventListener("mouseenter", addHover);
        el.addEventListener("mouseleave", removeHover);
      });

      return () => {
        window.removeEventListener("mousemove", mouseMove); 
        hoverables.forEach((el) => {
          el.removeEventListener("mouseenter", addHover);
          el.removeEventListener("mouseleave", removeHover);
        });
      };
   }, [])

  return (
    <>
    <Hero />
    <MyServices />
    <MyWorkExperience />
    <HireMe />
    <Portfolio />
    <Testimonial />
    <Contact />
    <Toaster position="top-center" reverseOrder={false} />
    <Blog />
    <Form />
    <Footer />



    <div
        ref={dotRef}
        className="w-3 h-3 rounded-full bg-[#03c1cc] fixed top-0 left-0 pointer-events-none z-[9999]"
      />
      <div
        ref={outlineRef}
        className="w-10 h-10 rounded-full border-2 border-cyan-600 fixed top-0 left-0 pointer-events-none z-[9999]"
      />
    </>
  );
}
