import styled from "styled-components";
import { ColorPalette } from "../../../Core-Ui/Colors/Colors";

export const SerSection6Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
`;

export const SerSection6HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const SerSection6ContentContainer = styled.div`
  display: flex;
  width: 100%;

  @media only screen and (min-width: 280px) and (max-width: 576px) {
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }

  @media only screen and (min-width: 577px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
`;

export const SerSection6LeftTextContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  @media only screen and (min-width: 280px) and (max-width: 576px) {
    width: 14.5rem;
  }

  @media only screen and (min-width: 577px) and (max-width: 768px) {
    width: 14.94rem;
  }

  @media only screen and (min-width: 769px) and (max-width: 992px) {
    width: 17.56rem;
  }

  @media only screen and (min-width: 993px) and (max-width: 1280px) {
    width: 21.38rem;
  }

  @media only screen and (min-width: 1281px) and (max-width: 1440px) {
    width: 21.5rem;
  }

  @media only screen and (min-width: 1441px) and (max-width: 1920px) {
    width: 33.94rem;
  }

  @media only screen and (min-width: 1921px) {
    width: 37.19rem;
  }
`;
export const SerSection6LeftText = styled.p`
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
export const SerSection6RightInputTextContainer = styled.form`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  @media only screen and (min-width: 280px) and (max-width: 576px) {
    margin-top: 1.5rem;
  }
`;

export const SerSection6RightTextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const SerSection6RightText = styled.p`
  color: ${ColorPalette.darkFontColor};
  font-weight: 400;
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
export const SerSection6InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  margin-bottom: 1.5rem;
`;
export const SerSection6Input = styled.input`
  border: none;
  background-color: ${ColorPalette.lightPrimaryColor};
  padding-left: 0.5rem;

  @media only screen and (min-width: 280px) and (max-width: 576px) {
    width: 12.5rem;
    height: 2rem;
    border-radius: 4px;
  }

  @media only screen and (min-width: 577px) and (max-width: 768px) {
    width: 10.88rem;
    height: 2rem;
    border-radius: 4px;
  }

  @media only screen and (min-width: 769px) and (max-width: 992px) {
    width: 10.88rem;
    height: 2rem;
    border-radius: 4px;
  }

  @media only screen and (min-width: 993px) {
    width: 18.81rem;
    height: 3rem;
    border-radius: 8px;
  }
`;