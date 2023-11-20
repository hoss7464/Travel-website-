import styled from "styled-components";

export const SocialMediaWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (min-width: 280px) and (max-width: 576px) {
    height: 2rem;
    width: 2rem;
  }

  @media only screen and (min-width: 577px) and (max-width: 768px) {
    height: 2rem;
    width: 2rem;
  }

  @media only screen and (min-width: 769px) and (max-width: 992px) {
    height: 2.63rem;
    width: 2.63rem;
  }

  @media only screen and (min-width: 993px) and (max-width: 1024px) {
    height: 2.63rem;
    width: 2.63rem;
  }

  @media only screen and (min-width: 1025px) and (max-width: 1280px) {
    height: 2.81rem;
    width: 2.81rem;
  }

  @media only screen and (min-width: 1281px) and (max-width: 1440px) {
    height: 3rem;
    width: 3rem;
  }

  @media only screen and (min-width: 1441px) and (max-width: 1920px) {
    height: 3rem;
    width: 3rem;
  }

  @media only screen and (min-width: 1921px) {
    height: 3rem;
    width: 3rem;
  }
`;

export const SocialMediaImg = styled.img`
  width: 100%;
  height: 100%;
`
