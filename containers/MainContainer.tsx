import React, { useState } from "react";
import { Container, Wrraper } from "./MainContainer.styles";
import Navigation from "../components/Navigation/Navigation";
import HeroSection from "../sections/HeroSection/HeroSection";
import ServiceingItemsSection from "../sections/ServiceingItemsSection/ServiceingItemsSection";
import StatisticsSection from "../sections/StatisticsSection/StatisticsSection";
import FormSection from "../sections/FormSection/FormSection";
import ServiceAreasSection from "../sections/ServiceAreasSection/ServiceAreasSection";
import CommentSection from "../sections/CommentSection/CommentSection";
import Footer from "../components/Footer/Footer";

const MainContainer = () => {
  const [lightBackground, setLightBackground] = useState<boolean>(false);
  const isMenuOpen = (isLight: boolean) => {
    setLightBackground(isLight);
  };
  return (
    <Container>
      <Navigation isMenuOpen={isMenuOpen} />
      <Wrraper lightBackground={lightBackground}>
        <HeroSection />
        <ServiceingItemsSection />
        <StatisticsSection />
        <CommentSection />
        <ServiceAreasSection />
        <FormSection />
        <Footer />
      </Wrraper>
    </Container>
  );
};

export default MainContainer;
