import React from "react";
import "./Section2.css";
import {
  Section2Container,
  Section2TextWrapper,
  Section2BoxWrapper,
  Section2CardContainer,
  Section2CardWrapper,
  Section2ImgContainer,
  Section2Img,
  Section2InnerTextBtnContainer,
  Section2InnerTextWrapper,
  Section2InnerTextHeaderContainer,
  Section2InnerTextHeader,
  Section2InnerSubheaderContainer,
  Section2InnerSubheader,
  Section2InnerParaContainer,
  Section2InnerPara,
} from "./Section2Elements";
import {
  SectionHeaderTextContainer,
  SectionHeaderTextWrapper,
  SectionHeaderText,
  SectionSubheaderWrapper,
  SectionSubheaderText,
} from "../../../Components/Text/HeaderSubheaderSectionText";
import {
  HeroBtnWrapper,
  HeroBtnContainer,
  HeroSecondaryBtn,
  IconContainer,
  HeroBtnIcon,
} from "../../../Components/Buttons/HomeBtn/HomeBtnElements";
import { HomePageText } from "../../../Helpers/HomePageData";
import MyLondon1Img from "../../../Assets/Png/3.jpg";
import MyLovelySwitzerlandImg from "../../../Assets/Png/4.jpg"
import MyBookIconSvg from "../../../Assets/Svg/BookIcon.svg";

const Section2 = () => {
  return (
    <>
      <Section2Container>
        <Section2TextWrapper>
          <SectionHeaderTextContainer>
            <SectionHeaderTextWrapper>
              <SectionHeaderText>{HomePageText.text9}</SectionHeaderText>
            </SectionHeaderTextWrapper>
            <SectionSubheaderWrapper>
              <SectionSubheaderText>{HomePageText.text10}</SectionSubheaderText>
            </SectionSubheaderWrapper>
          </SectionHeaderTextContainer>
        </Section2TextWrapper>

        <Section2BoxWrapper>
          <Section2CardContainer className="section2-card-margin">
            <Section2CardWrapper>
              <Section2InnerTextBtnContainer>
                <Section2InnerTextWrapper>
                  <Section2InnerTextHeaderContainer>
                    <Section2InnerTextHeader>{HomePageText.text11}</Section2InnerTextHeader>
                  </Section2InnerTextHeaderContainer>
                  <Section2InnerSubheaderContainer>
                    <Section2InnerSubheader>
                    {HomePageText.text12}
                    </Section2InnerSubheader>
                  </Section2InnerSubheaderContainer>
                  <Section2InnerParaContainer>
                    <Section2InnerPara>
                    {HomePageText.text13}
                    </Section2InnerPara>
                  </Section2InnerParaContainer>
                </Section2InnerTextWrapper>
                <HeroBtnContainer>
                  <HeroSecondaryBtn to="/">
                    <IconContainer>
                      <HeroBtnIcon alt="Book Icon" src={MyBookIconSvg} />
                    </IconContainer>
                    {HomePageText.text14}
                  </HeroSecondaryBtn>
                </HeroBtnContainer>
              </Section2InnerTextBtnContainer>
              <Section2ImgContainer>
                <Section2Img alt="London 1" src={MyLondon1Img} />
              </Section2ImgContainer>
            </Section2CardWrapper>
          </Section2CardContainer>

          <Section2CardContainer>
          <Section2CardWrapper LeftToRight>
          <Section2ImgContainer LeftToRight>
                <Section2Img alt="My lovely Switzerland" src={MyLovelySwitzerlandImg} />
              </Section2ImgContainer>
              <Section2InnerTextBtnContainer>
                <Section2InnerTextWrapper>
                  <Section2InnerTextHeaderContainer>
                    <Section2InnerTextHeader>{HomePageText.text15}</Section2InnerTextHeader>
                  </Section2InnerTextHeaderContainer>
                  <Section2InnerSubheaderContainer>
                    <Section2InnerSubheader>
                    {HomePageText.text16}
                    </Section2InnerSubheader>
                  </Section2InnerSubheaderContainer>
                  <Section2InnerParaContainer>
                    <Section2InnerPara>
                    {HomePageText.text17}
                    </Section2InnerPara>
                  </Section2InnerParaContainer>
                </Section2InnerTextWrapper>
                <HeroBtnContainer>
                  <HeroSecondaryBtn to="/">
                    <IconContainer>
                      <HeroBtnIcon alt="Book Icon" src={MyBookIconSvg} />
                    </IconContainer>
                    {HomePageText.text18}
                  </HeroSecondaryBtn>
                </HeroBtnContainer>
              </Section2InnerTextBtnContainer>
              
            </Section2CardWrapper>
          </Section2CardContainer>
        </Section2BoxWrapper>

      </Section2Container>
    </>
  );
};

export default Section2;
