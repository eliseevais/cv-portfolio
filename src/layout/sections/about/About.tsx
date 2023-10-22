import React from "react";
import styled from "styled-components";
import { myTheme } from "../../../styles/Theme.styled";
import { ContainerWrapper } from "../../../components/ContainerWrapper";
import aboutPhotoVertical from "./../../../assets/img/AboutPhotoVertical.jpg";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SectionTitle } from "../../../components/SectionTitle";

export const About = () => {
  return (
    <ContainerWrapper bgColor={myTheme.colors.backgroundB}>
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
    </ContainerWrapper>
  );
};

const AboutStyled = styled.section`
  width: 1300px;
  display: flex;
  flex-direction: row;
  padding: 120px 0;
  justify-content: space-around;

  img {
    max-width: 470px;
    max-height: 520px;
    object-fit: fill;
  }

  p {
    max-width: 520px;
    color: ${myTheme.colors.accentA};
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    letter-spacing: 1.5px;
  }
`;
