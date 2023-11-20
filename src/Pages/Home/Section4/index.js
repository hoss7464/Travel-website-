import React from "react";
import "./Section4.css";
import {
  Section4Container,
  Section4ActiveArea,
  Section4textWrapper,
  Section4HeaderContainer,
  Section4Header,
  Section4SubheaderContainer,
  Section4Subheader,
  Section4Form,
  Section4InputContainer,
  Section4Input,
  Section4BtnContainer,
} from "./Section4Elements";
import {
  Section4BtnWrapper,
  Section4btn,
} from "../../../Components/Buttons/HomeBtn/HomeBtnElements";
import { HomePageText } from "../../../Helpers/HomePageData";

const Section4 = () => {
  return (
    <>
      <Section4Container className="Section4-background">
        <Section4ActiveArea>
          <Section4textWrapper>
            <Section4HeaderContainer>
              <Section4Header>{HomePageText.text21}</Section4Header>
            </Section4HeaderContainer>
            <Section4SubheaderContainer>
              <Section4Subheader>{HomePageText.text22}</Section4Subheader>
            </Section4SubheaderContainer>
            <Section4Form>
              <Section4InputContainer>
                <Section4Input placeholder={HomePageText.text23} />
              </Section4InputContainer>
              <Section4BtnContainer>
                <Section4BtnWrapper>
                  <Section4btn to="/">Log In</Section4btn>
                </Section4BtnWrapper>
              </Section4BtnContainer>
            </Section4Form>
          </Section4textWrapper>
        </Section4ActiveArea>
      </Section4Container>
    </>
  );
};

export default Section4;
