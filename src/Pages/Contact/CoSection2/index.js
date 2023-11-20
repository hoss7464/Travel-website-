import React from "react";
import {
  CoSection2Container,
  CoSection2HeaderContainer,
  CoSection2ContentContainer,
  CoSection2InputWrapper,
  CoSection2PictureWrapper,
  CoSection2FormWrapper,
  CoSection2FormHeaderWrapper,
  CoSection2FormHeader,
  CoSection2FormSection1,
  CoSection2FormSection2,
  CoSection2BtnWrapper,
  Cosection2InputWrapper,
  CoSection2InputTextWrapper,
  CoSection2InputText,
  CoSection2InputTextSpan,
  CoSection2InputFieldWrapper,
  CoSection2InputField1,
  CoSection2InputField2,
  CoSection2TextArea,
  CoSection2PictureWrapper2,
  CoSection2Picture
} from "./CoSection2Elements";
import {
  SectionHeaderTextContainer,
  SectionHeaderTextWrapper,
  SectionHeaderText,
  SectionSubheaderWrapper,
  SectionSubheaderText,
} from "../../../Components/Text/HeaderSubheaderSectionText";
import { FormBtnInoutContainer, FormBtn } from "../../../Components/Buttons/ServicesPage/ServicesBtnElements";
import { ContactPageText } from "../../../Helpers/ContactPageData";
import MyBigMapSvg from "../../../Assets/Svg/BigMap.svg"

const CoSection2 = () => {
  function preventFunc (e) {
    e.preventDefault()
  }
  return (
    <>
      <CoSection2Container>
        <CoSection2HeaderContainer>
        <SectionHeaderTextContainer>
            <SectionHeaderTextWrapper>
              <SectionHeaderText>{ContactPageText.text18}</SectionHeaderText>
            </SectionHeaderTextWrapper>
            <SectionSubheaderWrapper>
              <SectionSubheaderText>
              {ContactPageText.text19}
              </SectionSubheaderText>
            </SectionSubheaderWrapper>
          </SectionHeaderTextContainer>
        </CoSection2HeaderContainer>
        <CoSection2ContentContainer>
          <CoSection2InputWrapper>
            <CoSection2FormWrapper>
              <CoSection2FormHeaderWrapper>
                <CoSection2FormHeader>{ContactPageText.text20}</CoSection2FormHeader>
              </CoSection2FormHeaderWrapper>
              <CoSection2FormSection1>
                <Cosection2InputWrapper>
                  <CoSection2InputTextWrapper>
                    <CoSection2InputText>{ContactPageText.text21}</CoSection2InputText>
                  </CoSection2InputTextWrapper>
                  <CoSection2InputFieldWrapper>
                    <CoSection2InputField1 placeholder={ContactPageText.text22} />
                  </CoSection2InputFieldWrapper>
                </Cosection2InputWrapper>

                <Cosection2InputWrapper>
                  <CoSection2InputTextWrapper>
                    <CoSection2InputText>{ContactPageText.text23}</CoSection2InputText>
                  </CoSection2InputTextWrapper>
                  <CoSection2InputFieldWrapper>
                    <CoSection2InputField1 placeholder={ContactPageText.text24} />
                  </CoSection2InputFieldWrapper>
                </Cosection2InputWrapper>

              </CoSection2FormSection1>
              <CoSection2FormSection2>
              <Cosection2InputWrapper>
                  <CoSection2InputTextWrapper>
                    <CoSection2InputText>{ContactPageText.text25}</CoSection2InputText>
                  </CoSection2InputTextWrapper>
                  <CoSection2InputFieldWrapper>
                    <CoSection2InputField2 placeholder={ContactPageText.text26} />
                  </CoSection2InputFieldWrapper>
                </Cosection2InputWrapper>

                <Cosection2InputWrapper>
                  <CoSection2InputTextWrapper>
                    <CoSection2InputText>{ContactPageText.text27}</CoSection2InputText>
                  </CoSection2InputTextWrapper>
                  <CoSection2InputFieldWrapper>
                    <CoSection2InputField2 placeholder={ContactPageText.text28} />
                  </CoSection2InputFieldWrapper>
                </Cosection2InputWrapper>

                <Cosection2InputWrapper>
                  <CoSection2InputTextWrapper>
                    <CoSection2InputText>{ContactPageText.text29}
                    <CoSection2InputTextSpan>{ContactPageText.text30}</CoSection2InputTextSpan>
                    </CoSection2InputText>
                  </CoSection2InputTextWrapper>
                  <CoSection2InputFieldWrapper>
                    <CoSection2InputField2 placeholder={ContactPageText.text31} />
                  </CoSection2InputFieldWrapper>
                </Cosection2InputWrapper>

                <Cosection2InputWrapper>
                  <CoSection2InputTextWrapper>
                    <CoSection2InputText>{ContactPageText.text32}</CoSection2InputText>
                  </CoSection2InputTextWrapper>
                  <CoSection2InputFieldWrapper>
                    <CoSection2TextArea placeholder={ContactPageText.text33} />
                  </CoSection2InputFieldWrapper>
                </Cosection2InputWrapper>
              </CoSection2FormSection2>

              <CoSection2BtnWrapper>
              <FormBtnInoutContainer>
              <FormBtn type="submit" onClick={preventFunc} >Search</FormBtn>
            </FormBtnInoutContainer>
              </CoSection2BtnWrapper>
            </CoSection2FormWrapper>
          </CoSection2InputWrapper>
          <CoSection2PictureWrapper>
           <CoSection2PictureWrapper2>
            <CoSection2Picture alt={ContactPageText.text34} src={MyBigMapSvg} />
           </CoSection2PictureWrapper2>
          </CoSection2PictureWrapper>
        </CoSection2ContentContainer>
      </CoSection2Container>
    </>
  );
};

export default CoSection2;
