"use client"
import { FaShippingFast, FaHandshake, FaSmile, FaUsers } from "react-icons/fa";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import OurVision from "@/components/OurVision";
import MaterialsSection from "@/components/MaterialsSection";
import AnimationNavbar from "@/components/AnimationNavbar";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
export default function AboutPage() {

  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 2,
      effects: true,
    });
  });


  return (
    <>
         <AnimationNavbar />
      <section id="smooth-wrapper">
        <div id="smooth-content">
          {/* <Navbar /> */}
       
          <div className="bg-gray-50 text-gray-800">
            <OurVision />
            <MaterialsSection />

            {/* Company Story */}
            <section className="py-16 px-6 md:px-20 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Our Story</h2>
                <p className="text-gray-600 leading-relaxed">
                  Founded with a passion for innovation and customer
                  satisfaction, our e-commerce store brings you the latest
                  products at unbeatable prices. We started small but quickly
                  grew into a trusted marketplace, serving thousands of happy
                  customers across the country.
                </p>
                <p className="text-gray-600 mt-4 leading-relaxed">
                  Our mission is simple: deliver quality, affordability, and
                  convenience—all in one place.
                </p>
              </div>
              <Image
                src="/about-image1.png"
                alt="About Us"
                width={600}
                height={400}
                className=" "
              />
            </section>

            {/* Meet Our Team */}
            <section className="bg-gray-100 py-16 px-6 md:px-20">
              <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-12">Meet Our Team</h2>
                <div className="grid md:grid-cols-3 gap-8">
                  {/* Team Card */}
                  <div className="bg-white p-6  shadow hover:shadow-lg transition">
                    <Image
                      src="/ab-pic-3.avif"
                      alt="Team Member"
                      width={300}
                      height={300}
                      className=" mx-auto mb-4"
                    />
                    <h4 className="text-lg font-semibold">Sarah Johnson</h4>
                    <p className="text-sm text-gray-600">CEO & Founder</p>
                  </div>
                  <div className="bg-white p-6  shadow hover:shadow-lg transition">
                    <Image
                      src="/ab-pic-1.avif"
                      alt="Team Member"
                      width={300}
                      height={300}
                      className=" mx-auto mb-4"
                    />
                    <h4 className="text-lg font-semibold">Michael Smith</h4>
                    <p className="text-sm text-gray-600">Head of Marketing</p>
                  </div>
                  <div className="bg-white p-6  shadow hover:shadow-lg transition">
                    <Image
                      src="/ab-pic-5.avif"
                      alt="Team Member"
                      width={300}
                      height={300}
                      className=" mx-auto mb-4"
                    />
                    <h4 className="text-lg font-semibold">Emily Davis</h4>
                    <p className="text-sm text-gray-600">Product Manager</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <Footer />
        </div>
      </section>
    </>
  );
}
