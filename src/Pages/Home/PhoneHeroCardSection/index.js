import React from "react";
import "./PhoneHeroCards.css"
import PhoneCard from "./PhoneCard";
import { HeroCardData } from "../../../Helpers/HomePageData";
import { Grid } from "@mui/material";
import {
  PhoneHeroCardsContainer,
  PhoneHeroCardWrapper,
  PhoneHeroCardBtnContainer,
  HeroCardWrapper,
  CardIconHeaderContainer,
  CardIconWrapper,
  CardIcon,
  CardHeaderContainer,
  CardHeader,
  CardInputContainer,
  CardInput,
} from "./PhoneHeroCardSectionElements";
import {
  HeroBtnContainer,
  HeroSecondaryBtn,
  IconContainer,
  HeroBtnIcon,
} from "../../../Components/Buttons/HomeBtn/HomeBtnElements";
import MyFamilyIcon from "../../../Assets/Svg/FamilyIcon.svg";
import { CardButtonContainer } from "./PhoneHeroCardSectionElements";
import { HeroCardData2 } from "../../../Helpers/HomePageData";
import HomeCardBtns from "../../../Components/Cards/HomeCards/HomeCardBtns";
import SearchIconSvg from "../../../Assets/Svg/SearchIcon.svg";
import { HomePageText } from "../../../Helpers/HomePageData";

const PhoneHeroCardSection = () => {
  return (
    <>
      <PhoneHeroCardsContainer>
        <PhoneHeroCardWrapper>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={6} lg={6}>
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
                  <CardInput />
                </CardInputContainer>
                <CardButtonContainer>
                  {HeroCardData2.map((Data3) => {
                    return <HomeCardBtns myCardBtnText={Data3.cardBtnText} />;
                  })}
                </CardButtonContainer>
              </HeroCardWrapper>
            </Grid>

            {HeroCardData.map((Data2) => {
              return (
                <PhoneCard
                  HeroCardAlt={Data2.alt}
                  HeroCardSrc={Data2.srcIcon}
                  HeroCardHeader={Data2.headerText}
                  HeroCardPlaceholder={Data2.placeHolderText}
                  LeftDropDownText={Data2.leftText}
                  RightDropDownText={Data2.rightText}
                />
              );
            })}
          </Grid>
        </PhoneHeroCardWrapper>
        <PhoneHeroCardBtnContainer>
          <HeroBtnContainer className="margin-top" >
            <HeroSecondaryBtn to="/">
              <IconContainer>
                <HeroBtnIcon alt="Search Icon" src={SearchIconSvg} />
              </IconContainer>
              {HomePageText.text6}
            </HeroSecondaryBtn>
          </HeroBtnContainer>
        </PhoneHeroCardBtnContainer>
      </PhoneHeroCardsContainer>
    </>
  );
};

export default PhoneHeroCardSection;
