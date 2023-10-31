import React from "react";
import styled from "styled-components";
import { myTheme } from "../../../styles/Theme.styled";
import { Container } from "../../../components/Container";
import aboutPhotoVertical from "./../../../assets/img/AboutPhotoVertical.jpg";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SectionTitle } from "../../../components/SectionTitle";

export const About = () => {
  return (
    <AboutStyled>
      <Container>
        <FlexWrapper justify="space-around" align="center">
          <ImgWrapper>
            <img src={aboutPhotoVertical} alt="img" />
          </ImgWrapper>
          <FlexWrapper direction="column" justify="center">
            <SectionTitle>About</SectionTitle>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores
              voluptatum explicabo mollitia corrupti eum fuga vel maiores
              blanditiis voluptatem, numquam amet laborum quidem eius soluta
              nemo unde nam. Adipisci, magni. Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Dolores voluptatum explicabo
              mollitia corrupti eum fuga vel maiores blanditiis voluptatem,
              numquam amet laborum quidem eius soluta nemo unde nam. Adipisci,
              magni.
            </p>
          </FlexWrapper>
        </FlexWrapper>
      </Container>
    </AboutStyled>
  );
};

const AboutStyled = styled.section`
  background-color: ${myTheme.colors.backgroundB};

  ${Container} {
    outline: 1px solid ${myTheme.colors.accentB};
    padding: 120px 14px;
  }

  p {
    max-width: 660px;
  }

  @media ${myTheme.media.bigTablet} {

    ${Container} {
      padding-top: 60px;
      padding-bottom: 40px;
    }

    ${FlexWrapper} {
      flex-direction: column;
      flex-wrap: wrap;
    }

    ${SectionTitle} {
      margin-top: 40px;
    }
  }
`;

const ImgWrapper = styled.div`
  position: relative;

  img {
    max-width: 470px;
    max-height: 520px;
    object-fit: cover;
    object-position: center;
  }

  @media ${myTheme.media.tablet} {
    &::before {
      content: "";
      border-top: 20px solid ${myTheme.colors.accentB};
      border-left: 20px solid ${myTheme.colors.accentB};
      position: absolute;
      height: 294px;
      width: 210px;
      top: -20px;
      left: -20px;
    }

    img {
      width: 250px;
      height: 280px;
    }
  }
`;
