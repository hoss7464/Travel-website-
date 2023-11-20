import styled from "styled-components";
import { ColorPalette } from "../../../Core-Ui/Colors/Colors";

//---------------------------------------------------------------

export const HeroSectionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  @media only screen and (min-width: 280px) and (max-width: 576px) {
    padding: 0 24px 0 24px;
    height: 32.5rem;
  }

  @media only screen and (min-width: 577px) and (max-width: 768px) {
    padding: 0 40px 0 40px;
    height: 27.63rem;
  }

  @media only screen and (min-width: 769px) and (max-width: 992px) {
    padding: 0 56px 0 56px;
    height: 41rem;
  }

  @media only screen and (min-width: 993px) and (max-width: 1024px) {
    padding: 0 72px 0 72px;
    height: 37.37rem;
  }

  @media only screen and (min-width: 1025px) and (max-width: 1280px) {
    padding: 0 88px 0 88px;
    height: 42.37rem;
  }

  @media only screen and (min-width: 1281px) and (max-width: 1440px) {
    padding: 0 104px 0 104px;
    height: 43.6rem;
  }

  @media only screen and (min-width: 1441px) and (max-width: 1920px) {
    padding: 0 168px 0 168px;
    height: 45.9rem;
  }
  @media only screen and (min-width: 1921px) {
    padding: 0 232px 0 232px;
    height: 50.56rem;
  }
`;
//-----------------------------------------------------------------------
export const HeroBgContainer = styled.div`

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 20px;
  position: absolute;
  width: 100%;
  z-index: 1;

  @media only screen and (min-width: 280px) and (max-width: 576px) {
    height: 32.5rem;
  }

  @media only screen and (min-width: 577px) and (max-width: 768px) {
    height: 27.63rem;
  }

  @media only screen and (min-width: 769px) and (max-width: 992px) {
    height: 41.19rem;
  }

  @media only screen and (min-width: 993px) and (max-width: 1024px) {
    height: 37.3rem;
  }

  @media only screen and (min-width: 1025px) and (max-width: 1280px) {
    height: 42.3rem;
  }

  @media only screen and (min-width: 1281px) and (max-width: 1440px) {
    height: 43.5rem;
  }

  @media only screen and (min-width: 1441px) and (max-width: 1920px) {
    height: 45.8rem;
  }
  @media only screen and (min-width: 1921px) {
    height: 50.5rem;
  }
`;

export const HeroBgLeftContainer = styled.div`
  @media only screen and (min-width: 280px) and (max-width: 576px) {
    height: 32.5rem;
    grid-column: 1 / 3;
  }

  @media only screen and (min-width: 577px) and (max-width: 768px) {
    height: 27.63rem;
    grid-column: 1 / 3;
  }

  @media only screen and (min-width: 769px) and (max-width: 992px) {
    height: 41.1rem;
    grid-column: 1 / 3;
  }

  @media only screen and (min-width: 993px) and (max-width: 1024px) {
    height: 43.44rem;
    grid-column: 1 / 2;
  }

  @media only screen and (min-width: 1025px) and (max-width: 1280px) {
    height: 42.3rem;
    grid-column: 1 / 2;
  }

  @media only screen and (min-width: 1281px) and (max-width: 1440px) {
    height: 43.5rem;
    grid-column: 1 / 2;
  }

  @media only screen and (min-width: 1441px) and (max-width: 1920px) {
    height: 45.8rem;
    grid-column: 1 / 2;
  }
  @media only screen and (min-width: 1921px) {
    height: 50.5rem;
    grid-column: 1 / 2;
  }
