import styled from "styled-components";
import { ColorPalette } from "../../Core-Ui/Colors/Colors";

export const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: ${ColorPalette.footerBackground};
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
    padding: 0 72px 0 72px;
  }

  @media only screen and (min-width: 1025px) and (max-width: 1280px) {
    padding: 0 88px 0 88px;
  }

  @media only screen and (min-width: 1281px) and (max-width: 1440px) {
    padding: 0 104px 0 104px;
  }

  @media only screen and (min-width: 1441px) and (max-width: 1920px) {
    padding: 0 168px 0 168px;
  }

  @media only screen and (min-width: 1921px) {
    padding: 0 232px 0 232px;
  }
`;

export const FooterActiveArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
`;

export const FooterInputIconTextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media only screen and (min-width: 280px) and (max-width: 768px) {
    flex-direction: column;
  }

  @media only screen and (min-width: 769px) {
    flex-direction: row;
  }
`;
export const FooterIconTextWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  @media only screen and (min-width: 280px) and (max-width: 768px) {
    width: 100%;
  }

  @media only screen and (min-width: 769px) and (max-width: 992px) {
    width: 60%;
  }

  @media only screen and (min-width: 993px) {
    width: 50%;
  }
`;
export const FooterIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 0.5rem;
`;

export const FooterIcon = styled.img`
  @media only screen and (min-width: 280px) and (max-width: 576px) {
    width: 52px;
    height: 52px;
  }

  @media only screen and (min-width: 577px) and (max-width: 768px) {
    width: 59px;
    height: 59px;
  }

  @media only screen and (min-width: 769px) and (max-width: 992px) {
    width: 55px;
    height: 55px;
  }

  @media only screen and (min-width: 993px) and (max-width: 1280px) {
    width: 63px;
    height: 63px;
  }

  @media only screen and (min-width: 1281px) and (max-width: 1920px) {
    width: 71px;
    height: 71px;
  }

  @media only screen and (min-width: 1921px) {
    width: 89px;
    height: 89px;
  }
`;
export const FooterTopTextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
`;
export const FooterTopHeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 0.5rem;
`;
export const FooterTopHeader = styled.h1`
  color: ${ColorPalette.lightFontColor};
  font-weight: 900;
  text-align: left;

  @media only screen and (min-width: 280px) and (max-width: 576px) {
    font-size: 16px;
  }

  @media only screen and (min-width: 577px) and (max-width: 768px) {
    font-size: 24px;
  }

  @media only screen and (min-width: 769px) and (max-width: 1280px) {
    font-size: 16px;
  }

  @media only screen and (min-width: 1281px) and (max-width: 1920px) {
    font-size: 24px;
  }

  @media only screen and (min-width: 1921px) {
    font-size: 32px;
  }
`;
export const FooterTopSubheaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const FooterTopSubheader = styled.p`
  color: ${ColorPalette.lightFontColor};
  font-weight: 300;
  text-align: left;

  @media only screen and (min-width: 280px) and (max-width: 576px) {
    font-size: 12px;
  }

  @media only screen and (min-width: 577px) and (max-width: 768px) {
    font-size: 16px;
  }

  @media only screen and (min-width: 769px) and (max-width: 1280px) {
    font-size: 12px;
  }

  @media only screen and (min-width: 1281px) and (max-width: 1920px) {
    font-size: 16px;
  }

  @media only screen and (min-width: 1921px) {
    font-size: 24px;
  }
`;
export const FooterInputWrapper = styled.div`
  display: flex;
  align-items: center;

  @media only screen and (min-width: 280px) and (max-width: 576px) {
    justify-content: center;
    width: 100%;
    margin-top: 1.5rem;
  }

  @media only screen and (min-width: 577px) and (max-width: 768px) {
    justify-content: center;
    width: 100%;
    margin-top: 1.5rem;
  }

  @media only screen and (min-width: 769px) and (max-width: 992px) {
    justify-content: flex-end;
    width: 40%;
    margin-top: 0;
  }

  @media only screen and (min-width: 993px) {
    justify-content: flex-end;
    width: 50%;
    margin-top: 0;
  }
