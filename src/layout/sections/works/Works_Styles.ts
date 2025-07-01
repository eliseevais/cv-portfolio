import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle_Styles";
import { myTheme } from "../../../styles/Theme.styled";
import { FlexWrapper } from "../../../components/FlexWrapper_Styles";

const ImgWrapper = styled.div`
  position: relative;
`;

const ImgStyled = styled.img`
  max-width: 600px;
  width: 100%;
  object-fit: cover;
  aspect-ratio: 4 / 3;
`;

const TitleProject = styled.h4`
  position: absolute;
  left: 64px;
  bottom: 80px; 

  @media ${myTheme.media.tablet} {
    left: 40px;
    bottom: 88px; 
  }

  @media ${myTheme.media.mobile} {
    bottom: 80px; 
    left: 24px;
  }
`;

const LinksWrapper = styled.div`
  position: absolute;
  bottom: 48px;
  left: 64px;
  display: flex;
  gap: 40px; 

  @media ${myTheme.media.tablet} {
    bottom: 32px;
    left: 40px;
    flex-direction: column;
    gap: 8px; 
    padding-top: 8px; 
  }

  @media ${myTheme.media.mobile} {
    bottom: 24px;
    left: 24px;
    gap: 8px; 
    padding-top: 8px; 
  }
`;

const Link = styled.a`
  cursor: pointer;
  letter-spacing: 4px;
`;

const Work = styled.div`
  margin: 8px;
  max-width: 600px;
  width: 100%;
  position: relative;
  flex-grow: 1;
  aspect-ratio: 4 / 3;

  &:hover {
    ${ImgStyled} {
      filter: brightness(40%);
      transition: ${myTheme.animations.transition};
    }
  }

  @media ${myTheme.media.largeTablet} {
    max-width: 448px;
    width: 352px;
    margin-bottom: 8px;
    gap: 40px;
  }

  @media ${myTheme.media.mobile} {
    max-width: 360px;
    width: 304px;
  }
`;

const Works = styled.section`
  padding: 120px 16px 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;

  ${SectionTitle} {
    position: relative;
    width: fit-content;
  }

  @media ${myTheme.media.largeTablet} {
    padding-top: 72px;
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
  TitleProject,
  LinksWrapper,
  Link,
  Work,
  Works,
};
