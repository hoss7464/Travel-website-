import React from "react";
import "./SerSection2.css";
import {
  SerSection2Container,
  SerSectionHeaderContainer,
  SerSectionFormContainer,
  SerSectionForm,
  SerInputMainContainer,
} from "./SerSection2Elements";
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
import MyPeopleSvg from "../../../Assets/Svg/FamilyIcon.svg";
import MyDestinationSvg from "../../../Assets/Svg/LocationIcon.svg";
import MyDateSvg from "../../../Assets/Svg/DateIcon.svg";
import { ServicePageText } from "../../../Helpers/ServicePageData";

const SerSection2 = () => {
  function preventFunc (e) {
    e.preventDefault()
  }
  return (
    <>
      <SerSection2Container>
        <SerSectionHeaderContainer>
          <SectionHeaderTextContainer>
            <SectionHeaderTextWrapper>
              <SectionHeaderText>{ServicePageText.text4}</SectionHeaderText>
            </SectionHeaderTextWrapper>
            <SectionSubheaderWrapper>
              <SectionSubheaderText>
                {ServicePageText.text5}
              </SectionSubheaderText>
            </SectionSubheaderWrapper>
          </SectionHeaderTextContainer>
        </SerSectionHeaderContainer>
        <SerSectionFormContainer className="ser-section2-bg">
          <SerSectionForm>
            <SerInputMainContainer>
              <ServiceInput
                serInputAlt="people"
                serInputSrc={MyPeopleSvg}
                serInputText="People"
                serInputPlaceHolder="2 travelers, 1 room"
                serInputClass="input-wrapper-margin"
              />
            </SerInputMainContainer>
            <SerInputMainContainer>
              <ServiceInput
                serInputAlt="Destination"
                serInputSrc={MyDestinationSvg}
                serInputText="Destination"
                serInputPlaceHolder="Destination"
                serInputClass="input-wrapper-margin"
              />
            </SerInputMainContainer>
            <SerInputMainContainer>
              <ServiceInput
                serInputAlt="Date"
                serInputSrc={MyDateSvg}
                serInputText="Date"
                serInputPlaceHolder="Date"
                serInputClass="input-wrapper-margin"
                isFlash
              />
            </SerInputMainContainer>
            <FormBtnInoutContainer>
              <FormBtn type="submit" onClick={preventFunc} >Search</FormBtn>
            </FormBtnInoutContainer>
          </SerSectionForm>
        </SerSectionFormContainer>
      </SerSection2Container>
    </>
  );
};

export default SerSection2;
