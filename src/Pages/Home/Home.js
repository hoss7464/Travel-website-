import React from "react";
import "./Home.css";
import "../../Components/Buttons/HomeBtn/HomeBtn.css";
import { Wrapper1, Wrapper2 } from "../../Core-Ui/ActiveAreaWrappers";
import { HomeContainer } from "./HomeElements";
import HeroSection from "./HeroSection";
import Section1 from "./Section1";
import PhoneHeroCardSection from "./PhoneHeroCardSection";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Section6 from "./Section6";
import Section7 from "./Section7";

const Home = () => {
  return (
    <>
      <HomeContainer>
        <Wrapper1>
          <HeroSection />
        </Wrapper1>
        <Wrapper2>
          <Section1 />
          <PhoneHeroCardSection />
          <Section2 />
          <Section3 />
        </Wrapper2>
        <Wrapper1>
          <Section4 />
        </Wrapper1>
        <Wrapper2>
          <Section5 />
          <Section6 />
          <Section7 />
        </Wrapper2>
      </HomeContainer>
    </>
  );
};

export default Home;
