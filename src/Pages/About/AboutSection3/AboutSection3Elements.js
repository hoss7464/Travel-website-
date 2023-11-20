import styled from "styled-components";
import { ColorPalette } from "../../../Core-Ui/Colors/Colors";

export const AboutSection3Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
`;

export const AboutSection3HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
export const AboutSection3ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  @media only screen and (min-width: 280px) and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }

  @media only screen and (min-width: 769px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;
export const Pearson1Text1Person2Text2Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (min-width: 280px) and (max-width: 576px) {
    flex-direction: column;
    width: 100%;
    margin-bottom: 2rem;
  }

  @media only screen and (min-width: 577px) and (max-width: 768px) {
    flex-direction: row;
    width: 100%;
    margin-bottom: 2rem;
  }

  @media only screen and (min-width: 769px) and (max-width: 992px) {
    flex-direction: row;
    width: 26.94rem;
  }

  @media only screen and (min-width: 993px) and (max-width: 1280px) {
    flex-direction: row;
    width: 39.5rem;
  }

  @media only screen and (min-width: 1281px) and (max-width: 1440px) {
    flex-direction: row;
    width: 50rem;
  }

  @media only screen and (min-width: 1441px) and (max-width: 1920px) {
    flex-direction: row;
    width: 51.5rem;
  }

  @media only screen and (min-width: 1921px) {
    flex-direction: row;
    width: 68rem;
  }
`;

export const Person3Text3Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media only screen and (min-width: 280px) and (max-width: 576px) {
    width: 100%;
  }

  @media only screen and (min-width: 577px) and (max-width: 768px) {
    width: 20.31rem;
  }

  @media only screen and (min-width: 769px) and (max-width: 992px) {
    width: calc(100% - 26.94rem);
    padding-left: 20px;
  }

  @media only screen and (min-width: 993px) and (max-width: 1280px) {
    width: calc(100% - 39.5rem);
    padding-left: 20px;
  }

  @media only screen and (min-width: 1281px) and (max-width: 1440px) {
    width: calc(100% - 50rem);
    padding-left: 20px;
  }

  @media only screen and (min-width: 1441px) and (max-width: 1920px) {
    width: calc(100% - 51.5rem);
    padding-left: 20px;
  }

  @media only screen and (min-width: 1921px) {
    width: calc(100% - 68rem);
    padding-left: 20px;
  }
`;

export const Person1Text1Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media only screen and (min-width: 280px) and (max-width: 576px) {
    width: 100%;
  }

  @media only screen and (min-width: 577px) and (max-width: 768px) {
    width: 14.94rem;
  }

  @media only screen and (min-width: 769px) and (max-width: 992px) {
    width: 12.88rem;
  }

  @media only screen and (min-width: 993px) and (max-width: 1280px) {
    width: 21.38rem;
  }

  @media only screen and (min-width: 1281px) and (max-width: 1440px) {
    width: 27.19rem;
  }

  @media only screen and (min-width: 1441px) and (max-width: 1920px) {
    width: 28.06rem;
  }

  @media only screen and (min-width: 1921px) {
    width: 37.19rem;
  }
`;
export const Person2Text2Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media only screen and (min-width: 280px) and (max-width: 576px) {
    width: 100%;
  }

  @media only screen and (min-width: 577px) and (max-width: 768px) {
    width: calc(100% - 14.94rem);
  }

  @media only screen and (min-width: 769px) and (max-width: 992px) {
    width: calc(100% - 12.88rem);
  }

  @media only screen and (min-width: 993px) and (max-width: 1280px) {
    width: calc(100% - 21.38rem);
  }

  @media only screen and (min-width: 1281px) and (max-width: 1440px) {
    width: calc(100% - 27.19rem);
  }

  @media only screen and (min-width: 1441px) and (max-width: 1920px) {
    width: calc(100% - 28.06rem);
  }

  @media only screen and (min-width: 1921px) {
    width: calc(100% - 37.19rem);
  }
`;

export const Person1Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`;
export const Person1Wrapper2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Person1Img = styled.img`
  @media only screen and (min-width: 280px) and (max-width: 576px) {
    width: 14.5rem;
    height: 10.31rem;
  }

  @media only screen and (min-width: 577px) and (max-width: 768px) {
    width: 14.94rem;
    height: 10.63rem;
  }

  @media only screen and (min-width: 769px) and (max-width: 992px) {
    width: 12.88rem;
    height: 9.19rem;
  }

  @media only screen and (min-width: 993px) and (max-width: 1280px) {
    width: 21.38rem;
    height: 15.25rem;
  }

  @media only screen and (min-width: 1281px) and (max-width: 1440px) {
    width: 23.19rem;
    height: 16.5rem;
  }

  @media only screen and (min-width: 1441px) and (max-width: 1920px) {
    width: 25.81rem;
    height: 18.38rem;
  }

  @media only screen and (min-width: 1921px) {
    width: 33rem;
    height: 23.5rem;
  }
`;

