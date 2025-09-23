import { FaShippingFast, FaHandshake, FaSmile, FaUsers } from "react-icons/fa";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <div className="bg-gray-50 text-gray-800">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-orange-300 to-yellow-200 text-white py-20 px-6 md:px-20">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold">About Us</h1>
            <p className="mt-4 text-lg md:text-xl">
              Discover who we are, what we do, and why we are the best choice
              for your shopping journey.
            </p>
          </div>
        </section>

        {/* Company Story */}
        <section className="py-16 px-6 md:px-20 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Our Story</h2>
            <p className="text-gray-600 leading-relaxed">
              Founded with a passion for innovation and customer satisfaction,
              our e-commerce store brings you the latest products at unbeatable
              prices. We started small but quickly grew into a trusted
              marketplace, serving thousands of happy customers across the
              country.
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

        {/* Mission & Vision */}
        <section className="bg-white py-16 px-6 md:px-20">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
            <div className="bg-orange-100 p-8 rounded-xl shadow">
              <h3 className="text-2xl font-bold mb-3">Our Mission</h3>
              <p className="text-gray-600">
                To create a seamless shopping experience that empowers our
                customers with convenience, trust, and value.
              </p>
            </div>
            <div className="bg-yellow-100 p-8 rounded-xl shadow">
              <h3 className="text-2xl font-bold mb-3">Our Vision</h3>
              <p className="text-gray-600">
                To be the leading e-commerce platform known for quality,
                customer care, and innovation in online shopping.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 px-6 md:px-20 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Us
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center">
              <FaShippingFast className="text-orange-500 text-4xl mx-auto mb-4" />
              <h4 className="text-lg font-semibold">Fast Delivery</h4>
              <p className="text-gray-600 mt-2 text-sm">
                Quick and reliable shipping.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center">
              <FaHandshake className="text-orange-500 text-4xl mx-auto mb-4" />
              <h4 className="text-lg font-semibold">Trusted Quality</h4>
              <p className="text-gray-600 mt-2 text-sm">
                We only sell genuine products.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center">
              <FaSmile className="text-orange-500 text-4xl mx-auto mb-4" />
              <h4 className="text-lg font-semibold">Customer Satisfaction</h4>
              <p className="text-gray-600 mt-2 text-sm">
                Your happiness is our priority.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center">
              <FaUsers className="text-orange-500 text-4xl mx-auto mb-4" />
              <h4 className="text-lg font-semibold">Community Driven</h4>
              <p className="text-gray-600 mt-2 text-sm">
                Loved by 50K+ happy customers.
              </p>
            </div>
          </div>
        </section>

        {/* Meet Our Team */}
        <section className="bg-gray-100 py-16 px-6 md:px-20">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-12">Meet Our Team</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Team Card */}
              <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                <Image
                  src="/ab-pic-3.avif"
                  alt="Team Member"
                  width={300}
                  height={300}
                  className="rounded-full mx-auto mb-4"
                />
                <h4 className="text-lg font-semibold">Sarah Johnson</h4>
                <p className="text-sm text-gray-600">CEO & Founder</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                <Image
                  src="/ab-pic-1.avif"
                  alt="Team Member"
                  width={300}
                  height={300}
                  className="rounded-full mx-auto mb-4"
                />
                <h4 className="text-lg font-semibold">Michael Smith</h4>
                <p className="text-sm text-gray-600">Head of Marketing</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                <Image
                  src="/ab-pic-5.avif"
                  alt="Team Member"
                  width={300}
                  height={300}
                  className="rounded-full mx-auto mb-4"
                />
                <h4 className="text-lg font-semibold">Emily Davis</h4>
                <p className="text-sm text-gray-600">Product Manager</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
