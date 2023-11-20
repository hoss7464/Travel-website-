import React from "react";
import { ServiceContainer } from "./ServicesElements";
import { Wrapper1, Wrapper2 } from "../../Core-Ui/ActiveAreaWrappers";
import FirstSection from "./FirstSection/index";
import SerSection2 from "./SerSection2";
import SerSection3 from "./SerSection3";
import SerSection4 from "./SerSection4";
import SerSection5 from "./SerSection5";
import SerSection6 from "./SerSection6";

const Services = () => {
  
  return (
    <>
      <ServiceContainer>
        <Wrapper1>
          <FirstSection />
        </Wrapper1>
        <Wrapper2>
          <SerSection2 />
          <SerSection3 />
          <SerSection4 />
          <SerSection5 />
          <SerSection6 />
        </Wrapper2>
      </ServiceContainer>
    </>
  );
};

export default Services;
