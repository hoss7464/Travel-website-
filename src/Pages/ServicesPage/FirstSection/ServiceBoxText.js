import React from "react";
import {
  SerFirstSecTextBoxWrapper2,
  SerFirstSecTextWrapper,
  SerFirstSecText,
  SerFirstSecBoxWrapper,
  SerFirstSecBoxWrapper2,
  SerFirstSecBoxContentWrapper,
  SerFirstSecBoxContent,
} from "./ServiceFirstSectionElements";

const ServiceBoxText = ({myContent, myNumber}) => {
  return (
    <>
      <SerFirstSecTextBoxWrapper2>
        <SerFirstSecTextWrapper>
          <SerFirstSecText>{myContent}</SerFirstSecText>
        </SerFirstSecTextWrapper>
        <SerFirstSecBoxWrapper>
          <SerFirstSecBoxWrapper2>
            <SerFirstSecBoxContentWrapper>
              <SerFirstSecBoxContent>{myNumber}</SerFirstSecBoxContent>
            </SerFirstSecBoxContentWrapper>
          </SerFirstSecBoxWrapper2>
        </SerFirstSecBoxWrapper>
      </SerFirstSecTextBoxWrapper2>
    </>
  );
};

export default ServiceBoxText;
