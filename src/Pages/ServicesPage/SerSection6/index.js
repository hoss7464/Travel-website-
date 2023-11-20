import React from "react";
import {
  SerSection6Container,
  SerSection6HeaderContainer,
  SerSection6ContentContainer,
  SerSection6LeftTextContainer,
  SerSection6LeftText,
  SerSection6RightInputTextContainer,
  SerSection6RightTextWrapper,
  SerSection6RightText,
  SerSection6InputContainer,
  SerSection6Input,
} from "./SerSection6Elements";
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
import { ServicePageText } from "../../../Helpers/ServicePageData";

const SerSection6 = () => {
  function preventFunc (e) {
    e.preventDefault()
  }
  return (
    <>
      <SerSection6Container>
        <SerSection6HeaderContainer>
          <SectionHeaderTextContainer>
            <SectionHeaderTextWrapper>
              <SectionHeaderText>{ServicePageText.text10}</SectionHeaderText>
            </SectionHeaderTextWrapper>
            <SectionSubheaderWrapper>
              <SectionSubheaderText>
                {ServicePageText.text11}
              </SectionSubheaderText>
            </SectionSubheaderWrapper>
          </SectionHeaderTextContainer>
        </SerSection6HeaderContainer>
        <SerSection6ContentContainer>
          <SerSection6LeftTextContainer>
            <SerSection6LeftText>{ServicePageText.text12}</SerSection6LeftText>
          </SerSection6LeftTextContainer>
          <SerSection6RightInputTextContainer>
            <SerSection6RightTextWrapper>
              <SerSection6RightText>
                {ServicePageText.text13}
              </SerSection6RightText>
            </SerSection6RightTextWrapper>
            <SerSection6InputContainer>
              <SerSection6Input placeholder={ServicePageText.text14} />
            </SerSection6InputContainer>
            <FormBtnInoutContainer>
              <FormBtn type="submit" onClick={preventFunc} >Submit</FormBtn>
            </FormBtnInoutContainer>
          </SerSection6RightInputTextContainer>
        </SerSection6ContentContainer>
      </SerSection6Container>
    </>
  );
};

export default SerSection6;
