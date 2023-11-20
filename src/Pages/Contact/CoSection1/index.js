import React from "react";
import "./CoSection1.css";
import {
  CoSection1Container,
  FloatBgBox,
  CoSection1Wrapper,
  CoSection1ActiveArea,
  CirclePersonContainer,
  CoSection1ContentContainer,
  ContactInfoContainer,
  ContactInfoWrapper,
  ContactInfoHeaderIconTextWrapper,
  ContactInfoHeaderIconWrapper,
  ContactInfoIconWrapper,
  ContactInfoIcon1,
  ContactInfoIcon2,
  ContactInfoIcon3,
  ContactInfoHeaderWrapper,
  ContactInfoHeader,
  ContactInfoTextWrapper,
  ContactInfoText,
  ContactSocialMediaWrapper1,
  ContactSocialMediaWrapper2,
  ContactSocialMediaImg,
  CoHeaderSubheaderPictureWrapper,
  CoHeaderSubheaderWrapper,
  CoHeaderWrapper,
  CoHeader,
  CoHeaderSpan,
  CoSubheaderWrapper,
  CoSubheader,
  CoBigSvgWrapper,
  CoBigSvg,
} from "./CoSection1Elements";
import { ContactPageText } from "../../../Helpers/ContactPageData";
import MyEmailSvg from "../../../Assets/Svg/EmailSvg.svg";
import MyOfficeSvg from "../../../Assets/Svg/OfficeSvg.svg";
import MyPhoneSvg from "../../../Assets/Svg/PhoneSvg.svg";
import { ContactSocialMediaData } from "../../../Helpers/ContactPageData";
import MyCoSvg1 from "../../../Assets/Svg/CoSvg1.svg"

const CoSection1 = () => {
  return (
    <>
      <CoSection1Container className="co-container-bg">
        <FloatBgBox className="float-box-bg" />
        <CoSection1Wrapper>
          <CoSection1ActiveArea>
            <CirclePersonContainer className="circle-person-bg" />
            <CoSection1ContentContainer>
              <ContactInfoContainer>
                <ContactInfoWrapper>

                <CoHeaderSubheaderWrapper className="phone-header-subheader" >
                  <CoHeaderWrapper>
                    <CoHeader>
                    {ContactPageText.text14}
                    <CoHeaderSpan>{ContactPageText.text15}</CoHeaderSpan>
                    </CoHeader>
                  </CoHeaderWrapper>
                  <CoSubheaderWrapper>
                    <CoSubheader>{ContactPageText.text16}</CoSubheader>
                  </CoSubheaderWrapper>
                </CoHeaderSubheaderWrapper>

                  <ContactInfoHeaderIconTextWrapper>
                    <ContactInfoHeaderIconWrapper>
                      <ContactInfoIconWrapper>
                        <ContactInfoIcon1
                          alt={ContactPageText.text1}
                          src={MyEmailSvg}
                        />
                      </ContactInfoIconWrapper>
                      <ContactInfoHeaderWrapper>
                        <ContactInfoHeader>
                          {ContactPageText.text2}
                        </ContactInfoHeader>
                      </ContactInfoHeaderWrapper>
                    </ContactInfoHeaderIconWrapper>
                    <ContactInfoTextWrapper>
                      <ContactInfoText>{ContactPageText.text3}</ContactInfoText>
                    </ContactInfoTextWrapper>
                  </ContactInfoHeaderIconTextWrapper>

                  <ContactInfoHeaderIconTextWrapper>
                    <ContactInfoHeaderIconWrapper>
                      <ContactInfoIconWrapper>
                        <ContactInfoIcon2
                          alt={ContactPageText.text4}
                          src={MyOfficeSvg}
                        />
                      </ContactInfoIconWrapper>
                      <ContactInfoHeaderWrapper>
                        <ContactInfoHeader>
                          {ContactPageText.text5}
                        </ContactInfoHeader>
                      </ContactInfoHeaderWrapper>
                    </ContactInfoHeaderIconWrapper>
                    <ContactInfoTextWrapper>
                      <ContactInfoText>{ContactPageText.text6}</ContactInfoText>
                    </ContactInfoTextWrapper>
                    <ContactInfoTextWrapper>
                      <ContactInfoText>{ContactPageText.text7}</ContactInfoText>
                    </ContactInfoTextWrapper>
                    <ContactInfoTextWrapper>
                      <ContactInfoText>{ContactPageText.text8}</ContactInfoText>
                    </ContactInfoTextWrapper>
                  </ContactInfoHeaderIconTextWrapper>

                  <ContactInfoHeaderIconTextWrapper>
                    <ContactInfoHeaderIconWrapper>
                      <ContactInfoIconWrapper>
                        <ContactInfoIcon3
                          alt={ContactPageText.text9}
                          src={MyPhoneSvg}
                        />
                      </ContactInfoIconWrapper>
                      <ContactInfoHeaderWrapper>
                        <ContactInfoHeader>
                          {ContactPageText.text10}
                        </ContactInfoHeader>
                      </ContactInfoHeaderWrapper>
                    </ContactInfoHeaderIconWrapper>
                    <ContactInfoTextWrapper>
                      <ContactInfoText>
                        {ContactPageText.text11}
                      </ContactInfoText>
                    </ContactInfoTextWrapper>
                    <ContactInfoTextWrapper>
                      <ContactInfoText>
                        {ContactPageText.text12}
                      </ContactInfoText>
                    </ContactInfoTextWrapper>
                  </ContactInfoHeaderIconTextWrapper>

                  <ContactInfoHeaderIconTextWrapper>
                    <ContactInfoHeaderIconWrapper>
                      <ContactInfoHeaderWrapper>
                        <ContactInfoHeader>
                          {ContactPageText.text13}
                        </ContactInfoHeader>
                      </ContactInfoHeaderWrapper>
                    </ContactInfoHeaderIconWrapper>
                    <ContactSocialMediaWrapper1>
                      {ContactSocialMediaData.map((CoData1) => {
                        return (
                          <ContactSocialMediaWrapper2>
                            <ContactSocialMediaImg
                              alt={CoData1.myAlt}
                              src={CoData1.mySrc}
                            />
                          </ContactSocialMediaWrapper2>
                        );
                      })}
                    </ContactSocialMediaWrapper1>
                  </ContactInfoHeaderIconTextWrapper>
                </ContactInfoWrapper>
              </ContactInfoContainer>
              <CoHeaderSubheaderPictureWrapper>
                <CoHeaderSubheaderWrapper>
                  <CoHeaderWrapper>
                    <CoHeader>
                    {ContactPageText.text14}
                    <CoHeaderSpan>{ContactPageText.text15}</CoHeaderSpan>
                    </CoHeader>
                  </CoHeaderWrapper>
                  <CoSubheaderWrapper>
                    <CoSubheader>{ContactPageText.text16}</CoSubheader>
                  </CoSubheaderWrapper>
                </CoHeaderSubheaderWrapper>
                <CoBigSvgWrapper>
                  <CoBigSvg alt={ContactPageText.text17} src={MyCoSvg1} />
                </CoBigSvgWrapper>
              </CoHeaderSubheaderPictureWrapper>
            </CoSection1ContentContainer>
          </CoSection1ActiveArea>
        </CoSection1Wrapper>
      </CoSection1Container>
    </>
  );
};

export default CoSection1;
