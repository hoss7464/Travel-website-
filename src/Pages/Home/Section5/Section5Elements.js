import styled from "styled-components";
import { ColorPalette } from "../../../Core-Ui/Colors/Colors";

export const Section5Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
`;

export const Section5TextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Section5CardContainer = styled.div`
  width: 100%;
`;
//---------------------------------------------------------------------
export const Section5CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${ColorPalette.lightSecondaryColor};

  @media only screen and (min-width: 280px) and (max-width: 768px) {
    flex-direction: column;
  }

  @media only screen and (min-width: 769px) {
    flex-direction: row;
  }
`;
export const Section5CardImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  @media only screen and (min-width: 280px) and (max-width: 768px) {
    width: 100%;
    height: 11.31rem;
  }

  @media only screen and (min-width: 769px) and (max-width: 992px) {
    height: 13rem;
    width: 40%;
  }

  @media only screen and (min-width: 993px) and (max-width: 1280px) {
    height: 14.19rem;
    width: 40%;
  }

  @media only screen and (min-width: 1281px) {
    height: 14.31rem;
    width: 40%;
  }
`;
export const Section5CardImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Section5CardPriceWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  position: absolute;
  padding: 4px;
  background-color: ${ColorPalette.backgroundColor};
  border-radius: 4px;

  @media only screen and (min-width: 280px) and (max-width: 768px) {
    top: 0.5rem;
    left: 1rem;
  }

  @media only screen and (min-width: 769px) and (max-width: 992px) {
    top: 0.5rem;
    left: 0.5rem;
  }

  @media only screen and (min-width: 993px) {
    top: 1rem;
    left: 1rem;
  }
`;
export const Section5CardPriceIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 0.5rem;
`;
export const Section5CardPriceIcon = styled.img`
  width: 15px;
  height: 15px;
`;
export const Section5CardPriceTextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Section5CardPriceText = styled.p`
  color: ${ColorPalette.darkFontColor};
  font-weight: 300;
  font-size: 12px;
`;
export const Section5CardContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;

  @media only screen and (min-width: 280px) and (max-width: 768px) {
    padding: 1rem;
    width: 100%;
  }

  @media only screen and (min-width: 769px) and (max-width: 1280px) {
    padding-top: 0.5rem;
    padding-bottom: 1rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    width: 60%;
  }

  @media only screen and (min-width: 1281px) {
    padding-top: 0.5rem;
    padding-bottom: 1rem;
    padding-left: 1rem;
    padding-right: 0.5rem;
    width: 60%;
  }
`;
export const Section5CardHeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 0.5rem;
`;
export const Section5CardHeader = styled.h1`
  color: ${ColorPalette.darkFontColor};
  font-weight: 500;
  text-align: left;

  @media only screen and (min-width: 280px) and (max-width: 768px) {
    font-size: 24px;
  }

  @media only screen and (min-width: 769px) and (max-width: 992px) {
    font-size: 16px;
  }

  @media only screen and (min-width: 993px) {
    font-size: 24px;
  }
`;
export const Section5CardSubheaderWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;

  @media only screen and (min-width: 280px) and (max-width: 768px) {
    margin-bottom: 1rem;
  }

  @media only screen and (min-width: 769px) {
    margin-bottom: 0.5rem;
  }
`;
export const Section5CardSubheader = styled.h3`
  color: ${ColorPalette.darkFontColor};
  font-weight: 400;
  text-align: left;

  @media only screen and (min-width: 280px) and (max-width: 768px) {
    font-size: 16px;
  }

  @media only screen and (min-width: 769px) and (max-width: 992px) {
    font-size: 12px;
  }

  @media only screen and (min-width: 993px) {
    font-size: 16px;
  }
`;
export const Section5CardTextWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  @media only screen and (min-width: 280px) and (max-width: 576px) {
    margin-bottom: 0.5rem;
  }

  @media only screen and (min-width: 577px) and (max-width: 768px) {
    margin-bottom: 1rem;
  }

  @media only screen and (min-width: 769px) and (max-width: 992px) {
    margin-bottom: 0.5rem;
  }

  @media only screen and (min-width: 993px) {
    margin-bottom: 1rem;
  }
`;
export const Section5CardText = styled.p`
  color: ${ColorPalette.darkFontColor};
  font-weight: 300;
  text-align: left;
  font-size: 12px;
`;
export const Section5CardStarsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (min-width: 280px) and (max-width: 768px) {
    margin-bottom: 1rem;
  }

  @media only screen and (min-width: 769px) and (max-width: 992px) {
    margin-bottom: 0.5rem;
  }

  @media only screen and (min-width: 993px) and (max-width: 1280px) {
    margin-bottom: 1rem;
  }

  @media only screen and (min-width: 1281px) {
    margin-bottom: 2rem;
  }
`;
export const Section5CardBtnTimeWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Section5CardBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Section5CardTimeWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;
export const Section5CardTimeIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 0.5rem;
`;
export const Section5CardTimeTextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
