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
        <FlexWrapper
          direction="column"
          align="flex-start"
          justify="space-around"
        >
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
  justify-content: space-around;
  align-items: center;
  padding: 60px 14px;
  /* outline: 1px solid ${myTheme.colors.accentB}; */

  @media ${myTheme.media.bigTablet} {
    flex-wrap: wrap-reverse;
    justify-content: center;
    
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

const PhotoWrapper = styled.div`
`;

const PhotoStyled = styled.img`
  max-width: 560px;
  width: 100%;
  height: 800px;
  object-fit: cover;
  object-position: center;
  align-self: flex-start;
  aspect-ratio: 3/4;

  @media ${myTheme.media.tablet} {
    width: 465px;
    height: 660px;
  }

  @media ${myTheme.media.mobile} {
    width: 310px;
    height: 440px;
  }
`;
