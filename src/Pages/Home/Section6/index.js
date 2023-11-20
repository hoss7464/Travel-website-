import React from "react";
import {
  Section6Container,
  Section6TextContainer,
  Section6CardContainer,
} from "./Section6Elements";
import {
  SectionHeaderTextContainer,
  SectionHeaderTextWrapper,
  SectionHeaderText,
  SectionSubheaderWrapper,
  SectionSubheaderText,
} from "../../../Components/Text/HeaderSubheaderSectionText";
import { HomePageText } from "../../../Helpers/HomePageData";
import { Grid } from "@mui/material";
import Section6Cards from "./Section6Cards";
import { Section6Data } from "../../../Helpers/HomePageData";

const Section6 = () => {
  return (
    <>
      <Section6Container>
        <Section6TextContainer>
          <SectionHeaderTextContainer>
            <SectionHeaderTextWrapper>
              <SectionHeaderText>{HomePageText.text26}</SectionHeaderText>
            </SectionHeaderTextWrapper>
            <SectionSubheaderWrapper>
              <SectionSubheaderText>{HomePageText.text27}</SectionSubheaderText>
            </SectionSubheaderWrapper>
          </SectionHeaderTextContainer>
        </Section6TextContainer>
        <Section6CardContainer>
          <Grid container spacing={2}>
            {Section6Data.map((Sec6Data) => {
              return (
                <Section6Cards
                  Sec6Text={Sec6Data.text}
                  Sec6Subheader={Sec6Data.subheader}
                  Sec6Alt={Sec6Data.altIcon}
                  Sec6SrcImg={Sec6Data.srcIcon}
                  Sec6Header={Sec6Data.header}
                />
              );
            })}
          </Grid>
        </Section6CardContainer>
      </Section6Container>
    </>
  );
};

export default Section6;