export const Text1Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 2rem;

  @media only screen and (min-width: 280px) and (max-width: 576px) {
    justify-content: flex-end;
  }

  @media only screen and (min-width: 577px) {
    justify-content: flex-start;
  }
`;

export const Text1Wrapper2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (min-width: 280px) and (max-width: 576px) {
    width: 14.5rem;
  }

  @media only screen and (min-width: 577px) and (max-width: 768px) {
    width: 14.94rem;
  }

  @media only screen and (min-width: 769px) and (max-width: 992px) {
    width: 12.88rem;
  }

  @media only screen and (min-width: 993px) and (max-width: 1280px) {
    width: 21.38rem;
  }

  @media only screen and (min-width: 1281px) and (max-width: 1440px) {
    width: 27.19rem;
  }

  @media only screen and (min-width: 1441px) and (max-width: 1920px) {
    width: 29.5rem;
  }

  @media only screen and (min-width: 1921px) {
    width: 29.5rem;
  }
`;

export const Person2Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  margin-bottom: 2rem;
`;

export const Person2Wrapper2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Person2Img = styled.img`
  @media only screen and (min-width: 280px) and (max-width: 576px) {
    width: 14.5rem;
    height: 10.5rem;
  }

  @media only screen and (min-width: 577px) and (max-width: 768px) {
    width: 13.69rem;
    height: 9.94rem;
  }

  @media only screen and (min-width: 769px) and (max-width: 992px) {
    width: 12.81rem;
    height: 9.31rem;
  }

  @media only screen and (min-width: 993px) and (max-width: 1280px) {
    width: 16.81rem;
    height: 12.19rem;
  }

  @media only screen and (min-width: 1281px) and (max-width: 1440px) {
    width: 19.56rem;
    height: 14.19rem;
  }

  @media only screen and (min-width: 1441px) and (max-width: 1920px) {
    width: 22.19rem;
    height: 16.13rem;
  }

  @media only screen and (min-width: 1921px) {
    width: 29.56rem;
    height: 21.44rem;
  }
`;

export const Text2Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`;

export const Text2Wrapper2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (min-width: 280px) and (max-width: 576px) {
    width: 14.5rem;
  }

  @media only screen and (min-width: 577px) and (max-width: 768px) {
    width: 14.88rem;
  }

  @media only screen and (min-width: 769px) and (max-width: 992px) {
    width: 12.81rem;
  }

  @media only screen and (min-width: 993px) and (max-width: 1280px) {
    width: 16.88rem;
  }

  @media only screen and (min-width: 1281px) and (max-width: 1440px) {
    width: 21.56rem;
  }

  @media only screen and (min-width: 1441px) and (max-width: 1920px) {
    width: 22.19rem;
  }

  @media only screen and (min-width: 1921px) {
    width: 29.56rem;
  }
`;

export const Person3Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
`;
export const Person3Wrapper2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Person3Img = styled.img`
  @media only screen and (min-width: 280px) and (max-width: 576px) {
    width: 14.5rem;
    height: 10.5rem;
  }

  @media only screen and (min-width: 577px) and (max-width: 768px) {
    width: 13.69rem;
    height: 9.94rem;
  }

  @media only screen and (min-width: 769px) and (max-width: 992px) {
    width: 10.38rem;
    height: 10.19rem;
  }

  @media only screen and (min-width: 993px) and (max-width: 1280px) {
    width: 12.25rem;
    height: 12.06rem;
  }

  @media only screen and (min-width: 1281px) and (max-width: 1440px) {
    width: 15.81rem;
    height: 15.56rem;
  }

  @media only screen and (min-width: 1441px) and (max-width: 1920px) {
    width: 16.31rem;
    height: 16.06rem;
  }

  @media only screen and (min-width: 1921px) {
    width: 21.81rem;
    height: 21.44rem;
  }
`;

export const Text3Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  margin-bottom: 2rem;
`;
export const Text3Wrapper2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (min-width: 280px) and (max-width: 576px) {
    width: 14.5rem;
  }

  @media only screen and (min-width: 577px) and (max-width: 768px) {
    width: 20.31rem;
  }

  @media only screen and (min-width: 769px) and (max-width: 992px) {
    width: 12.88rem;
  }

  @media only screen and (min-width: 993px) and (max-width: 1280px) {
    width: 12.31rem;
  }

  @media only screen and (min-width: 1281px) and (max-width: 1440px) {
    width: 15.81rem;
  }

  @media only screen and (min-width: 1441px) and (max-width: 1920px) {
    width: 16.31rem;
  }

  @media only screen and (min-width: 1921px) {
    width: 21.81rem;
  }
`;

export const AboutSection3Text = styled.p`
  color: ${ColorPalette.darkFontColor};
  font-weight: 300;
  text-align: left;

  @media only screen and (min-width: 280px) and (max-width: 576px) {
    font-size: 12px;
  }

  @media only screen and (min-width: 577px) and (max-width: 1440px) {
    font-size: 16px;
  }

  @media only screen and (min-width: 1441px) {
    font-size: 24px;
  }
`;
