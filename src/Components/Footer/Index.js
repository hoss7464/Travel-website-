import React from "react";
import {
  FooterContainer,
  FooterActiveArea,
  FooterInputIconTextContainer,
  FooterIconTextWrapper,
  FooterIconWrapper,
  FooterIcon,
  FooterTopTextWrapper,
  FooterTopHeaderWrapper,
  FooterTopHeader,
  FooterTopSubheaderWrapper,
  FooterTopSubheader,
  FooterInputWrapper,
  FooterInputWrapper2,
  FooterInput,
  FooterImgTextContainer,
  FooterImgWrapper,
  FooterImg,
  FooterMiddleTextWrapper,
  FooterMiddleTextWrapper2,
  FooterSocialMeadiaCopyContainer1,
  FooterCopyRightWrapper,
  FooterCopyRight,
  FooterSocialMediaWrapper,
  FooterSocialMediaWrapper2,
  FooterSocialMediaWrapper3,
  FooterSocialMediaImg,
} from "./FooterElements";
import MyFooterIcon from "../../Assets/Svg/Logo.svg";
import { FooterTextData } from "../../Helpers/FooterData";
import {
  FooterInputBtnWrapper,
  FooterInputBtn,
} from "../Buttons/FooterBtn/FooterBtnElements";
import MyFooterPerson from "../../Assets/Svg/FooterPerson.svg";
import FooterMiddleText from "./FooterMiddleText";
import { FooterSocialMediaData } from "../../Helpers/FooterData";

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterActiveArea>
          <FooterInputIconTextContainer>
            <FooterIconTextWrapper>
              <FooterIconWrapper>
                <FooterIcon alt="Footer icon" src={MyFooterIcon} />
              </FooterIconWrapper>
              <FooterTopTextWrapper>
                <FooterTopHeaderWrapper>
                  <FooterTopHeader>{FooterTextData.text1}</FooterTopHeader>
                </FooterTopHeaderWrapper>
                <FooterTopSubheaderWrapper>
                  <FooterTopSubheader>
                    {FooterTextData.text2}
                  </FooterTopSubheader>
                </FooterTopSubheaderWrapper>
              </FooterTopTextWrapper>
            </FooterIconTextWrapper>
            <FooterInputWrapper>
              <FooterInputWrapper2>
                <FooterInput placeholder={FooterTextData.text3} />
                <FooterInputBtnWrapper>
                  <FooterInputBtn to="/">Submit</FooterInputBtn>
                </FooterInputBtnWrapper>
              </FooterInputWrapper2>
            </FooterInputWrapper>
          </FooterInputIconTextContainer>

          <FooterImgTextContainer>
            
            <FooterImgWrapper>
              <FooterImg alt="Footer Person" src={MyFooterPerson} />
            </FooterImgWrapper>
            <FooterMiddleTextWrapper>
              <FooterMiddleTextWrapper2>
                <FooterMiddleText
                  Head={FooterTextData.text4}
                  Sub1={FooterTextData.text5}
                  Sub2={FooterTextData.text6}
                  Sub3={FooterTextData.text7}
                  Sub4={FooterTextData.text8}
                  Sub5={FooterTextData.text9}
                  Sub6={FooterTextData.text10}
                />
                <FooterMiddleText
                  Head={FooterTextData.text11}
                  Sub1={FooterTextData.text12}
                  Sub2={FooterTextData.text13}
                  Sub3={FooterTextData.text14}
                  Sub4={FooterTextData.text15}
                  Sub5={FooterTextData.text16}
                  Sub6={FooterTextData.text17}
                />
              </FooterMiddleTextWrapper2>
              <FooterMiddleTextWrapper2>
                <FooterMiddleText
                  Head={FooterTextData.text18}
                  Sub1={FooterTextData.text19}
                  Sub2={FooterTextData.text20}
                  Sub3={FooterTextData.text21}
                  Sub4={FooterTextData.text22}
                  Sub5={FooterTextData.text23}
                  Sub6={FooterTextData.text24}
                />
                <FooterMiddleText
                  Head={FooterTextData.text25}
                  Sub1={FooterTextData.text26}
                  Sub2={FooterTextData.text27}
                  Sub3={FooterTextData.text28}
                  Sub4={FooterTextData.text29}
                  Sub5={FooterTextData.text30}
                  Sub6={FooterTextData.text10}
                />
              </FooterMiddleTextWrapper2>
            </FooterMiddleTextWrapper>
          </FooterImgTextContainer>
          <FooterSocialMeadiaCopyContainer1>
            <FooterCopyRightWrapper>
              <FooterCopyRight>&copy;{FooterTextData.text31}</FooterCopyRight>
            </FooterCopyRightWrapper>
            <FooterSocialMediaWrapper>
              <FooterSocialMediaWrapper2>
                {FooterSocialMediaData.map((FooterData1) => {
                  return (
                    <FooterSocialMediaWrapper3>
                      <FooterSocialMediaImg
                        alt={FooterData1.alt}
                        src={FooterData1.src}
                      />
                    </FooterSocialMediaWrapper3>
                  );
                })}
              </FooterSocialMediaWrapper2>
            </FooterSocialMediaWrapper>
          </FooterSocialMeadiaCopyContainer1>
        </FooterActiveArea>
      </FooterContainer>
    </>
  );
};

export default Footer;
