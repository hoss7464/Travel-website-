import React from "react";
import { Grid } from "@mui/material";
import {
  Section3CardWrapper,
  Section3CardIconWrapper,
  Section3CardIcon,
  Section3CardHeadingParaWrapper,
  Section3CardHeadingWrapper,
  Section3CardHeading,
  Section3CardParaWrapper,
  Section3CardPara,
  Section3BtnWrapper,
} from "./Section3Elements";
import {
  Section3CardBtnContainer,
  Section3CardBtn,
} from "../../../Components/Buttons/HomeBtn/HomeBtnElements";

const Section3Cards = ({
  Section3Alt,
  Section3Src,
  Sec3CardHead,
  Sec3CardPara,
}) => {
  return (
    <>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Section3CardWrapper>
          <Section3CardIconWrapper>
            <Section3CardIcon alt={Section3Alt} src={Section3Src} />
          </Section3CardIconWrapper>
          <Section3CardHeadingParaWrapper>
            <Section3CardHeadingWrapper>
              <Section3CardHeading>{Sec3CardHead}</Section3CardHeading>
            </Section3CardHeadingWrapper>
            <Section3CardParaWrapper>
              <Section3CardPara>{Sec3CardPara}</Section3CardPara>
            </Section3CardParaWrapper>
          </Section3CardHeadingParaWrapper>
          <Section3BtnWrapper>
            <Section3CardBtnContainer>
              <Section3CardBtn to="/">Join Us</Section3CardBtn>
            </Section3CardBtnContainer>
          </Section3BtnWrapper>
        </Section3CardWrapper>
      </Grid>
    </>
  );
};

export default Section3Cards;
