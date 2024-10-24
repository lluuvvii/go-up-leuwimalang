import Navbar from "@/components/LandingPage/Navbar";
import Hero from "@/components/LandingPage/Hero";
import Review from "@/components/LandingPage/Testimonial";
import AboutUs from "@/components/LandingPage/About";
import JoinUs from "@/components/LandingPage/Join";
import StartLearning from "@/components/LandingPage/StartLearning";
import Footer from "@/components/LandingPage/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutUs />
      <JoinUs />
      <Review />
      <StartLearning/>
      <Footer/>
    </>
  );
}
