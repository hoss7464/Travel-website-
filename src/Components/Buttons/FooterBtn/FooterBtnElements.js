import styled from "styled-components";
import { Link } from "react-router-dom";
import { ColorPalette } from "../../../Core-Ui/Colors/Colors";

export const FooterInputBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${ColorPalette.darkPrimaryColor};
  position: absolute;
  right: 0.5rem;

  @media only screen and (min-width: 280px) and (max-width: 576px) {
    border-radius: 4px;
    padding: 8px 16px;
  }

  @media only screen and (min-width: 577px) and (max-width: 768px) {
    border-radius: 4px;
    padding: 8px 16px;
  }

  @media only screen and (min-width: 769px) and (max-width: 992px) {
    border-radius: 4px;
    padding: 4px 8px;
  }

  @media only screen and (min-width: 993px) and (max-width: 1024px) {
    border-radius: 8px;
    padding: 8px 16px;
  }

  @media only screen and (min-width: 1025px) and (max-width: 1280px) {
    border-radius: 8px;
    padding: 8px 16px;
  }

  @media only screen and (min-width: 1281px) and (max-width: 1440px) {
    border-radius: 8px;
    padding: 8px 16px;
  }

  @media only screen and (min-width: 1441px) and (max-width: 1920px) {
    border-radius: 8px;
    padding: 8px 16px;
  }

  @media only screen and (min-width: 1921px) {
    border-radius: 8px;
    padding: 8px 16px;
  }
`;
export const FooterInputBtn = styled(Link)`
  color: ${ColorPalette.darkFontColor};
  font-weight: 900;

  @media only screen and (min-width: 280px) and (max-width: 576px) {
    font-size: 12px;
  }

  @media only screen and (min-width: 577px) and (max-width: 768px) {
    font-size: 12px;
  }

  @media only screen and (min-width: 769px) and (max-width: 992px) {
    font-size: 12px;
  }

  @media only screen and (min-width: 993px) and (max-width: 1024px) {
    font-size: 12px;
  }

  @media only screen and (min-width: 1025px) and (max-width: 1280px) {
    font-size: 12px;
  }

  @media only screen and (min-width: 1281px) and (max-width: 1440px) {
    font-size: 16px;
  }

  @media only screen and (min-width: 1441px) and (max-width: 1920px) {
    font-size: 16px;
  }

  @media only screen and (min-width: 1921px) {
    font-size: 16px;
  }
`;
