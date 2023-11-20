import styled from "styled-components";
import { ColorPalette } from "../../../Core-Ui/Colors/Colors";

export const CoSection2Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
`;

export const CoSection2HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
export const CoSection2ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
`;
export const CoSection2InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (min-width: 280px) and (max-width: 768px) {
    width: 100%;
  }

  @media only screen and (min-width: 769px) and (max-width: 992px) {
    width: 12.88rem;
  }

  @media only screen and (min-width: 993px) and (max-width: 1280px) {
    width: 21.38rem;
  }

  @media only screen and (min-width: 1281px) and (max-width: 1440px) {
    width: 27.19rem;
  }

  @media only screen and (min-width: 1441px) and (max-width: 1920px) {
    width: 28.13rem;
  }

  @media only screen and (min-width: 1921px) {
    width: 37.13rem;
  }
`;
export const CoSection2PictureWrapper = styled.div`
  justify-content: center;
  align-items: center;
  padding-left: 20px;

  @media only screen and (min-width: 280px) and (max-width: 768px) {
    display: none;
  }

  @media only screen and (min-width: 769px) and (max-width: 992px) {
    display: flex;
    width: calc(100% - 12.88rem);
  }

  @media only screen and (min-width: 993px) and (max-width: 1280px) {
    display: flex;
    width: calc(100% - 21.38rem);
  }

  @media only screen and (min-width: 1281px) and (max-width: 1440px) {
    display: flex;
    width: calc(100% - 27.19rem);
  }

  @media only screen and (min-width: 1441px) and (max-width: 1920px) {
    display: flex;
    width: calc(100% - 28.13rem);
  }

  @media only screen and (min-width: 1921px) {
    display: flex;
    width: calc(100% - 37.13rem);
  }
`;

export const CoSection2PictureWrapper2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const CoSection2Picture = styled.img`
  @media only screen and (min-width: 769px) and (max-width: 992px) {
    width: 26.94rem;
    height: 18.06rem;
  }

  @media only screen and (min-width: 993px) and (max-width: 1280px) {
    width: 30.44rem;
    height: 20.44rem;
  }

  @media only screen and (min-width: 1281px) and (max-width: 1440px) {
    width: 38.63rem;
    height: 27.06rem;
  }

  @media only screen and (min-width: 1441px) and (max-width: 1920px) {
    width: 39.75rem;
    height: 29.69rem;
  }

  @media only screen and (min-width: 1921px) {
    width: 52.63rem;
    height: 39.31rem;
  }
`;

export const CoSection2FormWrapper = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: ${ColorPalette.lightSecondaryColor};

  @media only screen and (min-width: 280px) and (max-width: 576px) {
    align-items: center;
    width: 14.44rem;
    border-radius: 16px;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }

  @media only screen and (min-width: 577px) and (max-width: 768px) {
    align-items: flex-start;
    width: 20.31rem;
    border-radius: 24px;
    padding: 0.5rem;
  }

  @media only screen and (min-width: 769px) and (max-width: 992px) {
    align-items: flex-start;
    width: 100%;
    border-radius: 16px;
    padding: 0.5rem;
  }

  @media only screen and (min-width: 993px) and (max-width: 1440px) {
    align-items: flex-start;
    width: 100%;
    border-radius: 24px;
    padding: 0.5rem;
  }

  @media only screen and (min-width: 1441px) {
    align-items: flex-start;
    width: 100%;
    border-radius: 24px;
    padding: 1rem;
  }
`;

export const CoSection2FormHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  @media only screen and (min-width: 280px) and (max-width: 576px) {
    justify-content: center;
    margin-bottom: 1rem;
  }

  @media only screen and (min-width: 577px) and (max-width: 1440px) {
    justify-content: flex-start;
    margin-bottom: 1rem;
  }

  @media only screen and (min-width: 1441px) {
    justify-content: flex-start;
    margin-bottom: 1.5rem;
  }
`;
export const CoSection2FormHeader = styled.h1`
  color: ${ColorPalette.darkFontColor};
  font-weight: 600;

  @media only screen and (min-width: 280px) and (max-width: 576px) {
    font-size: 16px;
    text-align: center;
  }

  @media only screen and (min-width: 577px) and (max-width: 768px) {
    font-size: 24px;
    text-align: left;
  }

  @media only screen and (min-width: 768px) and (max-width: 992px) {
    font-size: 16px;
    text-align: left;
  }

  @media only screen and (min-width: 993px) {
    font-size: 24px;
    text-align: left;
  }
`;

export const CoSection2FormSection1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (min-width: 280px) and (max-width: 576px) {
    flex-direction: column;
    justify-content: center;
  }

  @media only screen and (min-width: 577px) and (max-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
  }

  @media only screen and (min-width: 769px) and (max-width: 992px) {
    flex-direction: column;
    justify-content: center;
  }

  @media only screen and (min-width: 993px) {
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
  }
`;
export const CoSection2FormSection2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media only screen and (min-width: 280px) and (max-width: 992px) {
    margin-bottom: 1rem;
  }

  @media only screen and (min-width: 993px) {
    margin-bottom: 1.5rem;
  }
