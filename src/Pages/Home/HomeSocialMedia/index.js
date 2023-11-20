import React from "react";
import { SocialMediaWrapper, SocialMediaImg } from "./SocialMediaElements";

const SocialMediaCompo = ({myAlt, mySrc}) => {
  return (
    <>
      <SocialMediaWrapper>
        <SocialMediaImg alt={myAlt} src={mySrc} />
      </SocialMediaWrapper>
    </>
  );
};

export default SocialMediaCompo;
