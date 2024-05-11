import AboutUs from "@/components/AboutUs";
import ExceptionalDelights from "@/components/ExceptionalDelights";
import Footer from "@/components/Footer";
import FreshlyMode from "@/components/FreshlyMode";
import Hero from "@/components/Hero";
import HeroSlider from "@/components/HeroSlider";
import Menubar from "@/components/Menubar";
import Navbar from "@/components/Navbar";
import NoodlesPastas from "@/components/NoodlesPastas";
import ServeDelights from "@/components/ServeDelights";
import Support from "@/components/Support";
import TopHeader from "@/components/TopHeader";

export default function Home() {
  return (
    <main>
      <TopHeader/>
      <Navbar/>
      <Hero/>
      <ServeDelights/>
      <NoodlesPastas/>
      <FreshlyMode/>
      <ExceptionalDelights/>
      <Support/>
      <AboutUs/>
      <Footer/>
     </main>
  );
}
