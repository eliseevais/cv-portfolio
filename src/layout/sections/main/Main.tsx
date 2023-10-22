import React from "react";
import styled from "styled-components";
import { ContainerWrapper } from "../../../components/ContainerWrapper";
import { myTheme } from "../../../styles/Theme.styled";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Button } from "../../../components/Button";
import mainPhotoSmall from "../../../assets/img/mainPhotoSmallVertical.jpg";

export const Main = () => {
  return (
    <ContainerWrapper
      height="90vh"
      bgColor={myTheme.colors.backgroundA}
      justify="center"
    >
      <MainStyled>
        <FlexWrapper align="center" justify="space-between" >
          <div>
            <span>welcome</span>
            <h2>
              I'm Irina <br /> Eliseeva
            </h2>
            <MainTitle>Front-end web developer</MainTitle>
            <Button>Download CV</Button>
          </div>
        </FlexWrapper>
          <PhotoStyled src={mainPhotoSmall} alt="myPhoto" />
      </MainStyled>
    </ContainerWrapper>
  );
};

const MainStyled = styled.section`
  width: 1300px;
  color: ${myTheme.colors.accentA};
  min-height: 90vh;
  display: flex;
  justify-content: space-between;
  /* align-items: center; */

  span {
    font-family: "Poppins", sans-serif;
    font-weight: 300;
    font-size: 26px;
    line-height: 40px;
    letter-spacing: 10px;
    text-transform: uppercase;
  }

  h2 {
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    font-size: 68px;
    line-height: 100px;
  }
`;

const PhotoStyled = styled.img`
  max-width: 560px;
  max-height: 800px;
  object-fit: fill;
`;

const MainTitle = styled.h1`
  font-family: "Poppins", sans-serif;
  font-weight: 300;
  font-size: 20px;
  line-height: 30px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
`;
