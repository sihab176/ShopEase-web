import Image from "next/image";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Banner = () => {
  const bannerInfo = [
    {
      id: 1,
      title: "Experience Pure Sound - Your Perfect Headphones Awaits!",
      offer: "Limited Time Offer 30% Off",
      buttonText1: "Buy now",
      buttonText2: "Find more",
      img: "/bose_headphone_image.png",
    },

    {
      id: 3,
      title: "Power Meets Elegance - Apple MacBook Pro is Here for you!",
      offer: "Exclusive Deal 40% Off",
      buttonText1: "Order Now",
      buttonText2: "Learn More",
      img: "/asus_laptop_image.png",
    },
    {
      id: 2,
      title: "Next-Level Gaming Starts Here - Discover PlayStation 5 Today!",
      offer: "Hurry up only few lefts!",
      buttonText1: "Shop Now",
      buttonText2: "Explore Deals",
      img: "/header_playstation_image.png",
    },
  ];
  return (
    // <section className="bg-sky-100 px-10 py-8">
    //   <section className="lg:flex justify-between md:flex-col-reverse">
    //     <div className="space-y-4">
    //       <h4 className="text-orange-400">this is 20 % discount</h4>
    //       <h1 className="text-6xl font-bold">
    //         Lorem ipsum dolor sit amet consectetur <br />
    //         adipisicing elit.{" "}
    //       </h1>
    //       <p className="text-gray-600">
    //         Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga totam
    //         unde porro accusamus distinctio delectus numquam minus hic labore
    //         obcaecati.
    //       </p>
    //       <div className="flex gap-4 items-center">
    //         <button className="btn">View All</button>
    //         <button className="btn">Shop All</button>
    //       </div>
    //     </div>
    //     <div>
    //       <Image
    //         src="/shopping-bag.png"
    //         alt="Company Logo"
    //         width={500}
    //         height={5000}
    //         className="object-contain"
    //       />
    //     </div>
    //   </section>
    // </section>
    <section className="bg-[#c7d6d5] rounded">
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showArrows={false}
        showStatus={false}
      >
        {bannerInfo.map((element) => (
          <section className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 px-6 md:px-20 py-10">
            {/* Text Content */}
            <div className="space-y-1 text-center lg:text-left max-w-2xl">
              <h4 className="text-orange-500 font-semibold text-lg">
                🎉 {element.offer}
              </h4>
              <h1 className="max-w-lg md:text-4xl  text-2xl font-bold">
                {element?.title}
              </h1>
              <p
                className="text-gray-600 text-base md:text-lg mt-6
          "
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                totam unde porro accusamus distinctio delectus numquam minus hic
                labore obcaecati.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-8">
                <button className="px-6 py-3 bg-orange-500 text-white rounded-xl shadow hover:bg-orange-600 transition">
                  View All
                </button>
                <button className="px-6 py-3 bg-white border border-orange-500 text-orange-500 rounded-xl shadow hover:bg-orange-100 transition">
                  Shop All
                </button>
              </div>
            </div>

            {/* Image */}
            <div className="flex justify-center lg:justify-end">
              <Image
                src={element?.img}
                alt="Discount Banner"
                width={300}
                height={300}
                className="object-contain w-72 md:w-96 lg:w-[300px]"
              />
            </div>
          </section>
        ))}
      </Carousel>
    </section>
  );
};

export default Banner;