`;

export const HeroBgRightContainer = styled.div`
  @media only screen and (min-width: 280px) and (max-width: 576px) {
    display: none;
  }

  @media only screen and (min-width: 577px) and (max-width: 768px) {
    display: none;
  }

  @media only screen and (min-width: 769px) and (max-width: 992px) {
    display: none;
  }

  @media only screen and (min-width: 993px) and (max-width: 1024px) {
    height: 37.3rem;
    grid-column: 2 / 3;
  }

  @media only screen and (min-width: 1025px) and (max-width: 1280px) {
    height: 42.3rem;
    grid-column: 2 / 3;
  }

  @media only screen and (min-width: 1281px) and (max-width: 1440px) {
    height: 43.5rem;
    grid-column: 2 / 3;
  }

  @media only screen and (min-width: 1441px) and (max-width: 1920px) {
    height: 45.8rem;
    grid-column: 2 / 3;
  }
  @media only screen and (min-width: 1921px) {
    height: 50.5rem;
    grid-column: 2 / 3;
  }
`;
//-------------------------------------------------------------------------
export const HeroGreenCircle = styled.div`
  position: absolute;
  border-radius: 50%;
  border-radius: 872px;
  background: linear-gradient(
    168deg,
    #46eb14 11.97%,
    #ddf7d9 44.34%,
    #edfde8 64.57%,
    #fff 77.49%
  );

  @media only screen and (max-width: 992px) {
    display: none;
  }

  @media only screen and (min-width: 993px) and (max-width: 1024px) {
    width: 54.5rem;
    height: 52.69rem;
    top: -24rem;
    right: -22.5rem;
  }

  @media only screen and (min-width: 1025px) and (max-width: 1280px) {
    width: 54.5rem;
    height: 52.69rem;
    top: -22rem;
    right: -22rem;
  }

  @media only screen and (min-width: 1281px) and (max-width: 1440px) {
    width: 58rem;
    height: 58rem;
    top: -23rem;
    right: -18rem;
  }

  @media only screen and (min-width: 1441px) and (max-width: 1920px) {
    width: 62rem;
    height: 62rem;
    top: -25rem;
    right: -16.5rem;
  }

  @media only screen and (min-width: 1921px) {
    width: 70rem;
    height: 70rem;
    top: -27rem;
    right: -10rem;
  }
`;
//-------------------------------------------------------------------------
export const HeroSectionActiveArea = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 20px;
  width: 100%;
  height: 100%;
  z-index: 10;
`;

export const HeroActiveAreaLeftContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  height: 100%;

  @media only screen and (min-width: 280px) and (max-width: 576px) {
    justify-content: space-between;
    align-items: center;
    grid-column: 1 / 3;
  }

  @media only screen and (min-width: 577px) and (max-width: 768px) {
    justify-content: space-between;
    align-items: center;
    grid-column: 1 / 3;
  }

  @media only screen and (min-width: 769px) and (max-width: 992px) {
    justify-content: space-between;
    align-items: center;
    grid-column: 1 / 3;
  }

  @media only screen and (min-width: 993px) and (max-width: 1024px) {
    grid-column: 1 / 2;
  }

  @media only screen and (min-width: 1025px) and (max-width: 1280px) {
    grid-column: 1 / 2;
  }

  @media only screen and (min-width: 1281px) and (max-width: 1440px) {
    grid-column: 1 / 2;
  }

  @media only screen and (min-width: 1441px) and (max-width: 1920px) {
    grid-column: 1 / 2;
  }

  @media only screen and (min-width: 1921px) {
    grid-column: 1 / 2;
  }
`;
export const HeroActiveAreaRightContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  grid-column: 2 / 3;
  height: 100%;

  @media only screen and (max-width: 992px) {
    display: none;
  }
`;
//---------------------------------------------------------------------
export const HeroPersonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media only screen and (max-width: 992px) {
    display: none;
  }

  @media only screen and (min-width: 993px) and (max-width: 1024px) {
    margin-top: 5rem;
    height: 20.56rem;
  }

  @media only screen and (min-width: 1025px) and (max-width: 1280px) {
    margin-top: 6rem;
    height: 20.56rem;
  }

  @media only screen and (min-width: 1281px) and (max-width: 1440px) {
    margin-top: 6rem;
    height: 26.19rem;
  }

  @media only screen and (min-width: 1441px) and (max-width: 1920px) {
    margin-top: 5rem;
    margin-left: 3rem;
    height: 28rem;
  }

  @media only screen and (min-width: 1921px) {
    margin-top: 7.5rem;
    height: 34rem;
  }
