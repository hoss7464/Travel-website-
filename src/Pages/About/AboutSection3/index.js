import React from "react";
import "./AboutSection3.css";
import {
  AboutSection3Container,
  AboutSection3HeaderContainer,
  AboutSection3ContentContainer,
  Pearson1Text1Person2Text2Container,
  Person1Text1Wrapper,
  Person1Wrapper,
  Person1Wrapper2,
  Person1Img,
  Text1Wrapper,
  Text1Wrapper2,
  Person2Text2Wrapper,
  Person2Wrapper,
  Person2Wrapper2,
  Person2Img,
  Text2Wrapper,
  Text2Wrapper2,
  Person3Text3Container,
  Person3Wrapper,
  Person3Wrapper2,
  Person3Img,
  Text3Wrapper,
  Text3Wrapper2,
  AboutSection3Text,
} from "./AboutSection3Elements";
import {
  SectionHeaderTextContainer,
  SectionHeaderTextWrapper,
  SectionHeaderText,
  SectionSubheaderWrapper,
  SectionSubheaderText,
} from "../../../Components/Text/HeaderSubheaderSectionText";
import { AboutPageText } from "../../../Helpers/AboutPageData";
import MyPerson1 from "../../../Assets/Svg/Person1.svg";
import MyPerson2 from "../../../Assets/Svg/Person2.svg";
import MyPerson3 from "../../../Assets/Svg/Person3.svg";

const AboutSection3 = () => {
  return (
    <>
      <AboutSection3Container>
        <AboutSection3HeaderContainer>
          <SectionHeaderTextContainer>
            <SectionHeaderTextWrapper>
              <SectionHeaderText>{AboutPageText.text16}</SectionHeaderText>
            </SectionHeaderTextWrapper>
            <SectionSubheaderWrapper>
              <SectionSubheaderText>
                {AboutPageText.text17}
              </SectionSubheaderText>
            </SectionSubheaderWrapper>
          </SectionHeaderTextContainer>
        </AboutSection3HeaderContainer>
        <AboutSection3ContentContainer>
          <Pearson1Text1Person2Text2Container>
            <Person1Text1Wrapper>
              <Text1Wrapper>
                <Text1Wrapper2>
                  <AboutSection3Text>{AboutPageText.text18}</AboutSection3Text>
                </Text1Wrapper2>
              </Text1Wrapper>
              <Person1Wrapper>
                <Person1Wrapper2>
                  <Person1Img alt={AboutPageText.text21} src={MyPerson1} />
                </Person1Wrapper2>
              </Person1Wrapper>
            </Person1Text1Wrapper>

            <Person2Text2Wrapper>
              <Person2Wrapper>
                <Person2Wrapper2>
                  <Person2Img alt={AboutPageText.text22} src={MyPerson2} />
                </Person2Wrapper2>
              </Person2Wrapper>
              <Text2Wrapper>
                <Text2Wrapper2>
                  <AboutSection3Text>{AboutPageText.text19}</AboutSection3Text>
                </Text2Wrapper2>
              </Text2Wrapper>
            </Person2Text2Wrapper>
          </Pearson1Text1Person2Text2Container>

          <Person3Text3Container>
            <Text3Wrapper>
              <Text3Wrapper2>
                <AboutSection3Text>{AboutPageText.text20}</AboutSection3Text>
              </Text3Wrapper2>
            </Text3Wrapper>
            <Person3Wrapper>
              <Person3Wrapper2>
                <Person3Img alt={AboutPageText.text23} src={MyPerson3} />
              </Person3Wrapper2>
            </Person3Wrapper>
          </Person3Text3Container>
        </AboutSection3ContentContainer>
      </AboutSection3Container>
    </>
  );
};

export default AboutSection3;
