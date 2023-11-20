import styled from "styled-components";
import { ColorPalette } from "../../../Core-Ui/Colors/Colors";

export const Section3Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
`;

export const Section3TextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (min-width: 280px) and (max-width: 576px) {
    margin-bottom: 1.5rem;
  }

  @media only screen and (min-width: 577px) {
    margin-bottom: 2rem;
  }
`;
//----------------------------------------------
export const Section3CardContainer = styled.div`
  width: 100%;
`;

export const Section3CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${ColorPalette.lightSecondaryColor};

  @media only screen and (min-width: 280px) and (max-width: 1280px) {
    padding: 16px 8px;
  }

  @media only screen and (min-width: 1281px) {
    padding: 16px 16px;
  }
`;
export const Section3CardIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
export const Section3CardIcon = styled.img`
  @media only screen and (min-width: 280px) and (max-width: 1280px) {
    width: 52px;
    height: 52px;
  }

  @media only screen and (min-width: 1281px) {
    width: 71px;
    height: 71px;
  }
`;

export const Section3CardHeadingParaWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 1rem;
  margin-bottom: 1rem;
  width: 100%;
`;
export const Section3CardHeadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 0.5rem;
`;
export const Section3CardHeading = styled.h1`
  color: ${ColorPalette.darkFontColor};
  font-weight: 400;
  font-size: 16px;
`;
export const Section3CardParaWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
export const Section3CardPara = styled.p`
  color: ${ColorPalette.darkFontColor};
  font-weight: 300;
  text-align: center;

  @media only screen and (min-width: 280px) and (max-width: 576px) {
    font-size: 12px;
  }

  @media only screen and (min-width: 577px) and (max-width: 992px) {
    font-size: 16px;
  }

  @media only screen and (min-width: 993px) {
    font-size: 12px;
  }
`;
export const Section3BtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