`;

export const HeroPerson = styled.img`
  width: 100%;
  height: 100%;
`;

export const HeroSocialMediaWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  flex-direction: column;
  width: 100%;
  @media only screen and (max-width: 992px) {
    justify-content: flex-start;
    align-items: flex-start;
  }

  @media only screen and (min-width: 993px) {
    margin-bottom: 0.5rem;
  }
`;

export const HomeSocialMediaContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  position: relative;
  right: 0;

  @media only screen and (min-width: 280px) and (max-width: 576px) {
    width: 7rem;
  }

  @media only screen and (min-width: 577px) and (max-width: 768px) {
    width: 7rem;
  }

  @media only screen and (min-width: 769px) and (max-width: 992px) {
    width: 7rem;
  }

  @media only screen and (min-width: 993px) and (max-width: 1024px) {
    width: 10rem;
  }

  @media only screen and (min-width: 1025px) and (max-width: 1280px) {
    width: 10rem;
  }

  @media only screen and (min-width: 1281px) and (max-width: 1440px) {
    width: 10rem;
  }

  @media only screen and (min-width: 1441px) and (max-width: 1920px) {
    width: 10rem;
  }

  @media only screen and (min-width: 1921px) {
    width: 10rem;
  }
`;

export const CopyRightContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  margin-bottom: 1rem;
  @media only screen and (max-width: 992px) {
    display: flex;
    justify-content: flex-start;
  }
`;

export const CopyRightText = styled.p`
  color: ${ColorPalette.darkFontColor};
  font-weight: 200;

  @media only screen and (max-width: 1280px) {
    font-size: 8px;
  }

  @media only screen and (min-width: 1281px) {
    font-size: 16px;
  }
`;
//------------------------------------------------------------------------
export const HeroActiveAreaLeftWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;

  @media only screen and (min-width: 280px) and (max-width: 576px) {
    margin-top: 6.5rem;
  }

  @media only screen and (min-width: 577px) and (max-width: 768px) {
    margin-top: 6.5rem;
  }

  @media only screen and (min-width: 769px) and (max-width: 992px) {
    margin-top: 7rem;
  }

  @media only screen and (min-width: 993px) and (max-width: 1024px) {
    margin-top: 5rem;
  }

  @media only screen and (min-width: 1025px) and (max-width: 1280px) {
    margin-top: 6.56rem;
  }

  @media only screen and (min-width: 1281px) and (max-width: 1440px) {
    margin-top: 6.56rem;
  }

  @media only screen and (min-width: 1441px) and (max-width: 1920px) {
    margin-top: 6.56rem;
  }

  @media only screen and (min-width: 1921px) {
    margin-top: 9rem;
  }
`;

export const HeroLeftSection1 = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  
`;

export const HeroHeaderContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  @media only screen and (min-width: 280px) and (max-width: 576px) {
    width: 14.5rem;
  }

  @media only screen and (min-width: 577px) and (max-width: 768px) {
    width: 18rem;
  }

  @media only screen and (min-width: 769px) and (max-width: 992px) {
    width: 21rem;
  }

  @media only screen and (min-width: 993px) and (max-width: 1024px) {
    width: 21.38rem;
  }

  @media only screen and (min-width: 1025px) and (max-width: 1280px) {
    width: 21.38rem;
  }

  @media only screen and (min-width: 1281px) and (max-width: 1440px) {
    width: 27.19rem;
  }

  @media only screen and (min-width: 1441px) and (max-width: 1920px) {
    width: 27.19rem;
  }

  @media only screen and (min-width: 1921px) {
    width: 27.19rem;
  }
