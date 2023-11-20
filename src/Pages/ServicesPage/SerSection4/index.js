import React from "react";
import "./SerSection4.css";
import {
  SerSection4Container,
  SerSection4HeaderContainer,
  SerSectionFormContainer,
  SerSection4Form,
  SerInputMainContainer,
} from "./SerSection4Elements";
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
import MyLocationSvg from "../../../Assets/Svg/LocationIcon.svg";
import MyDateTimeSvg from "../../../Assets/Svg/DateIcon.svg";

const SerSection4 = () => {
  function preventFunc (e) {
    e.preventDefault()
  }
  return (
    <>
      <SerSection4Container>
        <SerSection4HeaderContainer>
          <SectionHeaderTextContainer>
            <SectionHeaderTextWrapper>
              <SectionHeaderText>{ServicePageText.text6}</SectionHeaderText>
            </SectionHeaderTextWrapper>
            <SectionSubheaderWrapper>
              <SectionSubheaderText>
                {ServicePageText.text7}
              </SectionSubheaderText>
            </SectionSubheaderWrapper>
          </SectionHeaderTextContainer>
        </SerSection4HeaderContainer>
        <SerSectionFormContainer className="ser-section4-bg">
          <SerSection4Form>
            <SerInputMainContainer>
              <ServiceInput
                serInputAlt="Pick-up"
                serInputSrc={MyLocationSvg}
                serInputText="Pick-up"
                serInputPlaceHolder="Pick-up"
                serInputClass="input-wrapper-margin"
              />
            </SerInputMainContainer>

            <SerInputMainContainer>
              <ServiceInput
                serInputAlt="Same as pick-up"
                serInputSrc={MyLocationSvg}
                serInputText="Same as pick-up"
                serInputPlaceHolder="Same as pick-up"
                serInputClass="input-wrapper-margin"
              />
            </SerInputMainContainer>

            <SerInputMainContainer>
              <ServiceInput
                serInputAlt="Dates"
                serInputSrc={MyDateTimeSvg}
                serInputText="Dates"
                serInputPlaceHolder="Dates"
                serInputClass="input-wrapper-margin"
                isFlash
              />
            </SerInputMainContainer>

            <SerInputMainContainer>
              <ServiceInput
                serInputAlt="Pick-up time"
                serInputSrc={MyDateTimeSvg}
                serInputText="Pick-up time"
                serInputPlaceHolder="Pick-up time"
                serInputClass="input-wrapper-margin"
                isFlash
              />
            </SerInputMainContainer>

            <SerInputMainContainer>
              <ServiceInput
                serInputAlt="Drop-off time"
                serInputSrc={MyDateTimeSvg}
                serInputText="Drop-off time"
                serInputPlaceHolder="Drop-off time"
                serInputClass="input-wrapper-margin"
                isFlash
              />
            </SerInputMainContainer>
            <FormBtnInoutContainer>
              <FormBtn type="submit" onClick={preventFunc} >Search</FormBtn>
            </FormBtnInoutContainer>
          </SerSection4Form>
        </SerSectionFormContainer>
      </SerSection4Container>
    </>
  );
};

export default SerSection4;
