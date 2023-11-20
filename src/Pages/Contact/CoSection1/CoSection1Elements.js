import styled from "styled-components";
import { ColorPalette } from "../../../Core-Ui/Colors/Colors";

export const CoSection1Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media only screen and (min-width: 577px) and (max-width: 992px) {
    height: 35rem;
  }

  @media only screen and (min-width: 993px) and (max-width: 1280px) {
    height: 37rem;
  }

  @media only screen and (min-width: 1281px) and (max-width: 1920px) {
    height: 45.13rem;
  }

  @media only screen and (min-width: 1921px) {
    height: 52rem;
  }
`;

export const FloatBgBox = styled.div`
  top: 0;
  right: 0;
  position: absolute;
  z-index: 1;

  @media only screen and (min-width: 280px) and (max-width: 992px) {
    display: none;
  }

  @media only screen and (min-width: 993px) and (max-width: 1024px) {
    width: 45.25rem;
    height: 37rem;
  }

  @media only screen and (min-width: 1025px) and (max-width: 1280px) {
    width: 46.25rem;
    height: 37rem;
  }

  @media only screen and (min-width: 1281px) and (max-width: 1440px) {
    width: 57.75rem;
    height: 45.13rem;
  }

  @media only screen and (min-width: 1441px) and (max-width: 1920px) {
    width: 63.25rem;
    height: 45.13rem;
  }

  @media only screen and (min-width: 1921px) {
    width: 83.75rem;
    height: 52rem;
  }
`;

export const CoSection1Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  z-index: 5;

  @media only screen and (min-width: 280px) and (max-width: 576px) {
    padding: 0 24px 0 24px;
  }

  @media only screen and (min-width: 577px) and (max-width: 768px) {
    padding: 0 40px 0 40px;
  }

  @media only screen and (min-width: 769px) and (max-width: 992px) {
    padding: 0 56px 0 56px;
  }

  @media only screen and (min-width: 993px) and (max-width: 1024px) {
    padding: 0 72px 0 0;
  }

  @media only screen and (min-width: 1025px) and (max-width: 1280px) {
    padding: 0 88px 0 0;
  }

  @media only screen and (min-width: 1281px) and (max-width: 1440px) {
    padding: 0 104px 0 0;
  }

  @media only screen and (min-width: 1441px) and (max-width: 1920px) {
    padding: 0 168px 0 0;
  }

  @media only screen and (min-width: 1921px) {
    padding: 0 232px 0 0;
  }
`;

export const CoSection1ActiveArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: 100%;
`;

export const CirclePersonContainer = styled.div`
  justify-content: center;
  align-items: center;
  height: 100%;

  @media only screen and (min-width: 280px) and (max-width: 992px) {
    display: none;
  }

  @media only screen and (min-width: 993px) and (max-width: 1024px) {
    display: flex;
    width: 16.81rem;
  }

  @media only screen and (min-width: 1025px) and (max-width: 1280px) {
    display: flex;
    width: 17.81rem;
  }

  @media only screen and (min-width: 1281px) and (max-width: 1440px) {
    display: flex;
    width: 22.31rem;
  }

  @media only screen and (min-width: 1441px) and (max-width: 1920px) {
    display: flex;
    width: 26.81rem;
  }

  @media only screen and (min-width: 1921px) {
    display: flex;
    width: 36.31rem;
  }
`;

export const CoSection1ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  height: 100%;

  @media only screen and (min-width: 280px) and (max-width: 992px) {
    width: 100%;
  }

  @media only screen and (min-width: 993px) and (max-width: 1024px) {
    width: calc(100% - 16.81rem);
  }

  @media only screen and (min-width: 1025px) and (max-width: 1280px) {
    width: calc(100% - 17.81rem);
  }

  @media only screen and (min-width: 1281px) and (max-width: 1440px) {
    width: calc(100% - 22.31rem);
  }

  @media only screen and (min-width: 1441px) and (max-width: 1920px) {
    width: calc(100% - 26.81rem);
  }

  @media only screen and (min-width: 1921px) {
    width: calc(100% - 36.31rem);
  }
`;

export const ContactInfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 100%;

  @media only screen and (min-width: 280px) and (max-width: 576px) {
    width: 100%;
  }

  @media only screen and (min-width: 577px) and (max-width: 768px) {
    width: 12rem;
  }

  @media only screen and (min-width: 769px) and (max-width: 1024px) {
    width: 15.13rem;
  }

  @media only screen and (min-width: 1025px) and (max-width: 1280px) {
    width: 16rem;
  }

  @media only screen and (min-width: 1281px) and (max-width: 1440px) {
    width: 17rem;
  }

  @media only screen and (min-width: 1441px) {
    width: 22rem;
  }
