import React from "react";
import {
  Section5Container,
  Section5TextContainer,
  Section5CardContainer,
} from "./Section5Elements";
import {
  SectionHeaderTextContainer,
  SectionHeaderTextWrapper,
  SectionHeaderText,
  SectionSubheaderWrapper,
  SectionSubheaderText,
} from "../../../Components/Text/HeaderSubheaderSectionText";
import { HomePageText } from "../../../Helpers/HomePageData";
import { Grid } from "@mui/material";
import Section5Cards from "./Section5Cards";
import { Section5CardsData } from "../../../Helpers/HomePageData";

const Section5 = () => {
  return (
    <>
      <Section5Container>
        <Section5TextContainer>
          <SectionHeaderTextContainer>
            <SectionHeaderTextWrapper>
              <SectionHeaderText>{HomePageText.text24}</SectionHeaderText>
            </SectionHeaderTextWrapper>
            <SectionSubheaderWrapper>
              <SectionSubheaderText>{HomePageText.text25}</SectionSubheaderText>
            </SectionSubheaderWrapper>
          </SectionHeaderTextContainer>
        </Section5TextContainer>
        <Section5CardContainer>
          <Grid container spacing={2}>
            {Section5CardsData.map((Sec5Data) => {
              return (
                <Section5Cards
                  Sec5AltPrice={Sec5Data.altPriceIcon}
                  Sec5IconSrc={Sec5Data.srcPriceIcon}
                  Sec5CardPriceText={Sec5Data.priceText}
                  Sec5AltCardImg={Sec5Data.altCardImg}
                  Sec5SrcImg={Sec5Data.srcCardImg}
                  Sec5InnerHeader={Sec5Data.cardHeader}
                  Sec5InnerSubheader={Sec5Data.cardSubheader}
                  Sec5InnerText={Sec5Data.cardText}
                  Sec5RateValue={Sec5Data.cardRateValue}
                  Sec5AltTimeIcon={Sec5Data.altTimeIcon}
                  Sec5TimeIcon={Sec5Data.srcTimeIcon}
                  Sec5TimeText={Sec5Data.timeText}
                />
              );
            })}
          </Grid>
        </Section5CardContainer>
      </Section5Container>
    </>
  );
};

export default Section5;
