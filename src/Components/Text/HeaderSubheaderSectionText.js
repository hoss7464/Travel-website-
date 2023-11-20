import styled from "styled-components";
import { ColorPalette } from "../../Core-Ui/Colors/Colors";

export const SectionHeaderTextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media only screen and (min-width: 280px) and (max-width: 576px) {
    width: 100%;
    margin-bottom: 2rem;
  }

  @media only screen and (min-width: 577px) and (max-width: 768px) {
    width: 29.69rem;
    margin-bottom: 2rem;
  }

  @media only screen and (min-width: 769px) and (max-width: 992px) {
    width: 29.69rem;
    margin-bottom: 2rem;
  }

  @media only screen and (min-width: 993px) and (max-width: 1024px) {
    width: 29.69rem;
    margin-bottom: 2rem;
  }

  @media only screen and (min-width: 1025px) and (max-width: 1280px) {
    width: 29.69rem;
    margin-bottom: 2rem;
  }

  @media only screen and (min-width: 1281px) and (max-width: 1440px) {
    width: 29.69rem;
    margin-bottom: 2rem;
  }

  @media only screen and (min-width: 1441px) and (max-width: 1920px) {
    width: 52.38rem;
    margin-bottom: 2rem;
  }

  @media only screen and (min-width: 1921px) {
    width: 52.38rem;
    margin-bottom: 2rem;
  }
`;

export const SectionHeaderTextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  border-bottom: solid 2px ${ColorPalette.darkPrimaryColor};
  margin-bottom: 0.5rem;
`;

export const SectionHeaderText = styled.h1`
  color: ${ColorPalette.darkFontColor};
  font-weight: 900;
  text-align: center;

  @media only screen and (min-width: 280px) and (max-width: 576px) {
    font-size: 16px;
  }

  @media only screen and (min-width: 577px) and (max-width: 768px) {
    font-size: 24px;
  }

  @media only screen and (min-width: 769px) and (max-width: 992px) {
    font-size: 24px;
  }

  @media only screen and (min-width: 993px) and (max-width: 1024px) {
    font-size: 24px;
  }

  @media only screen and (min-width: 1025px) and (max-width: 1280px) {
    font-size: 24px;
  }

  @media only screen and (min-width: 1281px) and (max-width: 1440px) {
    font-size: 24px;
  }

  @media only screen and (min-width: 1441px) and (max-width: 1920px) {
    font-size: 32px;
  }

  @media only screen and (min-width: 1921px) {
    font-size: 32px;
  }
`;

export const SectionSubheaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const SectionSubheaderText = styled.p`
  color: ${ColorPalette.darkFontColor};
  font-weight: 400;
  text-align: center;

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
    font-size:24px;
  }

  @media only screen and (min-width: 1921px) {
    font-size: 24px;
  }
`;
