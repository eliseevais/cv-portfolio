import React from "react";
import styled from "styled-components";
import { myTheme } from "../../../styles/Theme.styled";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Button } from "../../../components/Button";
import mainPhotoSmall from "../../../assets/img/mainPhotoSmallVertical.jpg";
import { Container } from "../../../components/Container";
import { myFont } from "../../../styles/Common";

export const Main = () => {
  return (
    <Container>
      <MainStyled>
        <FlexWrapper direction="column" align="flex-start" justify="center">
          <span>welcome</span>
          <h3>
            I'm Irina <br /> Eliseeva
          </h3>
          <h1>Front-end web developer</h1>
          <Button>Download CV</Button>
        </FlexWrapper>
        <PhotoWrapper>
          <PhotoStyled src={mainPhotoSmall} alt="myPhoto" />
        </PhotoWrapper>
      </MainStyled>
    </Container>
  );
};

const MainStyled = styled.section`
  min-height: 100vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 60px 14px;
  /* outline: 1px solid ${myTheme.colors.accentB}; */
  position: relative;

  @media ${myTheme.media.bigTablet} {
    flex-wrap: wrap-reverse;
    justify-content: center;
    align-items: flex-start;

    ${FlexWrapper} {
      align-items: center;
    }
  }

  @media ${myTheme.media.tablet} {
    flex-wrap: wrap-reverse;
    justify-content: center;

    ${FlexWrapper} {
      align-items: center;
    }

    span {
      margin-top: 30px;
    }
  }

  @media ${myTheme.media.mobile} {
    flex-wrap: wrap-reverse;
    justify-content: center;
  }
`;

const PhotoWrapper = styled.div``;

const PhotoStyled = styled.img`
  max-width: 560px;
  width: 100%;
  height: 810px;
  object-fit: cover;
  /* object-position: center; */
  align-self: flex-start;
  aspect-ratio: 3/4;
  position: absolute;
  top: 0;
  right: calc(5%);

  @media ${myTheme.media.moreThenTwoK} {
    margin: auto;
    top: 0; auto: 0; bottom: 0; right: 0;
  }

  @media ${myTheme.media.bigTablet} {
    margin: 0 auto;
    width: 440px;
    height: 620px;
    top: 0; left: 0; bottom: 0; right: 0;
  }

  @media ${myTheme.media.tablet} {
    width: 440px;
    height: 620px;
    top: 0; left: 0; bottom: 0; right: 0;
  }


  @media ${myTheme.media.mobile} {
    width: 310px;
    height: 440px;
    top: 0; left: 0; bottom: 0; right: 0;
  }
`;
