import styled from "styled-components";
import { ColorPalette } from "../../../Core-Ui/Colors/Colors";

export const AboutSection1Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media only screen and (min-width: 280px) and (max-width: 576px) {
    padding: 0 24px 0 24px;
    height: 33.38rem;
  }

  @media only screen and (min-width: 577px) and (max-width: 768px) {
    padding: 0 40px 0 40px;
    height: 36.06rem;
  }

  @media only screen and (min-width: 769px) and (max-width: 992px) {
    padding: 0 56px 0 56px;
    height: 34.63rem;
  }

  @media only screen and (min-width: 993px) and (max-width: 1024px) {
    padding: 0 72px 0 72px;
    height: 39.44rem;
  }

  @media only screen and (min-width: 1025px) and (max-width: 1280px) {
    padding: 0 88px 0 88px;
    height: 39.44rem;
  }

  @media only screen and (min-width: 1281px) and (max-width: 1440px) {
    padding: 0 104px 0 104px;
    height: 47.06rem;
  }

  @media only screen and (min-width: 1441px) and (max-width: 1920px) {
    padding: 0 168px 0 168px;
    height: 50.25rem;
  }

  @media only screen and (min-width: 1921px) {
    padding: 0 232px 0 232px;
    height: 57.06rem;
  }
`;

export const AboutSection1ActiveArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const AboutSection1ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 100%;

  @media only screen and (min-width: 280px) and (max-width: 576px) {
    width: 100%;
  }

  @media only screen and (min-width: 577px) and (max-width: 768px) {
    width: 100%;
    position: relative;
  }

  @media only screen and (min-width: 769px) and (max-width: 992px) {
    width: 22.25rem;
  }

  @media only screen and (min-width: 993px) and (max-width: 1280px) {
    width: 25.94rem;
  }

  @media only screen and (min-width: 1025px) and (max-width: 1280px) {
    width: 25.94rem;
  }

  @media only screen and (min-width: 1281px) and (max-width: 1440px) {
    width: 32.94rem;
  }

  @media only screen and (min-width: 1441px) and (max-width: 1920px) {
    width: 33.94rem;
  }

  @media only screen and (min-width: 1921px) {
    width: 44.94rem;
  }
`;

export const AboutSection1ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;

  @media only screen and (min-width: 280px) and (max-width: 576px) {
    margin-bottom: 0;
  }

  @media only screen and (min-width: 577px) and (max-width: 1280px) {
    margin-bottom: 1.5rem;
  }

  @media only screen and (min-width: 1281px) {
    margin-bottom: 2rem;
  }
`;

export const AboutSection1HeaderWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;

  @media only screen and (min-width: 280px) and (max-width: 576px) {
    margin-bottom: 1rem;
  }

  @media only screen and (min-width: 577px) and (max-width: 768px) {
    margin-bottom: 1.5rem;
  }

  @media only screen and (min-width: 769px) and (max-width: 992px) {
    margin-bottom: 1rem;
  }

  @media only screen and (min-width: 993px) {
    margin-bottom: 2rem;
  }
`;

export const AboutSection1Header = styled.h1`
  color: ${ColorPalette.darkFontColor};
  font-weight: 900;
  text-align: left;
  text-transform: uppercase;

  @media only screen and (min-width: 280px) and (max-width: 576px) {
    font-size: 24px;
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
    font-size: 56px;
  }
`;

export const AboutSection1HeaderSpan = styled.span`
  color: ${ColorPalette.darkPrimaryColor};
`;

