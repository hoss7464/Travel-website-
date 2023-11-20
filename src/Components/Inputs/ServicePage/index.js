import React from "react";
import {
  ServiceInputContainer,
  ServiceIconTextWrapper,
  ServiceIconWrapper,
  ServiceIcon,
  ServiceTextWrapper,
  ServiceInputText,
  ServiceInputWrapper,
  ServiceInputWrapper2,
  ServiceFlashWrapper,
  ServiceInputEl,
  ServiceInputFlash,
} from "./ServiceInputElements";
import MyInputFlash from "../../../Assets/Svg/DownFlash.svg";

const ServiceInput = ({
  serInputAlt,
  serInputSrc,
  serInputText,
  isFlash,
  serInputPlaceHolder,
  serInputClass,
  serInputDis,
}) => {

  return (
    <>
      <ServiceInputContainer className={serInputClass}>
        <ServiceIconTextWrapper>
          <ServiceIconWrapper>
            <ServiceIcon alt={serInputAlt} src={serInputSrc} />
          </ServiceIconWrapper>
          <ServiceTextWrapper>
            <ServiceInputText>{serInputText}</ServiceInputText>
          </ServiceTextWrapper>
        </ServiceIconTextWrapper>

        <ServiceInputWrapper>
          <ServiceInputWrapper2>
            <ServiceInputEl placeholder={serInputPlaceHolder} disabled={serInputDis} />
            <ServiceFlashWrapper style={{ display: isFlash ? "flex" : "none" }}>
              <ServiceInputFlash alt="my flash" src={MyInputFlash} />
            </ServiceFlashWrapper>
          </ServiceInputWrapper2>
        </ServiceInputWrapper>
      </ServiceInputContainer>
    </>
  );
};

export default ServiceInput;