`;

export const ContactInfoWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;

  @media only screen and (min-width: 280px) and (max-width: 576px) {
    align-items: flex-start;
    margin-top: 5.5rem;
    margin-bottom: 1rem;
  }

  @media only screen and (min-width: 577px) and (max-width: 1920px) {
    align-items: center;
    margin-top: 5.5rem;
  }

  @media only screen and (min-width: 1921px) {
    align-items: center;
    margin-top: 8rem;
  }
`;

export const CoHeaderSubheaderPictureWrapper = styled.div`
  justify-content: space-between;
  align-items: flex-end;
  flex-direction: column;
  height: 100%;

  @media only screen and (min-width: 280px) and (max-width: 576px) {
    display: none;
  }

  @media only screen and (min-width: 577px) and (max-width: 768px) {
    display: flex;
    width: calc(100% - 12rem);
  }

  @media only screen and (min-width: 769px) and (max-width: 1024px) {
    display: flex;
    width: calc(100% - 15.13rem);
  }

  @media only screen and (min-width: 1025px) and (max-width: 1280px) {
    display: flex;
    width: calc(100% - 16rem);
  }

  @media only screen and (min-width: 1281px) and (max-width: 1440px) {
    display: flex;
    width: calc(100% - 17rem);
  }

  @media only screen and (min-width: 1441px) {
    display: flex;
    width: calc(100% - 22rem);
  }
`;

export const ContactInfoHeaderIconTextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  margin-bottom: 0.5rem;

  @media only screen and (min-width: 280px) and (max-width: 992px) {
    margin-left: 0;
  }

  @media only screen and (min-width: 993px) {
    margin-left: 20px;
  }
`;
export const ContactInfoHeaderIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
`;
export const ContactInfoIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 0.5rem;
`;
export const ContactInfoIcon1 = styled.img`
  @media only screen and (min-width: 280px) and (max-width: 576px) {
    width: 20px;
    height: 16px;
  }

  @media only screen and (min-width: 577px) and (max-width: 1440px) {
    width: 27.75px;
    height: 22.2px;
  }

  @media only screen and (min-width: 1441px) {
    width: 38.75px;
    height: 31px;
  }
`;

export const ContactInfoIcon2 = styled.img`
  @media only screen and (min-width: 280px) and (max-width: 576px) {
    width: 23px;
    height: 20px;
  }

  @media only screen and (min-width: 577px) and (max-width: 1440px) {
    width: 32px;
    height: 28px;
  }

  @media only screen and (min-width: 1441px) {
    width: 44px;
    height: 38px;
  }
`;

export const ContactInfoIcon3 = styled.img`
  @media only screen and (min-width: 280px) and (max-width: 576px) {
    width: 18px;
    height: 23px;
  }

  @media only screen and (min-width: 577px) and (max-width: 1440px) {
    width: 25px;
    height: 32px;
  }

  @media only screen and (min-width: 1441px) {
    width: 33px;
    height: 43px;
  }
`;
export const ContactInfoHeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ContactInfoHeader = styled.h3`
  color: ${ColorPalette.darkFontColor};
  font-weight: 600;
  text-align: left;

  @media only screen and (min-width: 280px) and (max-width: 576px) {
    font-size: 16px;
  }

  @media only screen and (min-width: 577px) and (max-width: 1440px) {
    font-size: 24px;
  }

  @media only screen and (min-width: 1441px) {
    font-size: 24px;
  }
`;
export const ContactInfoTextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ContactInfoText = styled.p`
  color: ${ColorPalette.darkFontColor};
  font-weight: 400;
  text-align: left;
  margin-bottom: 0.5rem;

  @media only screen and (min-width: 280px) and (max-width: 576px) {
    font-size: 12px;
  }

  @media only screen and (min-width: 577px) and (max-width: 1440px) {
    font-size: 16px;
  }

  @media only screen and (min-width: 1441px) and (max-width: 1920px) {
    font-size: 22px;
  }

  @media only screen and (min-width: 1921px) {
    font-size: 22px;
  }
`;
export const ContactSocialMediaWrapper1 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;

  @media only screen and (min-width: 280px) and (max-width: 768px) {
    width: 12rem;
  }

  @media only screen and (min-width: 769px) and (max-width: 1024px) {
    width: 14rem;
  }

  @media only screen and (min-width: 993px) and (max-width: 1024px) {
    width: 14rem;
  }

  @media only screen and (min-width: 1025px) and (max-width: 1280px) {
    width: 15rem;
  }

  @media only screen and (min-width: 1281px) and (max-width: 1440px) {
    width: 16rem;
  }

  @media only screen and (min-width: 1441px) and (max-width: 1920px) {
    width: 17rem;
  }

  @media only screen and (min-width: 1921px) {
    width: 19rem;
  }
`;
export const ContactSocialMediaWrapper2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ContactSocialMediaImg = styled.img`
  @media only screen and (min-width: 280px) and (max-width: 768px) {
    width: 32px;
    height: 32px;
  }

  @media only screen and (min-width: 769px) and (max-width: 1024px) {
    width: 42px;
    height: 42px;
  }

  @media only screen and (min-width: 1025px) and (max-width: 1280px) {
    width: 45px;
    height: 45px;
  }

  @media only screen and (min-width: 1281px) {
    width: 48px;
    height: 48px;
  }
`;

