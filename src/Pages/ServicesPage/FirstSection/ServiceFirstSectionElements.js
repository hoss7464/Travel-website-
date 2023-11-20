import styled from "styled-components";
import { ColorPalette } from "../../../Core-Ui/Colors/Colors";

export const ServiceFirstSecContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  @media only screen and (min-width: 280px) and (max-width: 576px) {
    justify-content: flex-start;
    padding: 0 24px 0 24px;
    height: 31rem;
  }

  @media only screen and (min-width: 577px) and (max-width: 768px) {
    padding: 0 40px 0 40px;
    height: 39rem;
  }

  @media only screen and (min-width: 769px) and (max-width: 992px) {
    justify-content: flex-end;
    padding: 0 56px 0 56px;
    height: 32rem;
  }

  @media only screen and (min-width: 993px) and (max-width: 1024px) {
    justify-content: flex-end;
    padding: 0 72px 0 72px;
    height: 40rem;
  }

  @media only screen and (min-width: 1025px) and (max-width: 1280px) {
    justify-content: flex-end;
    padding: 0 88px 0 88px;
    height: 44rem;
  }

  @media only screen and (min-width: 1281px) and (max-width: 1440px) {
    justify-content: flex-end;
    padding: 0 104px 0 104px;
    height: 44rem;
  }

  @media only screen and (min-width: 1441px) and (max-width: 1920px) {
    justify-content: flex-end;
    padding: 0 168px 0 168px;
    height: 44rem;
  }

  @media only screen and (min-width: 1921px) {
    justify-content: flex-end;
    padding: 0 232px 0 232px;
    height: 58rem;
  }
`;

export const SerFirstSecContentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  @media only screen and (min-width: 280px) and (max-width: 576px) {
    width: 14.5rem;
  }

  @media only screen and (min-width: 577px) and (max-width: 768px) {
    width: 25.69rem;
  }

  @media only screen and (min-width: 769px) and (max-width: 992px) {
    width: 17.56rem;
  }

  @media only screen and (min-width: 993px) and (max-width: 1280px) {
    width: 25.88rem;
  }

  @media only screen and (min-width: 1281px) and (max-width: 1440px) {
    width: 27.19rem;
  }

  @media only screen and (min-width: 1441px) and (max-width: 1920px) {
    width: 28.6rem;
  }

  @media only screen and (min-width: 1921px) {
    width: 44.88rem;
  }
`;
export const SerFirstSecContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const SerFirstSecHeaderWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`;

export const SerFirstSecHeader = styled.h1`
  color: ${ColorPalette.darkFontColor};
  font-weight: 900;
  text-align: left;
  text-transform: uppercase;

  @media only screen and (min-width: 280px) and (max-width: 576px) {
    font-size: 16px;
  }

  @media only screen and (min-width: 577px) and (max-width: 768px) {
    font-size: 32px;
  }

  @media only screen and (min-width: 769px) and (max-width: 992px) {
    font-size: 24px;
  }

  @media only screen and (min-width: 993px) and (max-width: 1280px) {
    font-size: 32px;
  }

  @media only screen and (min-width: 1281px) and (max-width: 1920px) {
    font-size: 40px;
  }

  @media only screen and (min-width: 1921px) {
    font-size: 64px;
  }
`;

export const SerFirstSecHeaderSpan = styled.span`
  color: ${ColorPalette.darkPrimaryColor};
`;

export const SerFirstSecSubheaderWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  margin-top: 1rem;
  margin-bottom: 2.5rem;
`;

export const SerFirstSecSubheader = styled.h3`
  color: ${ColorPalette.darkFontColor};
  font-weight: 400;
  text-align: left;

  @media only screen and (min-width: 280px) and (max-width: 576px) {
    font-size: 12px;
  }

  @media only screen and (min-width: 577px) and (max-width: 768px) {
    font-size: 16px;
  }

  @media only screen and (min-width: 769px) and (max-width: 992px) {
    font-size: 12px;
  }

  @media only screen and (min-width: 993px) and (max-width: 1280px) {
    font-size: 16px;
  }

  @media only screen and (min-width: 1281px) and (max-width: 1920px) {
    font-size: 24px;
  }

  @media only screen and (min-width: 1921px) {
    font-size: 32px;
  }
`;
export const SerFirstSecTextBoxWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`;

export const SerFirstSecTextBoxWrapper2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media only screen and (min-width: 280px) and (max-width: 576px) {
    margin-right: 1.5rem;
  }

  @media only screen and (min-width: 577px) and (max-width: 992px) {
    margin-right: 2rem;
  }

  @media only screen and (min-width: 993px) {
    margin-right: 3rem;
  }
`;

export const SerFirstSecTextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
`;
export const SerFirstSecText = styled.p`
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
    font-size: 12px;
  }

  @media only screen and (min-width: 993px) and (max-width: 1280px) {
    font-size: 16px;
  }

  @media only screen and (min-width: 1281px) and (max-width: 1920px) {
    font-size: 24px;
  }

  @media only screen and (min-width: 1921px) {
    font-size: 32px;
  }
`;
export const SerFirstSecBoxWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SerFirstSecBoxWrapper2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${ColorPalette.darkPrimaryColor};
  padding: 0.5rem;
  @media only screen and (min-width: 280px) and (max-width: 576px) {
    border-radius: 4px;
  }

  @media only screen and (min-width: 577px) {
    border-radius: 8px;
  }
`;
export const SerFirstSecBoxContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const SerFirstSecBoxContent = styled.h1`
  color: ${ColorPalette.darkFontColor};
  font-weight: 900;

  @media only screen and (min-width: 280px) and (max-width: 576px) {
    font-size: 12px;
  }

  @media only screen and (min-width: 577px) and (max-width: 768px) {
    font-size: 16px;
  }

  @media only screen and (min-width: 769px) and (max-width: 992px) {
    font-size: 12px;
  }

  @media only screen and (min-width: 993px) and (max-width: 1280px) {
    font-size: 16px;
  }

  @media only screen and (min-width: 1281px) and (max-width: 1920px) {
    font-size: 24px;
  }

  @media only screen and (min-width: 1921px) {
    font-size: 32px;
  }
`;
