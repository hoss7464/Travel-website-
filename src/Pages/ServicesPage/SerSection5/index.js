import React from "react";
import "./SerSection5.css"
import {
  SerSection5Container,
  SerSection5HeaderContainer,
  SerSectionFormContainer,
  SerSection5Form,
  SerInputMainContainer,
} from "./SerSection5Elements";
import {
  SectionHeaderTextContainer,
  SectionHeaderTextWrapper,
  SectionHeaderText,
  SectionSubheaderWrapper,
  SectionSubheaderText,
} from "../../../Components/Text/HeaderSubheaderSectionText";
import {
  FormBtnInoutContainer,
  FormBtn,
} from "../../../Components/Buttons/ServicesPage/ServicesBtnElements";
import ServiceInput from "../../../Components/Inputs/ServicePage";
import { ServicePageText } from "../../../Helpers/ServicePageData";
import MyFamilySvg from "../../../Assets/Svg/FamilyIcon.svg";
import MyLocationSvg from "../../../Assets/Svg/LocationIcon.svg";
import MyDateTimeSvg from "../../../Assets/Svg/DateIcon.svg";
import MyClockSvg from "../../../Assets/Svg/ClockIcon.svg";

const SerSection5 = () => {
  function preventFunc (e) {
    e.preventDefault()
  }
  return (
    <>
      <SerSection5Container>
        <SerSection5HeaderContainer>
          <SectionHeaderTextContainer>
            <SectionHeaderTextWrapper>
              <SectionHeaderText>{ServicePageText.text8}</SectionHeaderText>
            </SectionHeaderTextWrapper>
            <SectionSubheaderWrapper>
              <SectionSubheaderText>
                {ServicePageText.text9}
              </SectionSubheaderText>
            </SectionSubheaderWrapper>
          </SectionHeaderTextContainer>
        </SerSection5HeaderContainer>
        <SerSectionFormContainer className="ser-section5-bg">
          <SerSection5Form>
            <SerInputMainContainer>
              <ServiceInput
                serInputAlt="Travelers"
                serInputSrc={MyFamilySvg}
                serInputText="Travelers"
                serInputPlaceHolder="2 travelers, 1 room"
                serInputClass="input-wrapper-margin"
              />
            </SerInputMainContainer>

            <SerInputMainContainer>
              <ServiceInput
                serInputAlt="Going to "
                serInputSrc={MyLocationSvg}
                serInputText="Going to "
                serInputPlaceHolder="city"
                serInputClass="input-wrapper-margin"
              />
            </SerInputMainContainer>

            <SerInputMainContainer>
              <ServiceInput
                serInputAlt="Departing between"
                serInputSrc={MyDateTimeSvg}
                serInputText="Departing between"
                serInputPlaceHolder="Date"
                serInputClass="input-wrapper-margin"
                isFlash
              />
            </SerInputMainContainer>

            <SerInputMainContainer>
              <ServiceInput
                serInputAlt="Duration "
                serInputSrc={MyClockSvg}
                serInputText="Duration "
                serInputPlaceHolder="3-9 nights"
                serInputClass="input-wrapper-margin"
                isFlash
              />
            </SerInputMainContainer>
            <FormBtnInoutContainer>
              <FormBtn type="submit" onClick={preventFunc} >Search</FormBtn>
            </FormBtnInoutContainer>
          </SerSection5Form>
        </SerSectionFormContainer>
      </SerSection5Container>
    </>
  );
};

export default SerSection5;
