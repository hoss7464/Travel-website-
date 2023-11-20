import React from "react";
import { ContactFirstSectionContainer } from "./ContactElements";
import { Wrapper1, Wrapper2 } from "../../Core-Ui/ActiveAreaWrappers";
import CoSection1 from "./CoSection1";
import CoSection2 from "./CoSection2";

const Contact = () => {
  return (
    <>
      <ContactFirstSectionContainer>
        <Wrapper1>
          <CoSection1 />
        </Wrapper1>
        <Wrapper2>
          <CoSection2 />
        </Wrapper2>
      </ContactFirstSectionContainer>
    </>
  );
};

export default Contact;
