import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle_Styles";
import { myTheme } from "../../../styles/Theme.styled";
import { FlexWrapper } from "../../../components/FlexWrapper_Styles";

const ImgWrapper = styled.div``;

const ImgStyled = styled.img`
  max-width: 600px;
  width: 100%;
  object-fit: cover;
  aspect-ratio: 4/3;
`;

const Link = styled.a`
  cursor: pointer;
  letter-spacing: 3px;
  position: absolute;
  left: 65px;
  bottom: 46px;

  @media ${myTheme.media.tablet} {
    left: 42px;
    bottom: 28px;
  }
`;

const TitleProject = styled.h4`
  position: absolute;
  left: 65px;
  bottom: 66px;

  @media ${myTheme.media.tablet} {
    left: 42px;
    bottom: 42px;
  }
`;

const Work = styled.div`
  margin: 10px;
  max-width: 600px;
  width: 100%;
  position: relative;
  flex-grow: 1;
  aspect-ratio: 4/3;
 
  &:hover {
    ${ImgStyled} {
      filter: brightness(40%);
      transition: ${myTheme.animations.transition};
    }
  }

  @media ${myTheme.media.largeTablet} {
    max-width: 450px;
    width: 360px;
    margin-bottom: 8px;
    gap: 10%;
  }

  @media ${myTheme.media.mobile} {
    max-width: 360px;
    width: 300px;
  }
`;

const Works = styled.section`
  padding: 120px 14px 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;

  ${SectionTitle} {
    position: relative;
    width: fit-content;

    /* ::before {
      content: "";
      border-bottom: 1px solid ${myTheme.colors.accentA};
      position: absolute;
      height: 2px;
      width: 70%;
      top: -10px;
    } */
  }

  @media ${myTheme.media.largeTablet} {
    padding-top: 70px;
    align-items: center;

    ${FlexWrapper} {
      justify-content: center;
      align-items: center;
    }

    ${SectionTitle} {
      margin: 0 auto 32px;

      @media ${myTheme.media.largeTablet} {
        &::before {
          display: none;
        }
      }
    }
  }
`;

export const Styles = {
  ImgWrapper,
  ImgStyled,
  Link,
  TitleProject,
  Work,
  Works,
};
