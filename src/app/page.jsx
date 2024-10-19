import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Review from "../components/Testimonial";
import AboutUs from "../components/About";
import JoinUs from "../components/Join";
import StartLearning from "../components/StartLearning";
import Footer from "../components/Footer";

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
