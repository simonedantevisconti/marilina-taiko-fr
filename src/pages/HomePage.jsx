import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import PassCultureSection from "../components/PassCultureSection";
import GallerySection from "../components/GallerySection";
import SocialSection from "../components/SocialSection";

import "../styles/homepage.css";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <PassCultureSection />
      <GallerySection />
      <SocialSection />
    </>
  );
};

export default HomePage;
