import React from "react";
import "./AboutSection1.css";
import {
  AboutSection1Container,
  AboutSection1ActiveArea,
  AboutSection1ContentContainer,
  AboutSection1ContentWrapper,
  AboutSection1HeaderWrapper,
  AboutSection1Header,
  AboutSection1HeaderSpan,
  AboutSection1SubheaderWrapper,
  AboutSection1Subheader,
  AboutSection1Form,
  AboutSection1InputWrapper,
  AboutSection1Input,
  AboutSection1ImgContainer,
  AboutSection1ImgWrapper,
  AboutSection1Img,
} from "./AboutSection1Elements";
import {
  ContactInfoHeaderIconTextWrapper,
  ContactInfoHeaderIconWrapper,
  ContactInfoIconWrapper,
  ContactInfoIcon1,
  ContactInfoHeaderWrapper,
  ContactInfoHeader,
  ContactInfoTextWrapper,
  ContactInfoText,
} from "../../Contact/CoSection1/CoSection1Elements";
import {
  FormBtnInoutContainer,
  FormBtn,
} from "../../../Components/Buttons/ServicesPage/ServicesBtnElements";
import { AboutPageText } from "../../../Helpers/AboutPageData";
import MyEmailSvg from "../../../Assets/Svg/EmailSvg.svg";
import Sec1Img from "../../../Assets/Png/AboutSec1Img.png";

const AboutSection1 = () => {
  return (
    <>
      <AboutSection1Container className="about-section1-bg">
        <AboutSection1ActiveArea>
          <AboutSection1ContentContainer>
            <AboutSection1ContentWrapper>
              <AboutSection1HeaderWrapper>
                <AboutSection1Header>
                  <AboutSection1HeaderSpan>
                    {AboutPageText.text8}
                  </AboutSection1HeaderSpan>
                  {AboutPageText.text1}
                </AboutSection1Header>
              </AboutSection1HeaderWrapper>
              <AboutSection1SubheaderWrapper>
                <AboutSection1Subheader>
                  {AboutPageText.text2}
                </AboutSection1Subheader>
              </AboutSection1SubheaderWrapper>
              <AboutSection1Form>
                <ContactInfoHeaderIconTextWrapper className="email-box-margin">
                  <ContactInfoHeaderIconWrapper>
                    <ContactInfoIconWrapper>
                      <ContactInfoIcon1
                        alt={AboutPageText.text3}
                        src={MyEmailSvg}
                      />
                    </ContactInfoIconWrapper>
                    <ContactInfoHeaderWrapper>
                      <ContactInfoHeader>
                        {AboutPageText.text4}
                      </ContactInfoHeader>
                    </ContactInfoHeaderWrapper>
                  </ContactInfoHeaderIconWrapper>
                  <ContactInfoTextWrapper>
                    <ContactInfoText>{AboutPageText.text5}</ContactInfoText>
                  </ContactInfoTextWrapper>
                </ContactInfoHeaderIconTextWrapper>

                <ContactInfoHeaderIconTextWrapper className="email-box-margin">
                  <ContactInfoHeaderIconWrapper>
                    <ContactInfoHeaderWrapper>
                      <ContactInfoHeader>
                        {AboutPageText.text6}
                      </ContactInfoHeader>
                    </ContactInfoHeaderWrapper>
                  </ContactInfoHeaderIconWrapper>
                  <AboutSection1InputWrapper>
                    <AboutSection1Input placeholder={AboutPageText.text7} />
                  </AboutSection1InputWrapper>
                </ContactInfoHeaderIconTextWrapper>
                <FormBtnInoutContainer className="about-btn-margin">
                  <FormBtn type="submit">Submit</FormBtn>
                </FormBtnInoutContainer>
              </AboutSection1Form>
            </AboutSection1ContentWrapper>

            <AboutSection1ImgWrapper className="about-img">
              <AboutSection1Img alt={AboutPageText.text9} src={Sec1Img} />
            </AboutSection1ImgWrapper>
          </AboutSection1ContentContainer>
          <AboutSection1ImgContainer>
            <AboutSection1ImgWrapper>
              <AboutSection1Img alt={AboutPageText.text9} src={Sec1Img} />
            </AboutSection1ImgWrapper>
          </AboutSection1ImgContainer>
        </AboutSection1ActiveArea>
      </AboutSection1Container>
    </>
  );
};

export default AboutSection1;
