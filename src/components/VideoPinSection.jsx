"use client";
import { useGSAP } from "@gsap/react";
import { Trigger } from "@radix-ui/react-dropdown-menu";
import React from "react";
import gsap from "gsap";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";

const VideoPinSection = () => {
  const isMobile = useMediaQuery({
    query: "(max-width:768px",
  });
  useGSAP(() => {
    if (!isMobile) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".vd-pin-section",
          start: "2% top",
          end: "200% top",
          scrub: 1,
          // markers: true,
          pin: true,
        },
      });
      tl.to(".video-box", {
        clipPath: "circle(100% at 50% 50%)",
        ease: "power1.inOut",
      });
    }
  });
  return (
    <section className="vd-pin-section md:h-screen bg-black h-dvh overflow-hidden md:mt-0 mt-20">
      <div
        style={{
          clipPath: "circle(6% at 50% 50%) ",
        }}
        className="video-box size-full"
      >
        <video
          src="/ecommerce-vedeo.mp4"
          playsInline
          muted
          loop
          autoPlay
          className="size-full absolute inset-0 object-cover"
        />

        <div className="abs-center md:scale-100 scale-200 absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Image
            src="/circle-text.svg"
            alt="circle"
            width={150}
            height={150}
            className="spin-circle spin 20s linear infinite"
          />
          <a href="https://www.youtube.com" target="_blank" className="play-btn  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[6vw] flex justify-center items-center bg-[#ffffff1a] backdrop-blur-xl rounded-full">
            <Image
              src="/play.svg"
              alt="play"
              width={80}
              height={80}
              className="size-[3vw] ml-[.5vw]"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default VideoPinSection;
