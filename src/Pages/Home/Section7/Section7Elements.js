import styled from "styled-components";
import { ColorPalette } from "../../../Core-Ui/Colors/Colors";

export const Section7Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
`;

export const Section7HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Section7ContentContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Section7TextWrapper = styled.div`
  display: grid;
  width: 100%;
  @media only screen and (min-width: 280px) and (max-width: 768px) {
    gap: 20px;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }

  @media only screen and (min-width: 769px) and (max-width: 992px) {
    gap: 95px;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
  }

  @media only screen and (min-width: 993px) {
    gap: 20px;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
  }
`;

export const Section7LeftTextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-column: 1/2;
  grid-row: 1/2;
`;

export const Section7RightTextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (min-width: 280px) and (max-width: 768px) {
    grid-column: 1/2;
    grid-row: 2/3;
  }

  @media only screen and (min-width: 769px) {
    grid-column: 2/3;
    grid-row: 1/2;
  }
`;

export const Sectin7Text = styled.p`
  color: ${ColorPalette.darkFontColor};
  font-weight: 400;
  text-align: left;

  @media only screen and (min-width: 280px) and (max-width: 768px) {
    font-size: 12px;
  }

  @media only screen and (min-width: 769px) and (max-width: 992px) {
    font-size: 16px;
  }

  @media only screen and (min-width: 993px) {
    font-size: 24px;
  }
`;

export const Section7BtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
