import React from "react";
import "./FirstSection.css";
import {
  ServiceFirstSecContainer,
  SerFirstSecContentContainer,
  SerFirstSecContentWrapper,
  SerFirstSecHeaderWrapper,
  SerFirstSecHeader,
  SerFirstSecHeaderSpan,
  SerFirstSecSubheaderWrapper,
  SerFirstSecSubheader,
  SerFirstSecTextBoxWrapper,
} from "./ServiceFirstSectionElements";
import { ServicePageText } from "../../../Helpers/ServicePageData";
import ServiceBoxText from "./ServiceBoxText";
import { ServiceBoxTextData } from "../../../Helpers/ServicePageData";

const ServiceFirstSection = () => {
  return (
    <>
      <ServiceFirstSecContainer className="first-sec-bg">
        <SerFirstSecContentContainer>
          <SerFirstSecContentWrapper>
            <SerFirstSecHeaderWrapper>
              <SerFirstSecHeader>{ServicePageText.text1}<SerFirstSecHeaderSpan>{ServicePageText.text3}</SerFirstSecHeaderSpan></SerFirstSecHeader>
            </SerFirstSecHeaderWrapper>
            <SerFirstSecSubheaderWrapper>
              <SerFirstSecSubheader>
                {ServicePageText.text2}
              </SerFirstSecSubheader>
            </SerFirstSecSubheaderWrapper>

            <SerFirstSecTextBoxWrapper>
              {ServiceBoxTextData.map((SerData1) => {
                return (
                  <ServiceBoxText
                    myContent={SerData1.boxContent}
                    myNumber={SerData1.boxNumber}
                  />
                );
              })}
            </SerFirstSecTextBoxWrapper>
          </SerFirstSecContentWrapper>
        </SerFirstSecContentContainer>
      </ServiceFirstSecContainer>
    </>
  );
};

export default ServiceFirstSection;
