import Navbar from "./parts/Navbar";
import Hero from "./parts/Hero";
import Review from "./parts/Testimonial";
import AboutUs from "./parts/About";
import JoinUs from "./parts/Join";
import StartLearning from "./parts/StartLearning";
import Footer from "./parts/Footer";

export default function MainLayout() {
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
