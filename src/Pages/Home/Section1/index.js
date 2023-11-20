import React from "react";
import {
  Section1Container,
  Section1Wrapper,
  Image1,
  Image2,
  Image3,
  Image4,
  Image5,
} from "./Section1Elements";
import MyImg1Svg from "../../../Assets/Svg/Img1.svg"
import MyImg2Svg from "../../../Assets/Svg/Img2.svg"
import MyImg3Svg from "../../../Assets/Svg/Img3.svg"
import MyImg4Svg from "../../../Assets/Svg/Img4.svg"
import MyImg5Svg from "../../../Assets/Svg/Img5.svg"

const Section1 = () => {
  return (
    <>
      <Section1Container>
        <Section1Wrapper>
            <Image1 alt="Image 1" src={MyImg1Svg} />
            <Image2 alt="Image 2" src={MyImg2Svg} />
            <Image3 alt="Image 3" src={MyImg3Svg} />
            <Image4 alt="Image 4" src={MyImg4Svg} />
            <Image5 alt="Image 5" src={MyImg5Svg} />
        </Section1Wrapper>
      </Section1Container>
    </>
  );
};

export default Section1;
