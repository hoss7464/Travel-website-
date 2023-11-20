import React from "react";
import {
  FooterMiddleTextWrapper3,
  FooterMiddleTextHeaderWrapper,
  FooterMiddleTextHeader,
  FooterMiddleTextSubheaderWrapper,
  FooterMiddleTextSubHeaderWrapper2,
  FooterMiddleTextSubheader,
} from "./FooterElements";

const FooterMiddleText = ({ Head, Sub1, Sub2, Sub3, Sub4, Sub5, Sub6 }) => {
  return (
    <>
      <FooterMiddleTextWrapper3>
        <FooterMiddleTextHeaderWrapper>
          <FooterMiddleTextHeader>{Head}</FooterMiddleTextHeader>
        </FooterMiddleTextHeaderWrapper>
        <FooterMiddleTextSubheaderWrapper>
          <FooterMiddleTextSubHeaderWrapper2>
            <FooterMiddleTextSubheader>{Sub1}</FooterMiddleTextSubheader>
          </FooterMiddleTextSubHeaderWrapper2>
          <FooterMiddleTextSubHeaderWrapper2>
            <FooterMiddleTextSubheader>{Sub2}</FooterMiddleTextSubheader>
          </FooterMiddleTextSubHeaderWrapper2>
          <FooterMiddleTextSubHeaderWrapper2>
            <FooterMiddleTextSubheader>{Sub3}</FooterMiddleTextSubheader>
          </FooterMiddleTextSubHeaderWrapper2>
          <FooterMiddleTextSubHeaderWrapper2>
            <FooterMiddleTextSubheader>{Sub4}</FooterMiddleTextSubheader>
          </FooterMiddleTextSubHeaderWrapper2>
          <FooterMiddleTextSubHeaderWrapper2>
            <FooterMiddleTextSubheader>{Sub5}</FooterMiddleTextSubheader>
          </FooterMiddleTextSubHeaderWrapper2>
          <FooterMiddleTextSubHeaderWrapper2>
            <FooterMiddleTextSubheader>{Sub6}</FooterMiddleTextSubheader>
          </FooterMiddleTextSubHeaderWrapper2>
        </FooterMiddleTextSubheaderWrapper>
      </FooterMiddleTextWrapper3>
    </>
  );
};

export default FooterMiddleText;
