import React from "react";
import {
  SerInputSection2,
  SerInputSection2HeaderWrapper,
  SerInputSection2Header,
  SerInputSection2Row1,
  SerInputMainContainer,
  SerInputSection2Row2
} from "../Pages/ServicesPage/SerSection3/SerSection3Elements";
import ServiceInput from "../Components/Inputs/ServicePage";
import MyLocationSvg from "../Assets/Svg/LocationIcon.svg"
import MyDateSvg from "../Assets/Svg/DateIcon.svg"
import { ServicePageText } from "../Helpers/ServicePageData";

const SubRoute3 = () => {
  return (
    <>
      <SerInputSection2>
        <SerInputSection2HeaderWrapper>
          <SerInputSection2Header>{ServicePageText.text21}</SerInputSection2Header>
        </SerInputSection2HeaderWrapper>
        <SerInputSection2Row1>
          <SerInputMainContainer className="ser-input-section2-row1-margin">
            <ServiceInput
              serInputAlt="Leaving from "
              serInputSrc={MyLocationSvg}
              serInputText="Leaving from "
              serInputPlaceHolder="City..."
              serInputClass="input-wrapper-margin"
            />
          </SerInputMainContainer>
          <SerInputMainContainer>
            <ServiceInput
              serInputAlt="Going to "
              serInputSrc={MyLocationSvg}
              serInputText="Going to "
              serInputPlaceHolder="City..."
              serInputClass="input-wrapper-margin"
            />
          </SerInputMainContainer>
        </SerInputSection2Row1>
        <SerInputSection2Row2>
          <SerInputMainContainer>
            <ServiceInput
              serInputAlt="Dates"
              serInputSrc={MyDateSvg}
              serInputText="Dates"
              serInputPlaceHolder="Dates"
              serInputClass="input-wrapper-margin"
              isFlash
            />
          </SerInputMainContainer>
        </SerInputSection2Row2>
      </SerInputSection2>
    </>
  );
};

export default SubRoute3;
