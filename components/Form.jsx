"use client";
import { LuArrowUpRight } from "react-icons/lu";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/src/ScrollTrigger";
import { useRef, useState } from "react";
import toast from "react-hot-toast";

const Form = () => {

  const [loading, setLoading] = useState(false); 

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


    const handleSubmit = async (e) => {
  e.preventDefault();

  const formData = {
    name: e.target.name.value,
    email: e.target.email.value,
    subject: e.target.subject.value,
    message: e.target.message.value,
  };

  setLoading(true);

  try {
    const res = await fetch("/api/contactForm", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json(); 
    if (res.ok) {
  toast.success( data.message);
  e.target.reset();
} else {
  toast.error( data.message);
}
  } catch (error) {
    console.error("Fetch error:", error);
    toast.error("Something went wrong!");
  }finally {
      setLoading(false); 
    }
};



  return (
    <div className="min-h-screen w-auto bg-cover sm:rounded-[50px] relative overflow-hidden flex justify-center items-center  bg-[#EBECF0] py-12 lg:py-0"
          style={{ backgroundImage: `url("/images/Background.png")` }}>

           <div className="flex flex-col md:flex-row justify-center gap-10 md:gap-50 w-full items-center">
             <h1 className="text-white text-5xl xs:text-6xl sm:text-7xl font-bold z-6 text-center font-lufga">
              Have an Idea ?<br />
              <span className=" font-normal">Let's talk</span>
            </h1>
            
     <form action="#"  ref={formRef} onSubmit={handleSubmit}  method="POST" className="max-w-2xl bg-black/95 px-4 py-8 rounded-lg z-6">
    <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
      <div>
        <label htmlFor="first-name" className="block text-sm/6 font-semibold text-white">Name</label>
        <div className="mt-2.5">
          <input id="first-name" type="text" name="name" autoComplete="given-name" className="input-style block w-full rounded-md bg-white/20 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-[#03c1cc]" />
        </div>
      </div>
      <div>
        <label htmlFor="last-name" className="block text-sm/6 font-semibold text-white">Email</label>
        <div className="mt-2.5">
          <input id="last-name" type="text" name="email" autoComplete="family-name" className="block w-full rounded-md bg-white/20 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-[#03c1cc]" />
        </div>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="company" className="block text-sm/6 font-semibold text-white">Subject</label>
        <div className="mt-2.5">
          <input id="company" type="text" name="subject" autoComplete="organization" className="block w-full rounded-md bg-white/20 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-[#03c1cc]" />
        </div>
      </div>
      <div className="sm:col-span-2">
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="message" className="block text-sm/6 font-semibold text-white">Message</label>
        <div className="mt-2.5">
          <textarea id="message" name="message" rows="4" className="block w-full rounded-md bg-white/20 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-[#03c1cc]"></textarea>
        </div>
      </div>
      <div className="flex gap-x-4 sm:col-span-2">
        <div className="flex h-6 items-center">
         
        </div>
      </div>
    </div>
    <div>
      <button type="submit" className={`flex justify-center items-center w-full rounded-md px-3.5 py-2.5 text-center font-semibold shadow-xs cursor-pointer 
    ${loading 
      ? "bg-gray-400 text-white cursor-not-allowed" // loading state
      : "bg-[#03c1cc] text-white hover:bg-[#069ea7] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
    }`}>{loading ?'Submitting...' : "Submit"}</button>
    </div>
  </form>
           </div>

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