`;

export const HeroHeader = styled.h1`
  font-weight: 900;
  color: ${ColorPalette.darkFontColor};

  @media only screen and (min-width: 280px) and (max-width: 576px) {
    font-size: 40px;
    line-height: 60px;
  }

  @media only screen and (min-width: 577px) and (max-width: 768px) {
    font-size: 40px;
    line-height: 48px;
  }

  @media only screen and (min-width: 769px) and (max-width: 992px) {
    font-size: 48px;
    line-height: 60px;
  }

  @media only screen and (min-width: 993px) and (max-width: 1024px) {
    font-size: 40px;
    line-height: 60px;
  }

  @media only screen and (min-width: 1025px) and (max-width: 1280px) {
    font-size: 48px;
    line-height: 72px;
  }

  @media only screen and (min-width: 1281px) and (max-width: 1440px) {
    font-size: 56px;
    line-height: 84px;
  }

  @media only screen and (min-width: 1441px) and (max-width: 1920px) {
    font-size: 56px;
    line-height: 84px;
  }

  @media only screen and (min-width: 1921px) {
    font-size: 56px;
    line-height: 84px;
  }
`;

export const HeroHeaderSpan = styled.span`
  color: ${ColorPalette.darkPrimaryColor};
`;
export const HeroSubHeaderContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  @media only screen and (min-width: 280px) and (max-width: 576px) {
    width: 14.5rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  @media only screen and (min-width: 577px) and (max-width: 768px) {
    width: 22rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  @media only screen and (min-width: 769px) and (max-width: 992px) {
    width: 21rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  @media only screen and (min-width: 993px) and (max-width: 1024px) {
    width: 100%;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  @media only screen and (min-width: 1025px) and (max-width: 1280px) {
    width: 25.94rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  @media only screen and (min-width: 1281px) and (max-width: 1440px) {
    width: 27.19rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  @media only screen and (min-width: 1441px) and (max-width: 1920px) {
    width: 27.19rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  @media only screen and (min-width: 1921px) {
    width: 27.19rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
`;

export const HeroSubHeader = styled.p`
  font-weight: 400;
  color: ${ColorPalette.darkFontColor};

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
    font-size: 24px;
  }

  @media only screen and (min-width: 1921px) {
    font-size: 32px;
  }
`;

export const HeroleftSection2 = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  position: absolute;
  @media only screen and (min-width: 280px) and (max-width: 576px) {
    display: flex;
  }

  @media only screen and (min-width: 577px) and (max-width: 768px) {
    display: flex;
  }

  @media only screen and (max-width: 992px) {
    display: flex;
    top: 6rem;
    right: 5rem;
  }

  @media only screen and (min-width: 993px) and (max-width: 1024px) {
    width: 39.5rem;
    top: 23rem;
  }

  @media only screen and (min-width: 1025px) and (max-width: 1280px) {
    width: 39.5rem;
    top: 27rem;
  }

  @media only screen and (min-width: 1281px) and (max-width: 1440px) {
    width: 39.5rem;
    top: 28rem;
  }

  @media only screen and (min-width: 1441px) and (max-width: 1920px) {
    width: 39.5rem;
    top: 30rem;
  }

  @media only screen and (min-width: 1921px) {
    width: 39.5rem;
    top: 35rem;
  }
`;

export const HeroCardsContainer = styled.div`
  display: grid;
  gap: 20px;
  width: 100%;

  @media only screen and (min-width: 280px) and (max-width: 576px) {
    display: none;
  }

  @media only screen and (min-width: 577px) and (max-width: 768px) {
    display: none;
  }

  @media only screen and (min-width: 769px) and (max-width: 992px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
  }

  @media only screen and (min-width: 993px) and (max-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
  }

  @media only screen and (min-width: 1025px) and (max-width: 1280px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
  }

  @media only screen and (min-width: 1281px) and (max-width: 1440px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
  }

  @media only screen and (min-width: 1441px) and (max-width: 1920px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
  }

  @media only screen and (min-width: 1921px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
  }
`;
export const HeroPrimaryBtnContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 1rem;
`;
