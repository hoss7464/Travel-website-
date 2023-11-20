import styled from "styled-components";
import { ColorPalette } from "../../../Core-Ui/Colors/Colors";

export const PhoneHeroCardsContainer = styled.div`
  width: 100%;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;

  @media only screen and (min-width: 769px) {
    display: none;
  }
`;

export const PhoneHeroCardWrapper = styled.div`
  width: 100%;
`;
export const PhoneHeroCardBtnContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

//--------------------------------------------------------------------
export const HeroCardWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  border: solid 2px ${ColorPalette.darkPrimaryColor};
  height: 170px;
  border-radius: 8px;
  background-color: ${ColorPalette.backgroundColor};
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 16px;
  padding-bottom: 16px;
`;

export const CardIconHeaderContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  width: 100%;
`;

export const CardIconWrapper = styled.div`
  display: flex;
  margin-right: 0.5rem;
`;

export const CardIcon = styled.img`
  @media only screen and (min-width: 280px) and (max-width: 576px) {
    flex-direction: column;
  }

  @media only screen and (min-width: 577px) and (max-width: 768px) {
    flex-direction: column;
  }

  @media only screen and (min-width: 769px) and (max-width: 992px) {
    flex-direction: column;
  }

  @media only screen and (min-width: 993px) and (max-width: 1024px) {
    height: 48px;
    width: 48px;
  }

  @media only screen and (min-width: 1025px) and (max-width: 1280px) {
    height: 48px;
    width: 48px;
  }

  @media only screen and (min-width: 1281px) and (max-width: 1440px) {
    height: 48px;
    width: 48px;
  }

  @media only screen and (min-width: 1441px) and (max-width: 1920px) {
    height: 48px;
    width: 48px;
  }

  @media only screen and (min-width: 1921px) {
    height: 48px;
    width: 48px;
  }
`;
export const CardHeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const CardHeader = styled.h1`
  font-size: 16px;
  font-weight: 500;
  color: ${ColorPalette.darkFontColor};
`;
export const CardInputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 1rem;
`;
export const CardInput = styled.input`
  width: 100%;
  height: 1.5rem;
  background-color: ${ColorPalette.darkPrimaryColor};
  border: none;
  border-radius: 4px;
  &::placeholder {
    color: ${ColorPalette.backgroundColor};
    font-size: 12px;
    margin-left: 0.5rem;
  }
`;

export const DropDownContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: 100%;
  margin-top: 1rem;
`;

export const DropDown = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  background-color: ${ColorPalette.mediumSecondaryColor};
  border: solid 1px ${ColorPalette.darkSecondaryColor};
  border-radius: 16px;
  padding-left: 4px;
  padding-right: 4px;
  height: 1.5rem;
`;

export const DropDownTextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 0.5rem;
`;

export const DropDownText = styled.p`
  font-size: 12px;
  color: ${ColorPalette.darkFontColor};
`;

export const DropDownIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 17px;
  height: 17px;
`;

export const DropDownIcon = styled.img`
  width: 100%;
  height: 100%;
`;

export const CardButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  margin-top: 0.5rem;
`;

export const CardButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const CardButtonTextContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 0.5rem;
`;
export const CardButtonText = styled.p`
  font-size: 12px;
  color: ${ColorPalette.darkFontColor};
`;
export const CardPlusMinusContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;
export const CardPlusWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 0.5rem;
  cursor: pointer;
`;

export const CardMinusWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const CardPlusMinusIcon = styled.img`
  width: 16px;
  height: 16px;
`;
