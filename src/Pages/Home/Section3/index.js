import React from "react";
import {
  Section3Container,
  Section3TextContainer,
  Section3CardContainer,
} from "./Section3Elements";
import {
  SectionHeaderTextContainer,
  SectionHeaderTextWrapper,
  SectionHeaderText,
  SectionSubheaderWrapper,
  SectionSubheaderText,
} from "../../../Components/Text/HeaderSubheaderSectionText";
import { Grid } from "@mui/material";
import Section3Cards from "./Section3Cards";
import { Section3CardData, HomePageText } from "../../../Helpers/HomePageData";

const Section3 = () => {
  return (
    <>
      <Section3Container>
        <Section3TextContainer>
          <SectionHeaderTextContainer>
            <SectionHeaderTextWrapper>
              <SectionHeaderText>{HomePageText.text19}</SectionHeaderText>
            </SectionHeaderTextWrapper>
            <SectionSubheaderWrapper>
              <SectionSubheaderText>{HomePageText.text20}</SectionSubheaderText>
            </SectionSubheaderWrapper>
          </SectionHeaderTextContainer>
        </Section3TextContainer>
        <Section3CardContainer>
          <Grid container spacing={2} justifyContent="center">
            {Section3CardData.map((Sec3Data) => {
              return (
                <Section3Cards
                  Section3Alt={Sec3Data.myAlt}
                  Section3Src={Sec3Data.myIcon}
                  Sec3CardHead={Sec3Data.myHeader}
                  Sec3CardPara={Sec3Data.myPara}
                />
              );
            })}
          </Grid>
        </Section3CardContainer>
      </Section3Container>
    </>
  );
};

export default Section3;
