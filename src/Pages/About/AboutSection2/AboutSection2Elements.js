import styled from "styled-components";
import { ColorPalette } from "../../../Core-Ui/Colors/Colors";

export const AboutSection2Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
`;

export const AboutSection2HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
export const AboutSection2ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;

  @media only screen and (min-width: 280px) and (max-width: 768px) {
    flex-direction: column;
  }

  @media only screen and (min-width: 769px) {
    flex-direction: row;
  }
`;

export const AboutSection2ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (min-width: 280px) and (max-width: 576px) {
    width: 100%;
  }

  @media only screen and (min-width: 577px) and (max-width: 768px) {
    width: 100%;
  }

  @media only screen and (min-width: 769px) and (max-width: 992px) {
    width: 22.25rem;
  }

  @media only screen and (min-width: 993px) and (max-width: 1280px) {
    width: 25.94rem;
  }

  @media only screen and (min-width: 1281px) and (max-width: 1440px) {
    width: 32.94rem;
  }

  @media only screen and (min-width: 1441px) and (max-width: 1920px) {
    width: 33.94rem;
  }

  @media only screen and (min-width: 1921px) and (max-width: 2560px) {
    width: 44.94rem;
  }
`;

export const AboutSection2ImgWrapper2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AboutSection2Img = styled.img`
  @media only screen and (min-width: 280px) and (max-width: 576px) {
    width: 100%;
    height: 25.56rem;
  }

  @media only screen and (min-width: 577px) and (max-width: 768px) {
    width: 31.06rem;
    height: 25.5rem;
  }

  @media only screen and (min-width: 769px) and (max-width: 992px) {
    width: 22.25rem;
    height: 19.63rem;
  }

  @media only screen and (min-width: 993px) and (max-width: 1280px) {
    width: 25.94rem;
    height: 24.19rem;
  }

  @media only screen and (min-width: 1281px) and (max-width: 1440px) {
    width: 32.94rem;
    height: 23.13rem;
  }

  @media only screen and (min-width: 1441px) and (max-width: 1920px) {
    width: 33.94rem;
    height: 35rem;
  }

  @media only screen and (min-width: 1921px) {
    width: 44.94rem;
    height: 32.44rem;
  }
`;
export const AboutSection2ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;

  @media only screen and (min-width: 280px) and (max-width: 768px) {
    width: 100%;
    padding-left: 0;
    margin-top: 1.5rem;
  }

  @media only screen and (min-width: 769px) and (max-width: 992px) {
    width: calc(100% - 22.25rem);
    padding-left: 20px;
  }

  @media only screen and (min-width: 993px) and (max-width: 1280px) {
    width: calc(100% - 25.94rem);
    padding-left: 20px;
  }

  @media only screen and (min-width: 1281px) and (max-width: 1440px) {
    width: calc(100% - 32.94rem);
    padding-left: 20px;
  }

  @media only screen and (min-width: 1441px) and (max-width: 1920px) {
    width: calc(100% - 33.94rem);
    padding-left: 20px;
  }

  @media only screen and (min-width: 1921px) {
    width: calc(100% - 44.94rem);
    padding-left: 20px;
  }
`;
export const AboutSection2HeaderWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  margin-bottom: 2rem;
`;
export const AboutSection2Header = styled.h3`
  color: ${ColorPalette.darkFontColor};
  font-weight: 900;
  text-align: left;

  @media only screen and (min-width: 280px) and (max-width: 576px) {
    font-size: 16px;
  }

  @media only screen and (min-width: 577px) and (max-width: 768px) {
    font-size: 24px;
  }

  @media only screen and (min-width: 769px) and (max-width: 992px) {
    font-size: 16px;
  }

  @media only screen and (min-width: 993px) and (max-width: 1440px) {
    font-size: 24px;
  }

  @media only screen and (min-width: 1441px) {
    font-size: 32px;
  }
`;
export const AboutSection2TextWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 2rem;

  @media only screen and (min-width: 280px) and (max-width: 576px) {
    width: 100%;
  }

  @media only screen and (min-width: 577px) and (max-width: 768px) {
    width: 31.06rem;
  }

  @media only screen and (min-width: 769px) and (max-width: 992px) {
    width: 17.56rem;
  }

  @media only screen and (min-width: 993px) and (max-width: 1280px) {
    width: 25.88rem;
  }

  @media only screen and (min-width: 1281px) and (max-width: 1440px) {
    width: 32.88rem;
  }

  @media only screen and (min-width: 1441px) and (max-width: 1920px) {
    width: 33.88rem;
  }

  @media only screen and (min-width: 1921px) {
    width: 44.88rem;
  }
`;
export const AboutSection2Text = styled.p`
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

  @media only screen and (min-width: 993px) and (max-width: 440px) {
    font-size: 16px;
  }

  @media only screen and (min-width: 1441px) {
    font-size: 24px;
  }
`;