`;

export const FooterInputWrapper2 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  @media only screen and (min-width: 280px) and (max-width: 576px) {
    width: 100%;
    height: 3rem;
  }

  @media only screen and (min-width: 577px) and (max-width: 768px) {
    width: 20.31rem;
    height: 3rem;
  }

  @media only screen and (min-width: 769px) and (max-width: 992px) {
    width: 12.88rem;
    height: 2.5rem;
  }

  @media only screen and (min-width: 993px) and (max-width: 1024px) {
    width: 16.81rem;
    height: 3rem;
  }

  @media only screen and (min-width: 1025px) and (max-width: 1280px) {
    width: 16.81rem;
    height: 3rem;
  }

  @media only screen and (min-width: 1281px) and (max-width: 1440px) {
    width: 21.5rem;
    height: 3.5rem;
  }

  @media only screen and (min-width: 1441px) {
    width: 21.81rem;
    height: 3.5rem;
  }
`;
export const FooterInput = styled.input`
  background-color: ${ColorPalette.backgroundColor};
  border-radius: 8px;
  border: none;
  padding-left: 0.5rem;
  width: 100%;
  height: 100%;
  &::placeholder {
    color: ${ColorPalette.darkFontColor};
    opacity: 0.5;
  }
  @media only screen and (min-width: 280px) and (max-width: 576px) {
    &::placeholder {
      font-size: 12px;
    }
  }

  @media only screen and (min-width: 577px) and (max-width: 768px) {
    &::placeholder {
      font-size: 16px;
    }
  }

  @media only screen and (min-width: 769px) and (max-width: 1280px) {
    &::placeholder {
      font-size: 12px;
    }
  }

  @media only screen and (min-width: 1281px) {
    &::placeholder {
      font-size: 16px;
    }
  }
`;

export const FooterImgTextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media only screen and (min-width: 280px) and (max-width: 768px) {
    flex-direction: column;
    padding-top: 1.5rem;
  }

  @media only screen and (min-width: 769px) and (max-width: 992px) {
    flex-direction: row;
    padding-top: 0.75rem;
  }

  @media only screen and (min-width: 993px) and (max-width: 1280px) {
    flex-direction: row;
    padding-top: 2.5rem;
  }

  @media only screen and (min-width: 1281px) and (max-width: 1920px) {
    flex-direction: row;
    padding-top: 2rem;
  }

  @media only screen and (min-width: 1921px) {
    flex-direction: row;
    padding-top: 2.5rem;
  }
`;
export const FooterImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FooterImg = styled.img`
  @media only screen and (min-width: 280px) and (max-width: 576px) {
    width: 14.5rem;
    height: 10.63rem;
  }

  @media only screen and (min-width: 577px) and (max-width: 768px) {
    width: 20.38rem;
    height: 14.94rem;
  }

  @media only screen and (min-width: 769px) and (max-width: 992px) {
    width: 17.56rem;
    height: 12.88rem;
  }

  @media only screen and (min-width: 993px) and (max-width: 1280px) {
    width: 16.88rem;
    height: 12.38rem;
  }

  @media only screen and (min-width: 1281px) and (max-width: 1440px) {
    width: 21.5rem;
    height: 15.81rem;
  }

  @media only screen and (min-width: 1441px) and (max-width: 1920px) {
    width: 22.19rem;
    height: 16.31rem;
  }

  @media only screen and (min-width: 1921px) {
    width: 29.5rem;
    height: 21.69rem;
  }
`;

export const FooterMiddleTextWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  @media only screen and (min-width: 280px) and (max-width: 992px) {
    flex-direction: column;
  }

  @media only screen and (min-width: 993px) {
    flex-direction: row;
  }
`;

export const FooterMiddleTextWrapper2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (min-width: 280px) and (max-width: 576px) {
    flex-direction: column;
  }

  @media only screen and (min-width: 577px) {
    flex-direction: row;
  }
