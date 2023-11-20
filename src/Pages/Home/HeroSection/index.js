import React from "react";
import "./HeroSection.css";
import "../../../Components/Buttons/HomeBtn/HomeBtn.css";
import {
  HeroSectionContainer,
  HeroBgContainer,
  HeroBgLeftContainer,
  HeroBgRightContainer,
  HeroGreenCircle,
  HeroSectionActiveArea,
  HeroActiveAreaLeftContainer,
  HeroActiveAreaRightContainer,
  HeroPersonContainer,
  HeroPerson,
  HeroSocialMediaWrapper,
  HomeSocialMediaContainer,
  CopyRightContainer,
  CopyRightText,
  HeroActiveAreaLeftWrapper,
  HeroLeftSection1,
  HeroHeaderContainer,
  HeroHeader,
  HeroHeaderSpan,
  HeroSubHeaderContainer,
  HeroSubHeader,
  HeroleftSection2,
  HeroCardsContainer,
  HeroPrimaryBtnContainer,
} from "./HeroSectionElements";
import HeroPersonSvg from "../../../Assets/Svg/HeroPerson.svg";
import { SocialMediaData1 } from "../../../Helpers/HomePageData";
import SocialMediaCompo from "../HomeSocialMedia";
import {
  HeroBtnWrapper,
  HeroBtnContainer,
  HeroSecondaryBtn,
  IconContainer,
  HeroBtnIcon,
} from "../../../Components/Buttons/HomeBtn/HomeBtnElements";
import {
  HeroCardWrapper,
  CardIconHeaderContainer,
  CardIconWrapper,
  CardIcon,
  CardHeaderContainer,
  CardHeader,
  CardInputContainer,
  CardInput,
  CardButtonContainer,
} from "../../../Components/Cards/HomeCards/HomeCardsElements";
import PlaneIcon from "../../../Assets/Svg/PlaneIcon.svg";
import SearchIconSvg from "../../../Assets/Svg/SearchIcon.svg";
import HomeCards from "../../../Components/Cards/HomeCards";
import { HeroCardData, HeroCardData2 } from "../../../Helpers/HomePageData";
import MyFamilyIcon from "../../../Assets/Svg/FamilyIcon.svg";
import HomeCardBtns from "../../../Components/Cards/HomeCards/HomeCardBtns";
import { HomePageText } from "../../../Helpers/HomePageData";

const HeroSection = () => {

  return (
    <>
      <HeroSectionContainer>
        <HeroBgContainer>
          <HeroBgLeftContainer className="left-background" />
          <HeroBgRightContainer>
            <HeroGreenCircle />
          </HeroBgRightContainer>
        </HeroBgContainer>
        <HeroSectionActiveArea>
          <HeroActiveAreaLeftContainer>
            <HeroActiveAreaLeftWrapper>
              <HeroLeftSection1>
                <HeroHeaderContainer>
                  <HeroHeader>
                    {HomePageText.text1}{" "}
                    <HeroHeaderSpan>{HomePageText.text2}</HeroHeaderSpan>{" "}
                    {HomePageText.text3}
                  </HeroHeader>
                </HeroHeaderContainer>
                <HeroSubHeaderContainer>
                  <HeroSubHeader>
                    {HomePageText.text4}
                  </HeroSubHeader>
                </HeroSubHeaderContainer>
                
                <HeroBtnWrapper>
                  <HeroBtnContainer Secondary>
                    <HeroSecondaryBtn to="/">
                      <IconContainer>
                        <HeroBtnIcon alt="PlaneIcon" src={PlaneIcon} />
                      </IconContainer>
                      {HomePageText.text5}
                    </HeroSecondaryBtn>
                  </HeroBtnContainer>
                  <HeroBtnContainer className="primary-btn">
                    <HeroSecondaryBtn to="/">
                      <IconContainer>
                        <HeroBtnIcon alt="Search Icon" src={SearchIconSvg} />
                      </IconContainer>
                      {HomePageText.text6}
                    </HeroSecondaryBtn>
                  </HeroBtnContainer>
                </HeroBtnWrapper>
              </HeroLeftSection1>

              <HeroleftSection2>

                <HeroCardsContainer>
                  <HeroCardWrapper>
                    <CardIconHeaderContainer>
                      <CardIconWrapper>
                        <CardIcon alt="family icon" src={MyFamilyIcon} />
                      </CardIconWrapper>
                      <CardHeaderContainer>
                        <CardHeader>People</CardHeader>
                      </CardHeaderContainer>
                    </CardIconHeaderContainer>
                    <CardInputContainer>
                      <CardInput placeholder="1Male,1Female,1Child" />
                    </CardInputContainer>
                    <CardButtonContainer>
                      {HeroCardData2.map((Data3) => {
                        return (
                          <HomeCardBtns myCardBtnText={Data3.cardBtnText} />
                        );
                      })}
                    </CardButtonContainer>
                  </HeroCardWrapper>
                  {HeroCardData.map((Data2) => {
                    return (
                      <HomeCards
                        HeroCardAlt={Data2.alt}
                        HeroCardSrc={Data2.srcIcon}
                        HeroCardHeader={Data2.headerText}
                        HeroCardPlaceholder={Data2.placeHolderText}
                        LeftDropDownText={Data2.leftText}
                        RightDropDownText={Data2.rightText}
                      />
                    );
                  })}
                </HeroCardsContainer>

                <HeroPrimaryBtnContainer className="primary-btn2">
                  <HeroBtnContainer>
                    <HeroSecondaryBtn to="/">
                      <IconContainer>
                        <HeroBtnIcon alt="SearchIcon" src={SearchIconSvg} />
                      </IconContainer>
                      {HomePageText.text6}
                    </HeroSecondaryBtn>
                  </HeroBtnContainer>
                </HeroPrimaryBtnContainer>
              </HeroleftSection2>
            </HeroActiveAreaLeftWrapper>

            <HeroSocialMediaWrapper className="social-media">
              <CopyRightContainer>
                <CopyRightText>&copy;{HomePageText.text8}</CopyRightText>
              </CopyRightContainer>
              <HomeSocialMediaContainer>
                {SocialMediaData1.map((data1) => {
                  return (
                    <SocialMediaCompo
                      myAlt={data1.alt}
                      mySrc={data1.src}
                      key={data1.id}
                    ></SocialMediaCompo>
                  );
                })}
              </HomeSocialMediaContainer>
            </HeroSocialMediaWrapper>
          </HeroActiveAreaLeftContainer>

          <HeroActiveAreaRightContainer>
            <HeroPersonContainer>
              <HeroPerson alt="my hero person" src={HeroPersonSvg} />
            </HeroPersonContainer>
            <HeroSocialMediaWrapper>
              <CopyRightContainer>
                <CopyRightText>&copy;{HomePageText.text8}</CopyRightText>
              </CopyRightContainer>
              <HomeSocialMediaContainer>
                {SocialMediaData1.map((data1) => {
                  return (
                    <SocialMediaCompo
                      myAlt={data1.alt}
                      mySrc={data1.src}
                      key={data1.id}
                    ></SocialMediaCompo>
                  );
                })}
              </HomeSocialMediaContainer>
            </HeroSocialMediaWrapper>
          </HeroActiveAreaRightContainer>
        </HeroSectionActiveArea>
      </HeroSectionContainer>
    </>
  );
};

export default HeroSection;