export const CoHeaderSubheaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media only screen and (min-width: 577px) and (max-width: 1920px) {
    margin-top: 5.5rem;
  }

  @media only screen and (min-width: 1921px) {
    margin-top: 8rem;
  }
`;
export const CoHeaderWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  margin-bottom: 1rem;

  @media only screen and (min-width: 280px) and (max-width: 576px) {
    width: 14.5rem;
  }

  @media only screen and (min-width: 577px) and (max-width: 768px) {
    width: 14.88rem;
  }

  @media only screen and (min-width: 769px) and (max-width: 992px) {
    width: 22.25rem;
  }

  @media only screen and (min-width: 993px) and (max-width: 1280px) {
    width: 21.38rem;
  }

  @media only screen and (min-width: 1281px) and (max-width: 1440px) {
    width: 32.88rem;
  }

  @media only screen and (min-width: 1441px) and (max-width: 1920px) {
    width: 28.06rem;
  }

  @media only screen and (min-width: 1921px) {
    width: 37.19rem;
  }
`;
export const CoHeader = styled.h1`
  color: ${ColorPalette.darkFontColor};
  font-weight: 900;
  text-align: left;
  text-transform: uppercase;

  @media only screen and (min-width: 280px) and (max-width: 768px) {
    font-size: 24px;
  }

  @media only screen and (min-width: 769px) and (max-width: 1280px) {
    font-size: 32px;
  }

  @media only screen and (min-width: 1281px) and (max-width: 1920px) {
    font-size: 40px;
  }

  @media only screen and (min-width: 1921px) {
    font-size: 48px;
  }
`;

export const CoHeaderSpan = styled.span`
  color: ${ColorPalette.darkPrimaryColor};
`;

export const CoSubheaderWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  @media only screen and (min-width: 280px) and (max-width: 576px) {
    width: 14.5rem;
  }

  @media only screen and (min-width: 577px) and (max-width: 768px) {
    width: 14.88rem;
  }

  @media only screen and (min-width: 769px) and (max-width: 992px) {
    width: 22.25rem;
  }

  @media only screen and (min-width: 993px) and (max-width: 1280px) {
    width: 21.38rem;
  }

  @media only screen and (min-width: 1281px) and (max-width: 1440px) {
    width: 32.88rem;
  }

  @media only screen and (min-width: 1441px) and (max-width: 1920px) {
    width: 28.06rem;
  }

  @media only screen and (min-width: 1921px) {
    width: 37.19rem;
  }
`;
export const CoSubheader = styled.p`
  color: ${ColorPalette.darkFontColor};
  font-weight: 500;
  text-align: left;

  @media only screen and (min-width: 280px) and (max-width: 576px) {
    font-size: 12px;
  }

  @media only screen and (min-width: 577px) and (max-width: 1280px) {
    font-size: 16px;
  }

  @media only screen and (min-width: 1281px) {
    font-size: 24px;
  }
`;
export const CoBigSvgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (min-width: 280px) and (max-width: 576px) {
    display: none;
  }
`;

export const CoBigSvg = styled.img`
  @media only screen and (min-width: 280px) and (max-width: 576px) {
    display: none;
  }

  @media only screen and (min-width: 577px) and (max-width: 768px) {
    height: 12.38rem;
    width: 18.63rem;
  }

  @media only screen and (min-width: 769px) and (max-width: 992px) {
    height: 14.75rem;
    width: 22.25rem;
  }

  @media only screen and (min-width: 993px) and (max-width: 1024px) {
    height: 15.94rem;
    width: 24rem;
  }

  @media only screen and (min-width: 1025px) and (max-width: 1280px) {
    height: 16.81rem;
    width: 25.31rem;
  }

  @media only screen and (min-width: 1281px) and (max-width: 1440px) {
    height: 23.13rem;
    width: 34.88rem;
  }

  @media only screen and (min-width: 1441px) and (max-width: 1920px) {
    height: 23.13rem;
    width: 31rem;
  }

  @media only screen and (min-width: 1921px) {
    height: 28.19rem;
    width: 42.5rem;
  }
`;
