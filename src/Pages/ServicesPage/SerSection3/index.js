import React, { useState } from "react";
import "./SerSection3.css";
import {
  SerSection3Container,
  SerSection3HeaderContainer,
  SerSectionFormContainer,
  SerSection3Form,
  SerFormHeaderWrapper,
  SerFormHeaderWrapper2,
  SerInputSection1,
  SerInputSection2,
  SerInputSection2HeaderWrapper,
  SerInputSection2Header,
  SerInputSection2Row1,
  SerInputSection2Row2,
  SerInputMainContainer,
  SerMediaButtonWrapper,
  SerMediaWrapper,
  SerMediaWrapper2,
  SerMedia,
  SerListFlashWrapper,
  SerInputListFlash,
} from "./SerSection3Elements";
import {
  SectionHeaderTextContainer,
  SectionHeaderTextWrapper,
  SectionHeaderText,
  SectionSubheaderWrapper,
  SectionSubheaderText,
} from "../../../Components/Text/HeaderSubheaderSectionText";
import { ServicePageText } from "../../../Helpers/ServicePageData";
import { NavLink, Outlet } from "react-router-dom";
import ServiceInput from "../../../Components/Inputs/ServicePage";
import MyPeopleSvg from "../../../Assets/Svg/FamilyIcon.svg";
import MyLocationSvg from "../../../Assets/Svg/LocationIcon.svg";
import MyDateSvg from "../../../Assets/Svg/DateIcon.svg";
import { ServiceMediaData } from "../../../Helpers/ServicePageData";
import {
  FormBtnInoutContainer,
  FormBtn,
} from "../../../Components/Buttons/ServicesPage/ServicesBtnElements";
import MyFlashSvg from "../../../Assets/Svg/DownFlash.svg";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";

const SerSection3 = () => {
  const [isOpen, setIsOpen] = useState(false);

  function myOpen() {
    setIsOpen(!isOpen);
  }

  function preventFunc (e) {
    e.preventDefault()
  }

  return (
    <>
      <SerSection3Container>
        <SerSection3HeaderContainer>
          <SectionHeaderTextContainer>
            <SectionHeaderTextWrapper>
              <SectionHeaderText>{ServicePageText.text15}</SectionHeaderText>
            </SectionHeaderTextWrapper>
            <SectionSubheaderWrapper>
              <SectionSubheaderText>
                {ServicePageText.text16}
              </SectionSubheaderText>
            </SectionSubheaderWrapper>
          </SectionHeaderTextContainer>
        </SerSection3HeaderContainer>
        <SerSectionFormContainer className="ser-section3-bg">
          <SerSection3Form>
            <SerFormHeaderWrapper>
              <SerFormHeaderWrapper2>
                <NavLink
                  to="One-way"
                  className={({ isActive }) =>
                    isActive ? "active" : "my-nav-link"
                  }
                >
                  {ServicePageText.text17}
                </NavLink>
              </SerFormHeaderWrapper2>
              <SerFormHeaderWrapper2>
                <NavLink
                  to="Round-trip"
                  className={({ isActive }) =>
                    isActive ? "active" : "my-nav-link"
                  }
                >
                  {ServicePageText.text18}
                </NavLink>
              </SerFormHeaderWrapper2>
              <SerFormHeaderWrapper2>
                <NavLink
                  to="Multi-city"
                  className={({ isActive }) =>
                    isActive ? "active" : "my-nav-link"
                  }
                >
                  {ServicePageText.text19}
                </NavLink>
              </SerFormHeaderWrapper2>

              <List className="list-container">
                <ListItemButton onClick={myOpen} className="list-item-ntn">
                  <ListItemText className="list-item-text ho">
                    {ServicePageText.text22}
                  </ListItemText>
                  <SerListFlashWrapper>
                    <SerInputListFlash alt="myFlash" src={MyFlashSvg} />
                  </SerListFlashWrapper>
                </ListItemButton>
                <Collapse
                  in={isOpen}
                  timeout="auto"
                  unmountOnExit
                  className="option-list"
                >
                  <List component="div" disablePadding>
                    <ListItemButton className="list-item-ntn">
                      <NavLink
                        to="One-way"
                        className={({ isActive }) =>
                          isActive ? "active" : "my-nav-link"
                        }
                        autoCorrect="autoCorrect"
                      >
                        {ServicePageText.text17}
                      </NavLink>
                    </ListItemButton>
                    <ListItemButton className="list-item-ntn">
                      <NavLink
                        to="Round-trip"
                        className={({ isActive }) =>
                          isActive ? "active" : "my-nav-link"
                        }
                      >
                        {ServicePageText.text18}
                      </NavLink>
                    </ListItemButton>
                    <ListItemButton className="list-item-ntn">
                      <NavLink
                        to="Multi-city"
                        className={({ isActive }) =>
                          isActive ? "active" : "my-nav-link"
                        }
                      >
                        {ServicePageText.text19}
                      </NavLink>
                    </ListItemButton>
                  </List>
                </Collapse>
              </List>
            </SerFormHeaderWrapper>
            <SerInputSection1>
              <SerInputMainContainer>
                <ServiceInput
                  serInputAlt="Travelers"
                  serInputSrc={MyPeopleSvg}
                  serInputText="Travelers"
                  serInputPlaceHolder="2 travelers, 1 room"
                  serInputClass="input-wrapper-margin"
                />
              </SerInputMainContainer>
            </SerInputSection1>
            <SerInputSection2>
              <SerInputSection2HeaderWrapper>
                <SerInputSection2Header>
                  {ServicePageText.text20}
                </SerInputSection2Header>
              </SerInputSection2HeaderWrapper>
              <SerInputSection2Row1>
                <SerInputMainContainer className="ser-input-section2-row1-margin">
                  <ServiceInput
                    serInputAlt="Leaving from "
                    serInputSrc={MyLocationSvg}
                    serInputText="Leaving from "
                    serInputPlaceHolder="City..."
                    serInputClass="input-wrapper-margin"
                  />
                </SerInputMainContainer>
                <SerInputMainContainer>
                  <ServiceInput
                    serInputAlt="Going to "
                    serInputSrc={MyLocationSvg}
                    serInputText="Going to "
                    serInputPlaceHolder="City..."
                    serInputClass="input-wrapper-margin"
                  />
                </SerInputMainContainer>
              </SerInputSection2Row1>
              <SerInputSection2Row2>
                <SerInputMainContainer>
                  <ServiceInput
                    serInputAlt="Dates"
                    serInputSrc={MyDateSvg}
                    serInputText="Dates"
                    serInputPlaceHolder="Dates"
                    serInputClass="input-wrapper-margin"
                    isFlash
                  />
                </SerInputMainContainer>
              </SerInputSection2Row2>
            </SerInputSection2>
            <Outlet />
            <SerMediaButtonWrapper>
              <SerMediaWrapper>
                {ServiceMediaData.map((serData) => {
                  return (
                    <SerMediaWrapper2>
                      <SerMedia alt={serData.myAlt} src={serData.mySrc} />
                    </SerMediaWrapper2>
                  );
                })}
              </SerMediaWrapper>
              <FormBtnInoutContainer>
                <FormBtn type="submit" onClick={preventFunc} >Search</FormBtn>
              </FormBtnInoutContainer>
            </SerMediaButtonWrapper>
          </SerSection3Form>
        </SerSectionFormContainer>
      </SerSection3Container>
    </>
  );
};

export default SerSection3;
