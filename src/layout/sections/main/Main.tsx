import React from "react";
import mainPhotoSmall from "../../../assets/img/mainPhotoSmallVertical.jpg";
import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper.styled";
import { myTheme } from "../../../styles/Theme.styled";
import { Header } from "../../header/Header.styled";

export const Main = () => {
  return (
    <MainWrapper>
      <MainStyled>
        <FlexWrapper align={"center"} justify={"space-between"}>
          <div>
            <span>welcome</span>
            <h2>
              I'm Irina <br /> Eliseeva
            </h2>
            <MainTitle>Front-end web developer</MainTitle>
            <button>Download CV</button>
          </div>
          <PhotoStyled src={mainPhotoSmall} alt="myPhoto" />
        </FlexWrapper>
      </MainStyled>
    </MainWrapper>
  );
};

const MainWrapper = styled.section`
  width: 100%;
  height: 90vh;
  background-color: ${myTheme.colors.backgroundA};
  display: flex;
  justify-content: center;
`;
const MainStyled = styled.section`
  width: 1300px;
  color: ${myTheme.colors.accentA};

  span {
    font-family: "Poppins";
    font-weight: 300;
    font-size: 26px;
    line-height: 40px;
    letter-spacing: 10px;
    text-transform: uppercase;
  }

  h2 {
    font-family: "Poppins";
    font-weight: 600;
    font-size: 68px;
    line-height: 100px;
  }

  button {
    width: 280px;
    height: 72px;
    border-radius: 10px;
    background: linear-gradient(
      180deg,
      ${myTheme.colors.brightA} 50%,
      ${myTheme.colors.brightB}
    );
    color: ${myTheme.colors.accentA};
    font-family: "Poppins";
    font-weight: 400;
    font-size: 26px;
    line-height: 38px;
    letter-spacing: 3px;
    margin-top: 34px;
    cursor: pointer;
  }
`;

const PhotoStyled = styled.img`
  max-width: 660px;
  max-height: 1000px;
  object-fit: fill;
`;

const MainTitle = styled.h1`
  font-family: "Poppins";
  font-weight: 300;
  font-size: 20px;
  line-height: 30px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
`;
