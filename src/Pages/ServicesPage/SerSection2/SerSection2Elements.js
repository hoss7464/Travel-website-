import styled from "styled-components";

export const SerSection2Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
`;

export const SerSectionHeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const SerSectionFormContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  @media only screen and (min-width: 280px) and (max-width: 576px) {
    justify-content: center;
    padding: 1rem 0;
  }

  @media only screen and (min-width: 577px) and (max-width: 1280px) {
    justify-content: flex-end;
    padding: 1rem;
    border-radius: 1rem;
  }

  @media only screen and (min-width: 1281px) and (max-width: 1440px) {
    justify-content: flex-end;
    padding: 1.5rem;
    border-radius: 1.5rem;
  }

  @media only screen and (min-width: 1441px) {
    justify-content: flex-end;
    padding: 2rem;
    border-radius: 2rem;
  }
`;

export const SerSectionForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(20px);

  @media only screen and (min-width: 280px) and (max-width: 1024px) {
    padding: 1rem;
    border-radius: 0.5rem;
  }

  @media only screen and (min-width: 1025px) {
    padding: 1.5rem;
    border-radius: 1rem;
  }
`;
export const SerInputMainContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;
