import styled from "styled-components";
import { ColorPalette } from "../../../Core-Ui/Colors/Colors";

export const FormBtnInoutContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 4px;
 
`;

export const FormBtn = styled.button`
  background-color: ${ColorPalette.mediumSecondaryColor};
  border-radius: 4px;
  border: none;
  color: ${ColorPalette.darkFontColor};
  font-weight: 500;
  cursor: pointer;

  @media only screen and (min-width: 280px) and (max-width: 992px) {
    padding: 0.5rem 1rem;
    font-size: 12px;
  }

  @media only screen and (min-width: 993px) and (max-width: 1024px) {
    padding: 0.5rem 1.5rem;
    font-size: 12px;
  }

  @media only screen and (min-width: 1025px) {
    padding: 0.5rem 1.5rem;
    font-size: 16px;
  }
`;
