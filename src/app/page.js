"use client";
import Banner from "@/components/Banner";
import CardSection from "@/components/CardSection";
import ClassicNeutrals from "@/components/ClassicNeutrals";
import ExtraProduct from "@/components/ExtraProduct";
import FellingBolder from "@/components/FellingBolder";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HotCategory from "@/components/HotCategory";
import Navbar from "@/components/Navbar";
import ProductGrid from "@/components/ProductGrid";
import TrandingCategory from "@/components/TrandingCategory";
import VideoPinSection from "@/components/VideoPinSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function Home() {
  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 2,
      effects: true,
    });
  });

  return (
    <section>
      <Navbar />

      <section id="smooth-wrapper" className=" ">
        <div id="smooth-content">
          <Hero />
          <ClassicNeutrals />
          {/* <Banner/> */}

          <CardSection />
          {/* <ExtraProduct /> */}
          <ProductGrid />
          <FellingBolder />
          <VideoPinSection />
          <FinalCTA />
          <Footer />
          {/* <TrandingCategory /> */}
          {/* <WhyChooseUs /> */}
          {/* <HotCategory /> */}
        </div>
      </section>
    </section>
  );
}