`;
export const FooterMiddleTextWrapper3 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media only screen and (min-width: 280px) and (max-width: 576px) {
    width: 100%;
    margin-top: 1.5rem;
  }

  @media only screen and (min-width: 577px) and (max-width: 768px) {
    width: 9.5rem;
    margin-top: 1.5rem;
  }

  @media only screen and (min-width: 769px) and (max-width: 992px) {
    width: 8.13rem;
    margin-top: 1.25rem;
  }

  @media only screen and (min-width: 993px) and (max-width: 1280px) {
    width: 7.81rem;
    margin-top: 0;
  }

  @media only screen and (min-width: 1281px) and (max-width: 1920px) {
    width: 10.13rem;
    margin-top: 0;
  }

  @media only screen and (min-width: 1921px) {
    width: 14.13rem;
    margin-top: 0;
  }
`;

export const FooterMiddleTextHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 0.5rem;

  @media only screen and (min-width: 280px) and (max-width: 768px) {
    justify-content: center;
  }

  @media only screen and (min-width: 769px) {
    justify-content: flex-start;
  }
`;
export const FooterMiddleTextHeader = styled.h1`
  color: ${ColorPalette.lightFontColor};
  font-weight: 800;

  @media only screen and (min-width: 280px) and (max-width: 768px) {
    font-size: 24px;
    text-align: center;
  }

  @media only screen and (min-width: 769px) and (max-width: 1920px) {
    font-size: 24px;
    text-align: left;
  }

  @media only screen and (min-width: 1921px) {
    font-size: 32px;
    text-align: left;
  }
`;
export const FooterMiddleTextSubheaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;
export const FooterMiddleTextSubHeaderWrapper2 = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: 0.5rem;
  @media only screen and (min-width: 280px) and (max-width: 768px) {
    justify-content: center;
  }

  @media only screen and (min-width: 769px) {
    justify-content: flex-start;
  }
`;
export const FooterMiddleTextSubheader = styled.h3`
  color: ${ColorPalette.lightFontColor};
  font-weight: 400;

  @media only screen and (min-width: 280px) and (max-width: 768px) {
    font-size: 16px;
    text-align: center;
  }

  @media only screen and (min-width: 769px) and (max-width: 1920px) {
    font-size: 16px;
    text-align: left;
  }

  @media only screen and (min-width: 1921px) {
    font-size: 24px;
    text-align: left;
  }
`;
export const FooterSocialMeadiaCopyContainer1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-top: 1rem;

  @media only screen and (min-width: 280px) and (max-width: 576px) {
    flex-direction: column;
  }

  @media only screen and (min-width: 577px) {
    flex-direction: row;
  }
`;

export const FooterCopyRightWrapper = styled.div`
  display: flex;
  align-items: center;
  @media only screen and (min-width: 280px) and (max-width: 576px) {
    justify-content: center;
    width: 100%;
  }

  @media only screen and (min-width: 577px) {
    justify-content: flex-start;
    width: 50%;
  }
`;

export const FooterCopyRight = styled.p`
  color: ${ColorPalette.lightFontColor};
  font-weight: 700;
  font-size: 16px;
`;

export const FooterSocialMediaWrapper = styled.div`
  display: flex;
  align-items: center;

  @media only screen and (min-width: 280px) and (max-width: 576px) {
    justify-content: center;
    width: 100%;
    margin-top: 1rem;
  }

  @media only screen and (min-width: 577px) {
    justify-content: flex-end;
    width: 50%;
    margin-top: 0;
  }
`;

export const FooterSocialMediaWrapper2 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only screen and (min-width: 280px) and (max-width: 768px) {
    width: 12rem;
  }

  @media only screen and (min-width: 769px) and (max-width: 1024px) {
    width: 15.13rem;
  }

  @media only screen and (min-width: 1025px) and (max-width: 1280px) {
    width: 16.6rem;
  }

  @media only screen and (min-width: 1281px) {
    width: 17rem;
  }
`;

export const FooterSocialMediaWrapper3 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const FooterSocialMediaImg = styled.img`
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
