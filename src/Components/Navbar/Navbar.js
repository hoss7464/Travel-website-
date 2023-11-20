import React from "react";
import "./Navbar.css";
import { useLocation } from "react-router-dom";
import {
  NavbarContainer,
  NavbarActiveArea,
  MenuAndLogoContainer,
  MyLogo,
  LogoContainer,
  MenuItemContainer,
  LinkWrapper,
  NavbarLink,
  SignInUpContainer,
  SignUpInLinkWrapper,
  HamburgerIconContainer,
  HamburgerWrapper,
  HamburgerIcon,
} from "./NavbarElements";
import Logo from "../../Assets/Svg/Logo.svg";
import { NavBarText } from "../../Helpers/NavbarData";
import MyHamburgerSvg from "../../Assets/Svg/HamburgerIcon.svg";

const Navbar = ({toggle}) => {
  const Location = useLocation();

  return (
    <>
      <NavbarContainer>
        <NavbarActiveArea>
          <MenuAndLogoContainer>
            <LogoContainer>
              <MyLogo alt="logo" src={Logo} />
            </LogoContainer>
            <MenuItemContainer>
              <LinkWrapper>
                <NavbarLink
                  to="/"
                  className={Location.pathname === "/" ? "active-color" : null}
                >
                  {NavBarText.text1}
                </NavbarLink>
              </LinkWrapper>
              <LinkWrapper>
                <NavbarLink
                  to="/Services"
                  className={`${
                    Location.pathname === "/Services" ? "active-color" : null
                  }
                             ${
                               Location.pathname === "/Services/One-way"
                                 ? "active-color"
                                 : null
                             }
                             ${
                               Location.pathname === "/Services/Round-trip"
                                 ? "active-color"
                                 : null
                             }
                             ${
                               Location.pathname === "/Services/Multi-city"
                                 ? "active-color"
                                 : null
                             }
                  `}
                >
                  {NavBarText.text2}
                </NavbarLink>
              </LinkWrapper>
              <LinkWrapper>
                <NavbarLink
                  to="/Contact"
                  className={
                    Location.pathname === "/Contact" ? "active-color" : null
                  }
                >
                  {NavBarText.text3}
                </NavbarLink>
              </LinkWrapper>
              <LinkWrapper>
                <NavbarLink
                  to="/About"
                  className={
                    Location.pathname === "/About" ? "active-color" : null
                  }
                >
                  {NavBarText.text4}
                </NavbarLink>
              </LinkWrapper>
            </MenuItemContainer>
          </MenuAndLogoContainer>

          <SignInUpContainer>
            <SignUpInLinkWrapper className="signUp-margin-right">
              <NavbarLink to="/">{NavBarText.text5}</NavbarLink>
            </SignUpInLinkWrapper>
            <SignUpInLinkWrapper className="sign-in-background">
              <NavbarLink className="Sign-in" to="/">
                {NavBarText.text6}
              </NavbarLink>
            </SignUpInLinkWrapper>
          </SignInUpContainer>
          <HamburgerIconContainer>
            <HamburgerWrapper onClick={toggle} >
              <HamburgerIcon alt="Hamburger icon" src={MyHamburgerSvg} />
            </HamburgerWrapper>
          </HamburgerIconContainer>
        </NavbarActiveArea>
      </NavbarContainer>
    </>
  );
};

export default Navbar;
