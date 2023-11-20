import styled from "styled-components";
import { ColorPalette } from "../../../Core-Ui/Colors/Colors";

export const SerSection3Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
`;

export const SerSection3HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const SerSectionFormContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  @media only screen and (min-width: 280px) and (max-width: 576px) {
    justify-content: center;
    padding: 1rem 0;
  }

  @media only screen and (min-width: 577px) and (max-width: 1280px) {
    justify-content: flex-start;
    padding: 1rem;
    border-radius: 1rem;
  }

  @media only screen and (min-width: 1281px) and (max-width: 1440px) {
    justify-content: flex-start;
    padding: 1.5rem;
    border-radius: 1.5rem;
  }

  @media only screen and (min-width: 1441px) {
    justify-content: flex-start;
    padding: 2rem;
    border-radius: 2rem;
  }
`;

export const SerSection3Form = styled.form`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(20px);

  @media only screen and (min-width: 280px) and (max-width: 1024px) {
    padding: 1rem;
    border-radius: 0.5rem;
  }

  @media only screen and (min-width: 1025px) {
    padding: 1.5rem;
    border-radius: 1rem;
  }
`;

export const SerInputMainContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const SerFormHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media only screen and (min-width: 280px) and (max-width: 576px) {
    margin-bottom: 1rem;
  }

  @media only screen and (min-width: 577px) {
    margin-bottom: 1.5rem;
  }
`;
export const SerFormHeaderWrapper2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (min-width: 280px) and (max-width: 576px) {
    display: none;
  }
`;

export const SerInputSection1 = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const SerInputSection2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
`;

export const SerInputSection2HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;

  @media only screen and (min-width: 280px) and (max-width: 576px) {
    margin-bottom: 1rem;
    align-items: flex-start;
  }

  @media only screen and (min-width: 577px) {
    align-items: center;
    margin-bottom: 1.5rem;
  }
`;
export const SerInputSection2Header = styled.h1`
  color: ${ColorPalette.darkFontColor};
  font-weight: 600;

  @media only screen and (min-width: 280px) and (max-width: 992px) {
    font-size: 12px;
    text-align: left;
  }

  @media only screen and (min-width: 993px) {
    font-size: 16px;
    text-align: center;
  }
`;
export const SerInputSection2Row1 = styled.div`
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
export const SerInputSection2Row2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SerMediaButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  @media only screen and (min-width: 280px) and (max-width: 576px) {
    justify-content: flex-start;
  }

  @media only screen and (min-width: 577px) {
    justify-content: space-between;
  }
`;

export const SerMediaWrapper = styled.div`
  justify-content: center;
  align-items: center;
  flex-direction: row;

  @media only screen and (min-width: 280px) and (max-width: 576px) {
    display: none;
  }

  @media only screen and (min-width: 577px) {
    display: flex;
  }
`;
export const SerMediaWrapper2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (min-width: 280px) and (max-width: 992px) {
    margin-right: 0.5rem;
  }

  @media only screen and (min-width: 993px) {
    margin-right: 1rem;
  }
`;

export const SerMedia = styled.img`
  @media only screen and (min-width: 280px) and (max-width: 992px) {
    width: 24px;
    height: 24px;
  }

  @media only screen and (min-width: 993px) {
    width: 40px;
    height: 40px;
  }
`;

export const SerListFlashWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
  cursor: pointer;
`;

export const SerInputListFlash = styled.img`
  width: 12px;
  height: 11px;
  margin-right: 0.5rem;
`;
