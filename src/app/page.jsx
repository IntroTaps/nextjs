import "@/App.css"
import NavBar from "@/components/NavBar";
import Hero from "@/sections/Hero";
import Section2 from "@/sections/Section2";
import Section3 from "@/sections/Section3";
import Brands from "@/sections/Brands";
import CardOptions from "@/sections/CardOptions";
import Section4 from "@/sections/Section4";
import Footer from "@/components/footer";
import Statstripe from "@/sections/Statstripe";
import CustomCard from "@/sections/CustomCard";

import Head from 'next/head';
function Home() {
  return (
   <>
   <Head>
    <title>IntroTaps - Digital Business Cards For Everyone</title>
   </Head>
      <NavBar active="home"/>
      <Hero />
      <Section2 />
      <Section3 />
      <Brands />
      <CardOptions />
      <Statstripe />
      <CustomCard/>
      <Section4 />
      <Footer />
   </>
  );
}
export default Home;