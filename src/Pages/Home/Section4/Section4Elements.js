import styled from "styled-components";
import { ColorPalette } from "../../../Core-Ui/Colors/Colors";

export const Section4Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

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

export const Section4ActiveArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
`;

export const Section4textWrapper = styled.div`
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
    width: 22.31rem;
  }

  @media only screen and (min-width: 993px) and (max-width: 1280px) {
    width: 34.94rem;
  }

  @media only screen and (min-width: 1281px) {
    width: 44.31rem;
  }
`;

export const Section4HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Section4Header = styled.h1`
  color: ${ColorPalette.darkFontColor};
  font-weight: 900;
  text-align: center;

  @media only screen and (min-width: 280px) and (max-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }

  @media only screen and (min-width: 769px) and (max-width: 992px) {
    font-size: 24px;
    line-height: 36px;
  }

  @media only screen and (min-width: 993px) and (max-width: 1280px) {
    font-size: 32px;
    line-height: 48px;
  }

  @media only screen and (min-width: 1281px) {
    font-size: 40px;
    line-height: 60px;
  }
`;

export const Section4SubheaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

export const Section4Subheader = styled.h3`
  color: ${ColorPalette.darkFontColor};
  font-weight: 500;
  text-align: center;

  @media only screen and (min-width: 280px) and (max-width: 576px) {
    font-size: 12px;
    line-height: 14px;
  }

  @media only screen and (min-width: 577px) and (max-width: 992px) {
    font-size: 16px;
    line-height: 24px;
  }

  @media only screen and (min-width: 993px) and (max-width: 1280px) {
    font-size: 24px;
    line-height: 36px;
  }

  @media only screen and (min-width: 1281px) {
    font-size: 32px;
    line-height: 48px;
  }
`;

export const Section4Form = styled.form`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`

export const Section4InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1.5rem;
`;

export const Section4Input = styled.input`
  background-color: ${ColorPalette.lightPrimaryColor};
  border: none;
  padding-left: 0.5rem;
  &::placeholder {
    color: ${ColorPalette.darkFontColor};
    opacity: 0.5;
  }

  @media only screen and (min-width: 280px) and (max-width: 576px) {
    width: 7.88rem;
    height: 1.5rem;
    border-radius: 4px;
    &::placeholder {
      font-size: 12px;
    }
  }

  @media only screen and (min-width: 577px) and (max-width: 992px) {
    width: 12.5rem;
    height: 2rem;
    border-radius: 8px;
    &::placeholder {
      font-size: 16px;
    }
  }

  @media only screen and (min-width: 993px) and (max-width: 1280px) {
    width: 12.5rem;
    height: 3rem;
    border-radius: 8px;
    &::placeholder {
      font-size: 16px;
    }
  }

  @media only screen and (min-width: 1281px) {
    width: 18.75rem;
    height: 3rem;
    border-radius: 8px;
    &::placeholder {
      font-size: 16px;
    }
  }
`;

export const Section4BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
