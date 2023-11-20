import React from "react";
import {
  SidebarContainer,
  SidebarWrapper,
  SideLinkContainer,
  SideLink,
} from "./SidebarElements";
import { useLocation } from "react-router-dom";

function Sidebar({ isOpen, toggle }) {
    const Location = useLocation()

  return (
    <>
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <SidebarWrapper>
          <SideLinkContainer>
            <SideLink
              onClick={toggle}
              to="/"
              className={Location.pathname === "/" ? "active-color" : null}
            >
              Home
            </SideLink>
            <SideLink
              onClick={toggle}
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
              Services
            </SideLink>
            <SideLink
              onClick={toggle}
              to="/Contact"
              className={
                Location.pathname === "/Contact" ? "active-color" : null
              }
            >
              Contact
            </SideLink>
            <SideLink
              onClick={toggle}
              to="/About"
              className={
                Location.pathname === "/About" ? "active-color" : null
              }
            >
              About
            </SideLink>
          </SideLinkContainer>
        </SidebarWrapper>
      </SidebarContainer>
    </>
  );
}

export default Sidebar;
