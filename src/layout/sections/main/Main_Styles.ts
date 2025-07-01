import styled from "styled-components";
import { myTheme } from "../../../styles/Theme.styled";
import { FlexWrapper } from "../../../components/FlexWrapper_Styles";
import { Button } from "../../../components/Button_Styles";
import { myFont } from "../../../styles/Common";
import { Container } from "../../../components/Container_Styles";

const Main = styled.section`
  position: relative;

  ${Container} {
    min-height: 100vh;
    display: flex;
    justify-content: space-between;
    padding: 0 16px; 
    align-items: flex-start;
  }

  p {
    display: none;
  }

  span {
    margin-top: 32px; 
  }

  ${Button} {
    margin-top: 36px; 
  }

  ${FlexWrapper} {
    align-self: center;
  }

  @media ${myTheme.media.moreThenTwoK} {
    align-items: center;
  }

  @media ${myTheme.media.bigTablet} {
    ${Container} {
      flex-direction: column-reverse;
      justify-content: space-around;
      align-items: center;
    }

    ${FlexWrapper} {
      justify-content: center;
      align-items: center;
    }
  }

  @media ${myTheme.media.mobile} {
    ${Container} {
      justify-content: space-around;
      padding: 0 16px 40px; 
    }
  }
`;

const PhotoWrapper = styled.div`
  position: relative;

  @media ${myTheme.media.moreThenTwoK} {
    align-self: center;
  }
`;

const PhotoStyled = styled.img`
  max-width: 560px; 
  width: 100%;
  height: 808px; 
  object-fit: cover;
  align-self: flex-start;
  aspect-ratio: 3 / 4;

  @media ${myTheme.media.bigTablet} {
    width: 400px;
    height: 568px; 
  }

  @media ${myTheme.media.tablet} {
  }

  @media ${myTheme.media.mobile} {
    width: 312px; 
    height: 440px; 
  }
`;

const TitleP = styled.div`
  ${myFont({
    weight: 300,
    lineHeight: 1.5,
    Fmax: 28, 
    Fmin: 20,
  })}

  letter-spacing: 12px; 
  text-transform: uppercase;

  @media ${myTheme.media.tablet} {
    margin-top: 12px;
  }
`;

export const Styles = {
  Main,
  PhotoWrapper,
  PhotoStyled,
  TitleP,
};
