import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import Navbar1 from "../components/Navbar1";
// import ButtonID from "../components/ButtonID";

const LandingPage = () => {
  return (
    <>
      <Navbar1 />
      <HeroSection />
      {/* <ButtonID /> */}
      <AboutSection />
      <ContactForm />
      <Footer />
    </>
  );
};

export default LandingPage;
