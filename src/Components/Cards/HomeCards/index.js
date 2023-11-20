import React from "react";
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
} from "./HomeCardsElements";
import MyDropDownIcon from "../../../Assets/Svg/DropDownIcon.svg"

const HomeCards = ({
  HeroCardAlt,
  HeroCardSrc,
  HeroCardHeader,
  HeroCardPlaceholder,
  LeftDropDownText,
  RightDropDownText
}) => {
  return (
    <>
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
    </>
  );
};

export default HomeCards;