export const AboutSection1SubheaderWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 1rem;

  @media only screen and (min-width: 280px) and (max-width: 576px) {
    width: 14.5rem;
  }

  @media only screen and (min-width: 577px) and (max-width: 768px) {
    width: 25.94rem;
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

  @media only screen and (min-width: 1921px) {
    width: 45.13rem;
  }
`;
export const AboutSection1Subheader = styled.p`
  color: ${ColorPalette.darkFontColor};
  font-weight: 500;

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

  @media only screen and (min-width: 1281px) {
    font-size: 24px;
  }
`;

export const AboutSection1Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
`;

export const AboutSection1InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AboutSection1Input = styled.input`
  border: solid 2px ${ColorPalette.darkPrimaryColor};
  background-color: ${ColorPalette.lightPrimaryColor};
  padding-left: 0.5rem;

  &::placeholder {
    color: ${ColorPalette.darkFontColor};
    opacity: 0.5;
  }

  @media only screen and (min-width: 280px) and (max-width: 576px) {
    border-radius: 4px;
    width: 10.63rem;
    height: 2rem;
    &::placeholder {
      font-size: 12px;
    }
  }

  @media only screen and (min-width: 577px) and (max-width: 768px) {
    border-radius: 4px;
    width: 9.5rem;
    height: 2rem;
    &::placeholder {
      font-size: 12px;
    }
  }

  @media only screen and (min-width: 769px) and (max-width: 992px) {
    border-radius: 4px;
    width: 10.63rem;
    height: 2rem;
    &::placeholder {
      font-size: 12px;
    }
  }

  @media only screen and (min-width: 993px) and (max-width: 1280px) {
    border-radius: 8px;
    width: 12.31rem;
    height: 3rem;
    &::placeholder {
      font-size: 16px;
    }
  }

  @media only screen and (min-width: 1281px) and (max-width: 1440px) {
    border-radius: 8px;
    width: 15.81rem;
    height: 3rem;
    &::placeholder {
      font-size: 16px;
    }
  }

  @media only screen and (min-width: 1441px) and (max-width: 1920px) {
    border-radius: 8px;
    width: 16.25rem;
    height: 3rem;
    &::placeholder {
      font-size: 16px;
    }
  }

  @media only screen and (min-width: 1921px) {
    border-radius: 8px;
    width: 21.81rem;
    height: 3rem;

    &::placeholder {
      font-size: 16px;
    }
  }
`;

export const AboutSection1ImgContainer = styled.div`
  justify-content: flex-end;
  align-items: flex-end;
  height: 100%;

  @media only screen and (min-width: 280px) and (max-width: 768px) {
    display: none;
  }

  @media only screen and (min-width: 769px) and (max-width: 992px) {
    display: flex;
    width: calc(100% - 22.25rem);
  }

  @media only screen and (min-width: 993px) and (max-width: 1280px) {
    display: flex;
    width: calc(100% - 25.94rem);
  }

  @media only screen and (min-width: 1281px) and (max-width: 1440px) {
    display: flex;
    width: calc(100% - 32.94rem);
  }

  @media only screen and (min-width: 1441px) and (max-width: 1920px) {
    display: flex;
    width: calc(100% - 33.94rem);
  }

  @media only screen and (min-width: 1921px) {
    display: flex;
    width: calc(100% - 44.94rem);
  }
`;

export const AboutSection1ImgWrapper = styled.div`
  justify-content: center;
  align-items: center;

  @media only screen and (min-width: 280px) and (max-width: 576px) {
    display: none;
  }

  @media only screen and (min-width: 577px) and (max-width: 768px) {
    display: flex;
    position: absolute;
    right: 0;
    bottom: 0;
  }

  @media only screen and (min-width: 769px) {
    display: flex;
  }
`;

export const AboutSection1Img = styled.img`
  @media only screen and (min-width: 280px) and (max-width: 576px) {
    width: 20.31rem;
    height: 13.88rem;
  }

  @media only screen and (min-width: 577px) and (max-width: 768px) {
    width: 20.31rem;
    height: 13.88rem;
  }

  @media only screen and (min-width: 769px) and (max-width: 992px) {
    width: 17.56rem;
    height: 20.88rem;
  }

  @media only screen and (min-width: 993px) and (max-width: 1280px) {
    width: 25.88rem;
    height: 21.06rem;
  }

  @media only screen and (min-width: 1281px) and (max-width: 1440px) {
    width: 26.5rem;
    height: 32.06rem;
  }

  @media only screen and (min-width: 1441px) and (max-width: 1920px) {
    width: 33.88rem;
    height: 32.06;
  }

  @media only screen and (min-width: 1921px) {
    width: 44.88rem;
    height: 31.5rem;
  }
`;
