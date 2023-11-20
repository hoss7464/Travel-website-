import React from "react";
import {
  AboutSection2Container,
  AboutSection2HeaderContainer,
  AboutSection2ContentContainer,
  AboutSection2ImgWrapper,
  AboutSection2ImgWrapper2,
  AboutSection2Img,
  AboutSection2ContentWrapper,
  AboutSection2HeaderWrapper,
  AboutSection2Header,
  AboutSection2TextWrapper,
  AboutSection2Text,
} from "./AboutSection2Elements";
import {
  SectionHeaderTextContainer,
  SectionHeaderTextWrapper,
  SectionHeaderText,
  SectionSubheaderWrapper,
  SectionSubheaderText,
} from "../../../Components/Text/HeaderSubheaderSectionText";
import { AboutPageText } from "../../../Helpers/AboutPageData";
import AboutSec2Img from "../../../Assets/Png/AboutSec2Img.png";
import {
  FormBtnInoutContainer,
  FormBtn,
} from "../../../Components/Buttons/ServicesPage/ServicesBtnElements";

const AboutSection2 = () => {
  return (
    <>
      <AboutSection2Container>
        <AboutSection2HeaderContainer>
          <SectionHeaderTextContainer>
            <SectionHeaderTextWrapper>
              <SectionHeaderText>{AboutPageText.text10}</SectionHeaderText>
            </SectionHeaderTextWrapper>
            <SectionSubheaderWrapper>
              <SectionSubheaderText>
                {AboutPageText.text11}
              </SectionSubheaderText>
            </SectionSubheaderWrapper>
          </SectionHeaderTextContainer>
        </AboutSection2HeaderContainer>
        <AboutSection2ContentContainer>
          <AboutSection2ImgWrapper>
            <AboutSection2ImgWrapper2>
              <AboutSection2Img alt={AboutPageText.text11} src={AboutSec2Img} />
            </AboutSection2ImgWrapper2>
          </AboutSection2ImgWrapper>
          <AboutSection2ContentWrapper>
            <AboutSection2HeaderWrapper>
              <AboutSection2Header>{AboutPageText.text13}</AboutSection2Header>
            </AboutSection2HeaderWrapper>
            <AboutSection2TextWrapper>
              <AboutSection2Text>{AboutPageText.text14}</AboutSection2Text>
            </AboutSection2TextWrapper>
            <AboutSection2TextWrapper>
              <AboutSection2Text>{AboutPageText.text15}</AboutSection2Text>
            </AboutSection2TextWrapper>
            <FormBtnInoutContainer>
              <FormBtn type="submit">Search</FormBtn>
            </FormBtnInoutContainer>
          </AboutSection2ContentWrapper>
        </AboutSection2ContentContainer>
      </AboutSection2Container>
    </>
  );
};

export default AboutSection2;
