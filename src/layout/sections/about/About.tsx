import React from "react";
import styled from "styled-components";
import { myTheme } from "../../../styles/Theme.styled";
import { Container } from "../../../components/Container";
import aboutPhotoVertical from "./../../../assets/img/AboutPhotoVertical.jpg";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SectionTitle } from "../../../components/SectionTitle";

export const About = () => {
  return (
    <Container>
      <AboutStyled>
        <img src={aboutPhotoVertical} alt="img" />
        <FlexWrapper direction="column" justify="center">
          <SectionTitle>About</SectionTitle>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores
            voluptatum explicabo mollitia corrupti eum fuga vel maiores
            blanditiis voluptatem, numquam amet laborum quidem eius soluta nemo
            unde nam. Adipisci, magni.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores
            voluptatum explicabo mollitia corrupti eum fuga vel maiores
            blanditiis voluptatem, numquam amet laborum quidem eius soluta nemo
            unde nam. Adipisci, magni.
          </p>
        </FlexWrapper>
      </AboutStyled>
    </Container>
  );
};

const AboutStyled = styled.section`
  display: flex;
  flex-direction: row;
  margin-top: 120px;
  justify-content: space-around;
  background-color: ${myTheme.colors.backgroundB};

  img {
    max-width: 470px;
    max-height: 520px;
    object-fit: fill;
  }

  p {
    max-width: 520px;
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    letter-spacing: 1.5px;
  }
`;
