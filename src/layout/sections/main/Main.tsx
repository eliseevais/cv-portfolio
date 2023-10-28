import React from "react";
import styled from "styled-components";
import { myTheme } from "../../../styles/Theme.styled";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Button } from "../../../components/Button";
import mainPhotoSmall from "../../../assets/img/mainPhotoSmallVertical.jpg";
import { Container } from "../../../components/Container";

export const Main = () => {
  return (
    <Container>
      <MainStyled>
        <FlexWrapper align="center" justify="space-between">
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
    </Container>
  );
};

const MainStyled = styled.section`
  min-height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 14px;
`;

const PhotoStyled = styled.img`
  max-width: calc(60%);
  max-height: 90vh;
  object-fit: cover;
  align-self: flex-start;
`;

const MainTitle = styled.h1``;
