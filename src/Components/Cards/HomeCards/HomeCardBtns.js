import React from "react";
import {
  CardButtonWrapper,
  CardButtonTextContainer,
  CardButtonText,
  CardPlusMinusContainer,
  CardPlusWrapper,
  CardMinusWrapper,
  CardPlusMinusIcon,
} from "./HomeCardsElements";
import MyPlusBtn from "../../../Assets/Svg/CardPlusBtn.svg";
import MyMinusBtn from "../../../Assets/Svg/CardMinusBtn.svg";

function HomeCardBtns({ myCardBtnText }) {


  return (
    <>
      <CardButtonWrapper>
        <CardButtonWrapper>

          <CardButtonTextContainer>
            <CardButtonText>{myCardBtnText}</CardButtonText>
          </CardButtonTextContainer>
          <CardPlusMinusContainer>
            <CardPlusWrapper>
              <CardPlusMinusIcon alt="Plus btn" src={MyPlusBtn} />
            </CardPlusWrapper>
            <CardMinusWrapper>
              <CardPlusMinusIcon alt="Minus btn" src={MyMinusBtn} />
            </CardMinusWrapper>
          </CardPlusMinusContainer>
        </CardButtonWrapper>
       
      </CardButtonWrapper>
    </>
  );
}

export default HomeCardBtns;
