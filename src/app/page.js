"use client"
import Banner from "@/components/Banner";
import CardSection from "@/components/CardSection";
import Footer from "@/components/Footer";
import HotCategory from "@/components/HotCategory";
import Navbar from "@/components/Navbar";
import TrandingCategory from "@/components/TrandingCategory";
import WhyChooseUs from "@/components/WhyChooseUs";


export default function Home() {
  return (
 <section>
  <Navbar/>
     <section className="max-w-7xl mx-auto ">
    <Banner/>
    <CardSection/>
    <TrandingCategory/>
    <WhyChooseUs/>
    <HotCategory/>
     </section>
  <Footer/>
 </section>
  );
}
