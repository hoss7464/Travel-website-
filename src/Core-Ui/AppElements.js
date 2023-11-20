import styled from "styled-components";

export const RootContainer = styled.div`
  width: 100%;
  background-color: khaki;

  @media only screen and (min-width: 280px) and (max-width: 576px) {
    padding: 0 24px 0 24px;
  }

  @media only screen and (min-width: 577px) and (max-width: 768px) {
    padding: 0 40px 0 40px;
  }

  @media only screen and (min-width: 769px) and (max-width: 992px) {
    padding: 0 56px 0 56px;
  }

  @media only screen and (min-width: 993px) and (max-width: 1024px) {
    padding: 0 72px 0 72px;
  }

  @media only screen and (min-width: 1025px) and (max-width: 1280px) {
    padding: 0 88px 0 88px;
  }

  @media only screen and (min-width: 1281px) and (max-width: 1440px) {
    padding: 0 104px 0 104px;
  }

  @media only screen and (min-width: 1441px) and (max-width: 1920px) {
    padding: 0 168px 0 168px;
  }

  @media only screen and (min-width: 1921px)  {
    padding: 0 232px 0 232px;
  }
`;
