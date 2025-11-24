import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div>
      {/* navbar */}
      <Navbar />
      {/* banner section */}
      <section className="relative bg-gradient-to-r from-[#588157] to-[#365535] text-white py-24 px-6 md:px-20">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-semibold ">
            ＣＯＮＴＡＣＴ ＵＳ
          </h1>
          <p className="mt-4  text-gray-800 font-semibold">
            Our team of customer care ninjas is ready to hear from you.
          </p>
        </div>
      </section>
      {/* contact  */}
      <div className="grid md:grid-cols-2 grid-cols-1  gap-5 max-w-7xl mx-auto my-20">
        <section className="bg-white  p-8">
          <h3 className="text-3xl text-gray-600 mb-2">Reach out to us!</h3>
          <p>
            Got a question about Lander? Are you interested in partnering with
            us? Have some suggestions or just wand to say hi? contact us
          </p>
          <div className="mx-3 my-8">
            <input
              type="text"
              placeholder="Fast name"
              className="border border-gray-500 w-full h-4 py-5 px-3  mb-8"
            />
            <input
              type="text"
              placeholder="Last name"
              className="border border-gray-500 w-full h-4 py-5 px-3  mb-8"
            />
            <input
              type="email"
              placeholder="Email"
              className="border border-gray-500 w-full h-4 py-5 px-3  mb-8"
            />
            <textarea
              name=""
              id=" "
              className="w-full border border-gray-500 h-24 p-2 mb-3"
              placeholder="Message"
            ></textarea>
            <button className="btn bg-[#e8985e] w-full text-lg ">Submit</button>
          </div>
        </section>
        {/* customer care */}
        <section className="  p-8">
          <h3 className="text-3xl text-gray-600 mb-2">Customer Care</h3>
          <p>
            Not sure where to start? Need help adding that extra mojo your
            landing page? just visit our help center or get in touch with us :
          </p>
          <div className="my-8">
            <div className="flex gap-6 items-center mb-7">
              <div className="avatar">
                <div className="ring-primary ring-offset-base-100 w-16 h-16 rounded-full ring-2 ring-offset-2">
                  <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
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
                <div className="ring-primary ring-offset-base-100 w-16 h-16 rounded-full ring-2 ring-offset-2">
                  <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
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
          </div>
          <h3 className="text-3xl text-gray-500 mb-4">Others ways to connect</h3>
          <div className="flex items-center gap-2 mb-4">
            <a href="https://www.facebook.com/md.shahariyar.787622" target="_blank">
              <FaFacebook className="text-[55px] text-[#e8985e]" />
            </a>
            <p className="text-sm text-gray-700">
              Be the first on your block to get product updates, announcements,
              news and lots of really good content like us on Facebook today!
            </p>
          </div>
          <div className="flex items-center gap-2 mb-4">
            <a
              href="https://www.linkedin.com/in/shahab-bin-shariar-web/"target="_blank"
              className="bg-[#e8985e]  p-4 rounded-full text-2xl text-white"
            >
              <FaLinkedinIn className="" />
            </a>
            <p className="text-sm text-gray-700">
              Be the first on your block to get product updates, announcements,
              news and lots of really good content like us on Facebook today!
            </p>
          </div>
        </section>
      </div>
      {/* footer */}
      <Footer />
    </div>
  );
};

export default ContactUs;
