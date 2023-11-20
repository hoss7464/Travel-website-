import React from "react";
import { Grid } from "@mui/material";
import {
  HeroCardWrapper,
  CardIconHeaderContainer,
  CardIconWrapper,
  CardIcon,
  CardHeaderContainer,
  CardHeader,
  CardInputContainer,
  CardInput,
  DropDownContainer,
  DropDown,
  DropDownTextContainer,
  DropDownText,
  DropDownIconContainer,
  DropDownIcon,
} from "./PhoneHeroCardSectionElements";
import MyDropDownIcon from "../../../Assets/Svg/DropDownIcon.svg"

const PhoneCard = ({
  HeroCardAlt,
  HeroCardSrc,
  HeroCardHeader,
  HeroCardPlaceholder,
  LeftDropDownText,
  RightDropDownText,
}) => {
  return (
    <>
      <Grid item xs={12} sm={6} md={6} lg={6}>
        <HeroCardWrapper>
          <CardIconHeaderContainer>
            <CardIconWrapper>
              <CardIcon alt={HeroCardAlt} src={HeroCardSrc} />
            </CardIconWrapper>
            <CardHeaderContainer>
              <CardHeader>{HeroCardHeader}</CardHeader>
            </CardHeaderContainer>
          </CardIconHeaderContainer>
          <CardInputContainer>
            <CardInput placeholder={HeroCardPlaceholder} />
          </CardInputContainer>
          <DropDownContainer>
            <DropDown>
              <DropDownTextContainer>
                <DropDownText>{LeftDropDownText}</DropDownText>
              </DropDownTextContainer>
              <DropDownIconContainer>
                <DropDownIcon alt="Drop Down Icon" src={MyDropDownIcon} />
              </DropDownIconContainer>
            </DropDown>
            <DropDown>
              <DropDownTextContainer>
                <DropDownText>{RightDropDownText}</DropDownText>
              </DropDownTextContainer>
              <DropDownIconContainer>
                <DropDownIcon alt="Drop Down Icon" src={MyDropDownIcon} />
              </DropDownIconContainer>
            </DropDown>
          </DropDownContainer>
        </HeroCardWrapper>
      </Grid>
    </>
  );
};

export default PhoneCard;
