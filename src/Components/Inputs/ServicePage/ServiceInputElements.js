import styled from "styled-components";
import { ColorPalette } from "../../../Core-Ui/Colors/Colors";

export const ServiceInputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
`;
export const ServiceIconTextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;

  @media only screen and (min-width: 280px) and (max-width: 1024px) {
    margin-bottom: 1rem;
  }

  @media only screen and (min-width: 1025px) {
    margin-bottom: 1.5rem;
  }
`;

export const ServiceIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 0.5rem;
`;

export const ServiceIcon = styled.img`
  @media only screen and (min-width: 280px) and (max-width: 992px) {
    width: 32px;
    height: 32px;
  }

  @media only screen and (min-width: 993px) and (max-width: 1024px) {
    width: 40px;
    height: 40px;
  }

  @media only screen and (min-width: 1025px) {
    width: 48px;
    height: 48px;
  }
`;

export const ServiceTextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ServiceInputText = styled.p`
  color: ${ColorPalette.darkFontColor};
  font-weight: 600;

  @media only screen and (min-width: 280px) and (max-width: 992px) {
    font-size: 12px;
  }

  @media only screen and (min-width: 993px) {
    font-size: 16px;
  }
`;
export const ServiceInputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ServiceInputWrapper2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  @media only screen and (min-width: 280px) and (max-width: 576px) {
    width: 12.5rem;
    height: 2rem;
    border-radius: 4px;
  }

  @media only screen and (min-width: 577px) and (max-width: 992px) {
    width: 10.88rem;
    height: 2rem;
    border-radius: 4px;
  }

  @media only screen and (min-width: 993px) and (max-width: 1024px) {
    width: 14.88rem;
    height: 2.5rem;
    border-radius: 4px;
  }

  @media only screen and (min-width: 1025px) {
    width: 18.81rem;
    height: 3rem;
    border-radius: 8px;
  }
`;
export const ServiceInputEl = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  background-color: ${ColorPalette.lightPrimaryColor};
  padding-left: 0.5rem;
`;
export const ServiceFlashWrapper = styled.div`
  right: 0.5rem;
  position: absolute;
  cursor: pointer;
`;

export const ServiceInputFlash = styled.img`
  @media only screen and (min-width: 280px) and (max-width: 992px) {
    width: 12px;
    height: 11px;
  }

  @media only screen and (min-width: 993px) {
    width: 16px;
    height: 15px;
  }
`;
