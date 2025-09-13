"use client"
import Banner from "@/components/Banner";
import CardSection from "@/components/CardSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";


export default function Home() {
  return (
 <section>
  <Navbar/>
<section className="max-w-7xl mx-auto">
    <Banner/>
    <CardSection/>
</section>
  <Footer/>
 </section>
  );
}
