import styled from "styled-components";
import { ColorPalette } from "../../../Core-Ui/Colors/Colors";

export const Section2Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: 100%;

  @media only screen and (min-width: 280px) and (max-width: 576px) {
    padding-top: 0;
    padding-bottom: 1rem;
  }

  @media only screen and (min-width: 577px) and (max-width: 1280px) {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }

  @media only screen and (min-width: 1281px) {
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
  }
`;

export const Section2TextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
export const Section2BoxWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

export const Section2CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: ${ColorPalette.lightPrimaryColor};

  @media only screen and (min-width: 280px) and (max-width: 576px) {
    padding: 0.5rem;
    border-radius: 16px;
  }

  @media only screen and (min-width: 577px) and (max-width: 768px) {
    padding: 1rem 1.5rem;
    border-radius: 32px;
  }

  @media only screen and (min-width: 769px) and (max-width: 992px) {
    padding: 1rem;
    border-radius: 24px;
  }

  @media only screen and (min-width: 993px) and (max-width: 1280px) {
    padding: 1rem;
    border-radius: 32px;
  }

  @media only screen and (min-width: 1281px) {
    padding: 2rem 2.5rem;
    border-radius: 32px;
  }
`;

export const Section2CardWrapper = styled.div`
  display: flex;
  width: 100%;

  @media only screen and (min-width: 280px) and (max-width: 576px) {
    justify-content: center;
    align-items: center;
    flex-direction: ${({ LeftToRight }) =>
      LeftToRight ? "column" : "column-reverse"};
  }

  @media only screen and (min-width: 577px) and (max-width: 768px) {
    justify-content: center;
    align-items: center;
    flex-direction: ${({ LeftToRight }) =>
      LeftToRight ? "column" : "column-reverse"};
  }

  @media only screen and (min-width: 769px) {
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: row;
  }
`;

export const Section2ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (min-width: 280px) and (max-width: 576px) {
    width: 100%;
    height: 19.5rem;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
    margin-bottom: 1rem;
  }

  @media only screen and (min-width: 577px) and (max-width: 768px) {
    width: 100%;
    height: 19.5rem;
    border-top-left-radius: 24px;
    border-top-right-radius: 24px;
    border-bottom-left-radius: 64px;
    border-bottom-right-radius: 64px;
    margin-bottom: 2rem;
  }

  @media only screen and (min-width: 769px) and (max-width: 992px) {
    width: 21.25rem;
    height: 17.63rem;
    border-top-left-radius: ${({ LeftToRight }) =>
      LeftToRight ? "16px" : "48px"};
    border-top-right-radius: ${({ LeftToRight }) =>
      LeftToRight ? "48px" : "16px"};
    border-bottom-left-radius: ${({ LeftToRight }) =>
      LeftToRight ? "16px" : "48px"};
    border-bottom-right-radius: ${({ LeftToRight }) =>
      LeftToRight ? "48px" : "16px"};
  }

  @media only screen and (min-width: 993px) and (max-width: 1280px) {
    width: 24.81rem;
    height: 17.63rem;
    border-top-left-radius: ${({ LeftToRight }) =>
      LeftToRight ? "24px" : "64px"};
    border-top-right-radius: ${({ LeftToRight }) =>
      LeftToRight ? "64px" : "24px"};
    border-bottom-left-radius: ${({ LeftToRight }) =>
      LeftToRight ? "24px" : "64px"};
    border-bottom-right-radius: ${({ LeftToRight }) =>
      LeftToRight ? "64px" : "24px"};
  }

  @media only screen and (min-width: 1281px) {
    width: 30rem;
    height: 17.63rem;
    border-top-left-radius: ${({ LeftToRight }) =>
      LeftToRight ? "24px" : "80px"};
    border-top-right-radius: ${({ LeftToRight }) =>
      LeftToRight ? "80px" : "24px"};
    border-bottom-left-radius: ${({ LeftToRight }) =>
      LeftToRight ? "24px" : "80px"};
    border-bottom-right-radius: ${({ LeftToRight }) =>
      LeftToRight ? "80px" : "24px"};
  }
`;
export const Section2Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
//-------------------------------------------------------------
export const Section2InnerTextBtnContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;

  @media only screen and (min-width: 280px) and (max-width: 576px) {
    height: 15.75rem;
    width: 100%;
  }

  @media only screen and (min-width: 577px) and (max-width: 768px) {
    height: 14rem;
    width: 100%;
  }

  @media only screen and (min-width: 769px) {
    height: 17.63rem;
  }
`;

export const Section2InnerTextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
`;

export const Section2InnerTextHeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Section2InnerTextHeader = styled.h1`
  color: ${ColorPalette.darkFontColor};
  font-weight: 900;

  @media only screen and (min-width: 280px) and (max-width: 576px) {
    font-size: 16px;
  }

  @media only screen and (min-width: 577px) and (max-width: 768px) {
    font-size: 24px;
  }

  @media only screen and (min-width: 769px) and (max-width: 992px) {
    font-size: 16px;
  }

  @media only screen and (min-width: 993px) {
    font-size: 24px;
  }
`;
export const Section2InnerSubheaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  margin-bottom: 1rem;

  @media only screen and (min-width: 280px) and (max-width: 576px) {
    width: 13.5rem;
  }

  @media only screen and (min-width: 577px) and (max-width: 768px) {
    width: 18.81rem;
  }

  @media only screen and (min-width: 769px) and (max-width: 992px) {
    width: 16.56rem;
  }

  @media only screen and (min-width: 993px) and (max-width: 1024px) {
    width: 18.63rem;
  }

  @media only screen and (min-width: 1025px) {
    width: 19rem;
  }
`;
export const Section2InnerSubheader = styled.h3`
  color: ${ColorPalette.darkFontColor};
  font-weight: 500;

  @media only screen and (min-width: 280px) and (max-width: 576px) {
    font-size: 12px;
  }

  @media only screen and (min-width: 577px) {
    font-size: 16px;
  }
`;
export const Section2InnerParaContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (min-width: 280px) and (max-width: 576px) {
    width: 13.5rem;
  }

  @media only screen and (min-width: 577px) and (max-width: 768px) {
    width: 24.19rem;
  }

  @media only screen and (min-width: 769px) and (max-width: 992px) {
    width: 16.56rem;
  }

  @media only screen and (min-width: 993px) and (max-width: 1280px) {
    width: 24.94rem;
  }

  @media only screen and (min-width: 1281px) {
    width: 30.44rem;
  }
`;
export const Section2InnerPara = styled.p`
  color: ${ColorPalette.darkFontColor};
  font-weight: 300;

  @media only screen and (min-width: 280px) and (max-width: 1280px) {
    font-size: 12px;
  }

  @media only screen and (min-width: 1281px) {
    font-size: 16px;
  }

  @media only screen and (min-width: 1441px) and (max-width: 1920px) {
    font-size: 16px;
  }

  @media only screen and (min-width: 1921px) {
    font-size: 16px;
  }
`;