`;

export const Cosection2InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  @media only screen and (min-width: 280px) and (max-width: 576px) {
    align-items: center;
    margin-bottom: 1rem;
  }

  @media only screen and (min-width: 577px) and (max-width: 1440px) {
    align-items: flex-start;
    margin-bottom: 1rem;
  }

  @media only screen and (min-width: 1441px) {
    align-items: flex-start;
    margin-bottom: 1.5rem;
  }
`;
export const CoSection2InputTextWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;

  @media only screen and (min-width: 280px) and (max-width: 576px) {
    justify-content: center;
  }

  @media only screen and (min-width: 577px) {
    justify-content: flex-start;
  }
`;
export const CoSection2InputText = styled.p`
  color: ${ColorPalette.darkFontColor};
  font-weight: 600;

  @media only screen and (min-width: 280px) and (max-width: 576px) {
    text-align: center;
    font-size: 12px;
  }

  @media only screen and (min-width: 577px) and (max-width: 768px) {
    text-align: left;
    font-size: 16px;
  }

  @media only screen and (min-width: 769px) and (max-width: 992px) {
    text-align: left;
    font-size: 12px;
  }

  @media only screen and (min-width: 993px) {
    text-align: left;
    font-size: 16px;
  }
`;

export const CoSection2InputTextSpan = styled.span`
  color: ${ColorPalette.darkFontColor};
  font-weight: 400;
  @media only screen and (min-width: 280px) and (max-width: 576px) {
    font-size: 12px;
  }

  @media only screen and (min-width: 577px) and (max-width: 768px) {
    font-size: 16px;
  }

  @media only screen and (min-width: 769px) and (max-width: 992px) {
    font-size: 12px;
  }

  @media only screen and (min-width: 993px) {
    font-size: 16px;
  }
`;

export const CoSection2InputFieldWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CoSection2InputField1 = styled.input`
  background-color: ${ColorPalette.lightPrimaryColor};
  border: none;
  padding-left: 0.5rem;

  @media only screen and (min-width: 280px) and (max-width: 576px) {
    width: 10.63rem;
    height: 2rem;
    border-radius: 4px;
  }

  @media only screen and (min-width: 577px) and (max-width: 768px) {
    width: 8.75rem;
    height: 2rem;
    border-radius: 8px;
  }

  @media only screen and (min-width: 769px) and (max-width: 992px) {
    width: 10.63rem;
    height: 2rem;
    border-radius: 4px;
  }

  @media only screen and (min-width: 993px) and (max-width: 1280px) {
    width: 9.38rem;
    height: 3rem;
    border-radius: 8px;
  }

  @media only screen and (min-width: 1281px) and (max-width: 1920px) {
    width: 12.56rem;
    height: 3rem;
    border-radius: 8px;
  }

  @media only screen and (min-width: 1921px) {
    width: 16rem;
    height: 3rem;
    border-radius: 8px;
  }
`;
export const CoSection2InputField2 = styled.input`
  background-color: ${ColorPalette.lightPrimaryColor};
  border: none;
  padding-left: 0.5rem;

  @media only screen and (min-width: 280px) and (max-width: 576px) {
    width: 10.63rem;
    height: 2rem;
    border-radius: 4px;
  }

  @media only screen and (min-width: 577px) and (max-width: 768px) {
    width: 13.75rem;
    height: 2rem;
    border-radius: 8px;
  }

  @media only screen and (min-width: 769px) and (max-width: 992px) {
    width: 10.63rem;
    height: 2rem;
    border-radius: 4px;
  }

  @media only screen and (min-width: 993px) and (max-width: 1280px) {
    width: 13.75rem;
    height: 3rem;
    border-radius: 8px;
  }

  @media only screen and (min-width: 1281px) and (max-width: 1920px) {
    width: 16.88rem;
    height: 3rem;
    border-radius: 8px;
  }

  @media only screen and (min-width: 1921px) {
    width: 21.56rem;
    height: 3rem;
    border-radius: 8px;
  }
`;
export const CoSection2TextArea = styled.textarea`
  background-color: ${ColorPalette.lightPrimaryColor};
  border: none;
  padding: 0.5rem;

  @media only screen and (min-width: 280px) and (max-width: 576px) {
    width: 10.63rem;
    height: 5.31rem;
    border-radius: 4px;
  }

  @media only screen and (min-width: 577px) and (max-width: 768px) {
    width: 13.75rem;
    height: 5.5rem;
    border-radius: 8px;
  }

  @media only screen and (min-width: 769px) and (max-width: 992px) {
    width: 10.63rem;
    height: 5.31rem;
    border-radius: 4px;
  }

  @media only screen and (min-width: 993px) and (max-width: 1280px) {
    width: 13.75rem;
    height: 7.94rem;
    border-radius: 8px;
  }

  @media only screen and (min-width: 1281px) and (max-width: 1920px) {
    width: 16.88rem;
    height: 7.94rem;
    border-radius: 8px;
  }

  @media only screen and (min-width: 1921px) {
    width: 21.56rem;
    height: 7.94rem;
    border-radius: 8px;
  }
`;
export const CoSection2BtnWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  @media only screen and (min-width: 280px) and (max-width: 576px) {
    justify-content: center;
  }

  @media only screen and (min-width: 577px) {
    justify-content: flex-start;
  }
`;
