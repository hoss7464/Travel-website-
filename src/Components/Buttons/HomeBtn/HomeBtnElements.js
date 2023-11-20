import styled from "styled-components";
import { Link } from "react-router-dom";
import { ColorPalette } from "../../../Core-Ui/Colors/Colors";

export const HeroBtnWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  width: 100%;
`;

export const HeroBtnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  border-radius: 8px;

  background: ${({ Secondary }) =>
    Secondary
      ? "linear-gradient(95deg, #edc2fa 0%, #f9ecfd 100%)"
      : `${ColorPalette.darkPrimaryColor}`};
`;

export const HeroSecondaryBtn = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: 100%;
  color: ${ColorPalette.darkFontColor};
  font-weight: 400;

  @media only screen and (min-width: 280px) and (max-width: 576px) {
    padding: 8px;
    font-size: 12px;
  }

  @media only screen and (min-width: 577px) and (max-width: 768px) {
    padding: 8px;
    font-size: 12px;
  }

  @media only screen and (min-width: 769px) and (max-width: 992px) {
    padding: 8px;
    font-size: 12px;
  }

  @media only screen and (min-width: 993px) and (max-width: 1024px) {
    padding: 8px;
    font-size: 16px;
  }

  @media only screen and (min-width: 1025px) and (max-width: 1280px) {
    padding: 16px 8px;
    font-size: 16px;
  }

  @media only screen and (min-width: 1281px) and (max-width: 1440px) {
    padding: 16px 8px;
    font-size: 16px;
  }

  @media only screen and (min-width: 1441px) and (max-width: 1920px) {
    padding: 16px 8px;
    font-size: 16px;
  }

  @media only screen and (min-width: 1921px) {
    padding: 16px 8px;
    font-size: 16px;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeroBtnIcon = styled.img`
  margin-right: 8px;

  @media only screen and (max-width: 768px) {
    width: 14px;
    height: 14px;
  }

  @media only screen and (min-width: 769px) and (max-width: 992px) {
    width: 14px;
    height: 14px;
  }

  @media only screen and (min-width: 993px) and (max-width: 1024px) {
    width: 17px;
    height: 17px;
  }

  @media only screen and (min-width: 1025px) and (max-width: 1280px) {
    width: 20px;
    height: 20px;
  }

  @media only screen and (min-width: 1281px) and (max-width: 1440px) {
    width: 22px;
    height: 22px;
  }

  @media only screen and (min-width: 1441px) and (max-width: 1920px) {
    width: 22px;
    height: 22px;
  }

  @media only screen and (min-width: 1921px) {
    width: 22px;
    height: 22px;
  }
`;

export const Section3CardBtnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background-color: ${ColorPalette.mediumSecondaryColor};
`;

export const Section3CardBtn = styled(Link)`
  color: ${ColorPalette.darkFontColor};
  padding: 8px 16px;
  font-weight: 400;
  @media only screen and (min-width: 280px) and (max-width: 576px) {
    font-size: 12px;
  }

  @media only screen and (min-width: 577px) and (max-width: 768px) {
    font-size: 16px;
  }

  @media only screen and (min-width: 769px) and (max-width: 992px) {
    font-size: 16px;
  }

  @media only screen and (min-width: 993px) and (max-width: 1024px) {
    font-size: 16px;
  }

  @media only screen and (min-width: 1025px) and (max-width: 1280px) {
    font-size: 16px;
  }

  @media only screen and (min-width: 1281px) and (max-width: 1440px) {
    font-size: 16px;
  }

  @media only screen and (min-width: 1441px) and (max-width: 1920px) {
    font-size: 16px;
  }

  @media only screen and (min-width: 1921px) {
    font-size: 16px;
  }
`;

export const Section4BtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background-color: ${({ secondary }) =>
    secondary
      ? `${ColorPalette.mediumSecondaryColor}`
      : `${ColorPalette.darkPrimaryColor}`};
`;
export const Section4btn = styled(Link)`
  color: ${ColorPalette.darkFontColor};
  font-weight: 400;
  width: 100%;
  height: 100%;

  @media only screen and (min-width: 280px) and (max-width: 576px) {
    font-size: 12px;
    padding: 8px 16px;
  }

  @media only screen and (min-width: 577px) and (max-width: 768px) {
    font-size: 12px;
    padding: 8px 16px;
  }

  @media only screen and (min-width: 769px) and (max-width: 992px) {
    font-size: 16px;
    padding: 8px 24px;
  }

  @media only screen and (min-width: 993px) and (max-width: 1024px) {
    font-size: 16px;
    padding: 16px 32px;
  }

  @media only screen and (min-width: 1025px) and (max-width: 1280px) {
    font-size: 16px;
    padding: 16px 32px;
  }

  @media only screen and (min-width: 1281px) and (max-width: 1440px) {
    font-size: 16px;
    padding: 16px 40px;
  }

  @media only screen and (min-width: 1441px) and (max-width: 1920px) {
    font-size: 16px;
    padding: 16px 40px;
  }

  @media only screen and (min-width: 1921px) {
    font-size: 16px;
    padding: 16px 40px;
  }
`;

export const Section5BtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background-color: ${ColorPalette.mediumSecondaryColor};
`;

export const Section5btn = styled(Link)`
  color: ${ColorPalette.darkFontColor};
  font-weight: 400;
  width: 100%;
  height: 100%;
  font-size: 12px;
  padding: 4px 8px;
`;
