import styled from "styled-components";
import { Link } from "react-router-dom";
import { ColorPalette } from "../../Core-Ui/Colors/Colors";

export const NavbarContainer = styled.div`
  width: 100%;
  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(10px);
  position: fixed;
  z-index: 1000;
  @media only screen and (min-width: 280px) and (max-width: 576px) {
    padding: 0 24px 0 24px;
    height: 80px;
  }

  @media only screen and (min-width: 577px) and (max-width: 768px) {
    padding: 0 40px 0 40px;
    height: 80px;
  }

  @media only screen and (min-width: 769px) and (max-width: 992px) {
    padding: 0 56px 0 56px;
    height: 80px;
  }

  @media only screen and (min-width: 993px) and (max-width: 1024px) {
    padding: 0 72px 0 72px;
    height: 80px;
  }

  @media only screen and (min-width: 1025px) and (max-width: 1280px) {
    padding: 0 88px 0 88px;
    height: 80px;
  }

  @media only screen and (min-width: 1281px) and (max-width: 1440px) {
    padding: 0 104px 0 104px;
    height: 80px;
  }

  @media only screen and (min-width: 1441px) and (max-width: 1920px) {
    padding: 0 168px 0 168px;
    height: 80px;
  }

  @media only screen and (min-width: 1921px) {
    padding: 0 232px 0 232px;
    height: 124px;
  }
`;

export const NavbarActiveArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: 100%;
`;

export const MenuAndLogoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  @media only screen and (min-width: 280px) and (max-width: 576px) {
    height: 5rem;
  }

  @media only screen and (min-width: 577px) and (max-width: 768px) {
    height: 3.69rem;
  }

  @media only screen and (min-width: 769px) and (max-width: 992px) {
    height: 3.44rem;
    width: 29.56rem;
  }

  @media only screen and (min-width: 993px) and (max-width: 1024px) {
    height: 3.25rem;
    width: 29.38rem;
  }

  @media only screen and (min-width: 1025px) and (max-width: 1280px) {
    height: 3.25rem;
    width: 29.38rem;
  }

  @media only screen and (min-width: 1281px) and (max-width: 1440px) {
    height: 3.69rem;
    width: 30.56rem;
  }

  @media only screen and (min-width: 1441px) and (max-width: 1920px) {
    height: 3.69rem;
    width: 30.75rem;
  }

  @media only screen and (min-width: 1921px) {
    height: 6.75rem;
    width: 47.06rem;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100px;
`;

export const MyLogo = styled.img`
  @media only screen and (min-width: 280px) and (max-width: 576px) {
    width: 3.25rem;
    height: 3.25rem;
  }

  @media only screen and (min-width: 577px) and (max-width: 768px) {
    width: 59px;
    height: 59px;
  }

  @media only screen and (min-width: 769px) and (max-width: 992px) {
    width: 3.44rem;
    height: 3.44rem;
  }

  @media only screen and (min-width: 993px) and (max-width: 1024px) {
    width: 3.25rem;
    height: 3.25rem;
  }

  @media only screen and (min-width: 1025px) and (max-width: 1280px) {
    width: 3.25rem;
    height: 3.25rem;
  }

  @media only screen and (min-width: 1281px) and (max-width: 1440px) {
    width: 3.69rem;
    height: 3.69rem;
  }

  @media only screen and (min-width: 1441px) and (max-width: 1920px) {
    width: 3.69rem;
    height: 3.69rem;
  }

  @media only screen and (min-width: 1921px) {
    width: 5.56rem;
    height: 5.56rem;
  }
`;
export const MenuItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  height: 100%;

  @media only screen and (min-width: 280px) and (max-width: 576px) {
    display: none;
  }

  @media only screen and (min-width: 577px) and (max-width: 768px) {
    display: none;
  }

  @media only screen and (min-width: 769px) and (max-width: 992px) {
    width: 24.88rem;
  }

  @media only screen and (min-width: 993px) and (max-width: 1024px) {
    width: 24.88rem;
  }

  @media only screen and (min-width: 1025px) and (max-width: 1280px) {
    width: 24.88rem;
  }

  @media only screen and (min-width: 1281px) and (max-width: 1440px) {
    width: 24.88rem;
  }

  @media only screen and (min-width: 1441px) and (max-width: 1920px) {
    width: 24rem;
  }

  @media only screen and (min-width: 1921px) {
    width: 36rem;
  }
`;

export const LinkWrapper = styled.div`
  border-radius: 8px;
  cursor: pointer;
`;

export const NavbarLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  transition: all 0.2s ease-in-out;
  border-radius: 8px;
  font-weight: 400;
  color: ${ColorPalette.darkFontColor};

  @media only screen and (min-width: 769px) and (max-width: 992px) {
    font-size: 16px;
    padding: 8px 16px;
  }

  @media only screen and (min-width: 993px) and (max-width: 1024px) {
    font-size: 16px;
    padding: 8px 24px;
  }

  @media only screen and (min-width: 1025px) and (max-width: 1280px) {
    font-size: 16px;
    padding: 8px 24px;
  }

  @media only screen and (min-width: 1281px) and (max-width: 1440px) {
    font-size: 16px;
    padding: 16px 24px;
  }

  @media only screen and (min-width: 1441px) and (max-width: 1920px) {
    font-size: 16px;
    padding: 16px 24px;
  }

  @media only screen and (min-width: 1921px) {
    font-size: 24px;
    padding: 16px 24px;
  }
`;

export const SignInUpContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  height: 100%;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

export const SignUpInLinkWrapper = styled.div`
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const HamburgerIconContainer = styled.div`
  height: 100%;

  @media only screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media only screen and (min-width: 769px) {
    display: none;
  }
`;

export const HamburgerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HamburgerIcon = styled.img`
  cursor: pointer;
  @media only screen and (min-width: 280px) and (max-width: 576px) {
    width: 52px;
    height: 52px;
  }

  @media only screen and (min-width: 577px) and (max-width: 768px) {
    width: 59px;
    height: 59px;
  }
`;
