import styled from "styled-components";
import { myTheme } from "../../../styles/Theme.styled";
import { FlexWrapper } from "../../../components/FlexWrapper_Styles";
import { Button } from "../../../components/Button_Styles";

const Main = styled.section`
  min-height: 100vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 60px 14px;
  position: relative;

  ${Button} {
    margin-top: 34px;
  }

  @media ${myTheme.media.bigTablet} {
    flex-wrap: wrap-reverse;
    justify-content: center;
    align-items: flex-start;

    ${FlexWrapper} {
      align-items: center;
    }
  }

  @media ${myTheme.media.tablet} {

    ${FlexWrapper} {
      align-items: center;
    }

    span {
      margin-top: 30px;
    }
  }

  @media ${myTheme.media.mobile} {
  }
`;

const PhotoWrapper = styled.div``;

const PhotoStyled = styled.img`
  max-width: 560px;
  width: 100%;
  height: 810px;
  object-fit: cover;
  align-self: flex-start;
  aspect-ratio: 3/4;
  position: absolute;
  top: 0;
  right: calc(5%);

  @media ${myTheme.media.moreThenTwoK} {
    margin: auto;
    top: 0;
    auto: 0;
    bottom: 0;
    right: 0;
  }

  @media ${myTheme.media.bigTablet} {
    margin: 0 auto;
    width: 440px;
    height: 620px;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }

  @media ${myTheme.media.tablet} {
    width: 440px;
    height: 620px;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }

  @media ${myTheme.media.mobile} {
    width: 310px;
    height: 440px;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
`;

export const Styles = {
  Main,
  PhotoWrapper,
  PhotoStyled,
};
