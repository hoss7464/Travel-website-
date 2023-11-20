import React from "react";
import "./Section5.css";
import {
  Section5CardWrapper,
  Section5CardImgWrapper,
  Section5CardImg,
  Section5CardPriceWrapper,
  Section5CardPriceIconWrapper,
  Section5CardPriceIcon,
  Section5CardPriceTextWrapper,
  Section5CardPriceText,
  Section5CardContentWrapper,
  Section5CardHeaderWrapper,
  Section5CardHeader,
  Section5CardSubheaderWrapper,
  Section5CardSubheader,
  Section5CardTextWrapper,
  Section5CardText,
  Section5CardStarsWrapper,
  Section5CardBtnTimeWrapper,
  Section5CardBtnWrapper,
  Section5CardTimeWrapper,
  Section5CardTimeIconWrapper,
  Section5CardTimeTextWrapper,
} from "./Section5Elements";
import { Grid } from "@mui/material";
import Rating from "@mui/material/Rating";
import {
  Section5BtnWrapper,
  Section5btn,
} from "../../../Components/Buttons/HomeBtn/HomeBtnElements";

const Section5Cards = ({
  Sec5AltPrice,
  Sec5IconSrc,
  Sec5CardPriceText,
  Sec5AltCardImg,
  Sec5SrcImg,
  Sec5InnerHeader,
  Sec5InnerSubheader,
  Sec5InnerText,
  Sec5RateValue,
  Sec5AltTimeIcon,
  Sec5TimeIcon,
  Sec5TimeText,
}) => {
  return (
    <>
      <Grid item xs={12} sm={6} md={6} lg={6}>
        <Section5CardWrapper>
          <Section5CardImgWrapper>
            <Section5CardPriceWrapper>
              <Section5CardPriceIconWrapper>
                <Section5CardPriceIcon alt={Sec5AltPrice} src={Sec5IconSrc} />
              </Section5CardPriceIconWrapper>
              <Section5CardPriceTextWrapper>
                <Section5CardPriceText>
                  {Sec5CardPriceText}
                </Section5CardPriceText>
              </Section5CardPriceTextWrapper>
            </Section5CardPriceWrapper>
            <Section5CardImg alt={Sec5AltCardImg} src={Sec5SrcImg} />
          </Section5CardImgWrapper>
          <Section5CardContentWrapper>
            <Section5CardHeaderWrapper>
              <Section5CardHeader>{Sec5InnerHeader}</Section5CardHeader>
            </Section5CardHeaderWrapper>
            <Section5CardSubheaderWrapper>
              <Section5CardSubheader>
                {Sec5InnerSubheader}
              </Section5CardSubheader>
            </Section5CardSubheaderWrapper>
            <Section5CardTextWrapper>
              <Section5CardText>{Sec5InnerText}</Section5CardText>
            </Section5CardTextWrapper>
            <Section5CardStarsWrapper>
              <Rating
                className="rate-color"
                name="half-rating-read"
                defaultValue={2.5}
                precision={Sec5RateValue}
                readOnly
              />
            </Section5CardStarsWrapper>
            <Section5CardBtnTimeWrapper>
              <Section5CardBtnWrapper>
                <Section5BtnWrapper>
                  <Section5btn to="/">Book Here</Section5btn>
                </Section5BtnWrapper>
              </Section5CardBtnWrapper>
              <Section5CardTimeWrapper>
                <Section5CardTimeIconWrapper>
                  <Section5CardPriceIcon
                    alt={Sec5AltTimeIcon}
                    src={Sec5TimeIcon}
                  />
                </Section5CardTimeIconWrapper>
                <Section5CardTimeTextWrapper>
                  <Section5CardText>{Sec5TimeText}</Section5CardText>
                </Section5CardTimeTextWrapper>
              </Section5CardTimeWrapper>
            </Section5CardBtnTimeWrapper>
          </Section5CardContentWrapper>
        </Section5CardWrapper>
      </Grid>
    </>
  );
};

export default Section5Cards;
