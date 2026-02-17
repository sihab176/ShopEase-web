"use client";
import AnimationNavbar from "@/components/AnimationNavbar";
import ConnectStudio from "@/components/ConnectStudio";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
const ContactUs = () => {
  // animation
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
          {/* navbar */}
        
          {/* banner section */}
          <ConnectStudio />
          {/* contact  */}
          <div className="grid md:grid-cols-2 grid-cols-1  gap-5 max-w-7xl mx-auto my-20 ">
            <section className="bg-white  p-8">
              <h3 className="text-3xl text-gray-600 mb-2">Reach out to us!</h3>
              <p>
                Got a question about Lander? Are you interested in partnering
                with us? Have some suggestions or just wand to say hi? contact
                us
              </p>
              <div className="mx-3 my-8">
                <input
                  type="text"
                  placeholder="[ Fast name ]"
                  className="border-b-2 w-full h-4 py-5 px-3  mb-8 placeholder:scale-y-125 focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="[ Last name ]"
                  className="border-b-2 w-full h-4 py-5 px-3  mb-8 placeholder:scale-y-125 focus:outline-none"
                />
                <input
                  type="email"
                  placeholder="[ Email ]"
                  className="border-b-2 w-full h-4 py-5 px-3  mb-8 placeholder:scale-y-125 focus:outline-none"
                />
                <textarea
                  name=""
                  id=" "
                  className="w-full border-b-2  py-5 px-3   placeholder:scale-y-125 focus:outline-none h-24 p-2 mb-3"
                  placeholder="[ Message ]"
                ></textarea>
                <button className="btn bg-black text-white w-full text-lg ">
                  Submit
                </button>
              </div>
            </section>
            {/* customer care */}
            <section className="  p-8">
              <h3 className="text-3xl text-gray-600 mb-2">Customer Care</h3>
              <p>
                Not sure where to start? Need help adding that extra mojo your
                landing page? just visit our help center or get in touch with us
                :
              </p>
              <div className="my-8">
                <div className="flex gap-6 items-center mb-7">
                  <div className="avatar">
                    <div className="ring-black ring-offset-base-100 w-16 h-16 rounded-full ring-2 ring-offset-2">
                      <img src="https://i.ibb.co.com/F4Xrny7x/customer-c.jpg" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-2xl font-semibold">Elone Mask</h4>
                    <p className="text-gray-600 text-[12px]">
                      Customer Care <br />{" "}
                      <span className="text-orange-600 text-[11px]">
                        Toll Free +18559903383
                      </span>{" "}
                    </p>
                  </div>
                </div>
                <div className="flex gap-6 items-center mb-7">
                  <div className="avatar">
                    <div className="ring-black ring-offset-base-100 w-16 h-16 rounded-full ring-2 ring-offset-2">
                      <img src="https://i.ibb.co.com/V0WcGrfb/customer-c2.jpg" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-2xl font-semibold">David warner</h4>
                    <p className="text-gray-600 text-[12px]">
                      Customer Care <br />{" "}
                      <span className="text-orange-600 text-[11px]">
                        Toll Free +903588498293
                      </span>{" "}
                    </p>
                  </div>
                </div>
              </div>
              <h3 className="text-3xl text-gray-500 mb-4">
                Others ways to connect
              </h3>
              <div className="flex items-center gap-2 mb-4">
                <a
                  href="https://www.facebook.com/md.shahariyar.787622"
                  target="_blank"
                >
                  <FaFacebook className="text-[55px] " />
                </a>
                <p className="text-sm text-gray-700">
                  Be the first on your block to get product updates,
                  announcements, news and lots of really good content like us on
                  Facebook today!
                </p>
              </div>
              <div className="flex items-center gap-2 mb-4">
                <a
                  href="https://www.linkedin.com/in/shahab-bin-shariar-web/"
                  target="_blank"
                  className="bg-black  p-4 rounded-full text-2xl text-white"
                >
                  <FaLinkedinIn className="" />
                </a>
                <p className="text-sm text-gray-700">
                  Be the first on your block to get product updates,
                  announcements, news and lots of really good content like us on
                  Facebook today!
                </p>
              </div>
            </section>
          </div>
          {/* footer */}
          <Footer />
        </div>
      </section>
    </>
  );
};

export default ContactUs;
