import React from "react";
import "./Section7.css";
import {
  Section7Container,
  Section7HeaderContainer,
  Section7ContentContainer,
  Section7TextWrapper,
  Section7LeftTextWrapper,
  Section7RightTextWrapper,
  Sectin7Text,
  Section7BtnWrapper,
} from "./Section7Elements";
import {
  SectionHeaderTextContainer,
  SectionHeaderTextWrapper,
  SectionHeaderText,
} from "../../../Components/Text/HeaderSubheaderSectionText";
import { HomePageText } from "../../../Helpers/HomePageData";
import {
  Section4BtnWrapper,
  Section4btn,
} from "../../../Components/Buttons/HomeBtn/HomeBtnElements";

const Section7 = () => {
  return (
    <>
      <Section7Container>
        <Section7HeaderContainer>
          <SectionHeaderTextContainer>
            <SectionHeaderTextWrapper>
              <SectionHeaderText>{HomePageText.text28}</SectionHeaderText>
            </SectionHeaderTextWrapper>
          </SectionHeaderTextContainer>
        </Section7HeaderContainer>
        <Section7ContentContainer>
          <Section7TextWrapper>
            <Section7LeftTextWrapper>
              <Sectin7Text>{HomePageText.text29}</Sectin7Text>
            </Section7LeftTextWrapper>
            <Section7RightTextWrapper>
              <Sectin7Text>{HomePageText.text30}</Sectin7Text>
            </Section7RightTextWrapper>
          </Section7TextWrapper>
          <Section7BtnWrapper>
            <Section4BtnWrapper className="margin-bottom" secondary>
              <Section4btn to="/">Log In</Section4btn>
            </Section4BtnWrapper>
          </Section7BtnWrapper>
        </Section7ContentContainer>
      </Section7Container>
    </>
  );
};

export default Section7;
