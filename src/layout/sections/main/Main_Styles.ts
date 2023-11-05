import styled from "styled-components";
import { myTheme } from "../../../styles/Theme.styled";
import { FlexWrapper } from "../../../components/FlexWrapper_Styles";
import { Button } from "../../../components/Button_Styles";
import { myFont } from "../../../styles/Common";
import { Container } from "../../../components/Container_Styles";

const Main = styled.section`
  ${Container} {
    min-height: 93vh;
    display: flex;
    justify-content: space-between;
    padding: 0 14px;
    align-items: center;
    /* position: relative; */
  }

  p {
    display: none;
  }

  span {
    margin-top: 30px;
  }

  ${Button} {
    margin-top: 34px;
  }

  @media ${myTheme.media.tablet} {
  
    ${Container} {
      flex-direction: column-reverse;
      justify-content: center;
      align-items: center;
      padding-top: 0;
    }

    ${FlexWrapper} {
      justify-content: center;
      align-items: center;
    }
  }

  @media ${myTheme.media.mobile} {
    ${Container} {
      padding: 0 14px 80px;
    }
  }
`;

const PhotoWrapper = styled.div`
  position: relative;
`;

const PhotoStyled = styled.img`
  max-width: 560px;
  width: 100%;
  height: 810px;
  object-fit: cover;
  align-self: flex-start;
  aspect-ratio: 3/4;
  /* position: absolute;
  top: 0;
  right: calc(5%); */

  @media ${myTheme.media.bigTablet} {
    width: 400px;
    height: 570px;
  }

  @media ${myTheme.media.tablet} {
  }

  @media ${myTheme.media.mobile} {
    width: 230px;
    height: 360px;
  }
`;

const TitleP = styled.div`
  ${myFont({
    weight: 300,
    lineHeight: 1.5,
    Fmax: 26,
    Fmin: 18,
  })}

  letter-spacing: 10px;
  text-transform: uppercase;

  @media ${myTheme.media.tablet} {
    margin-top: 34px;
  }
`;

export const Styles = {
  Main,
  PhotoWrapper,
  PhotoStyled,
  TitleP,
};
