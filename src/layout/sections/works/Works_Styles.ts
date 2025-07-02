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

const InfoOverlay = styled.div`
  position: absolute;
  bottom: 24px;
  left: 24px;
  right: 24px;

  background-color: rgba(43, 42, 42, 0.4);
  -webkit-backdrop-filter: blur(8px);
  padding: 16px 24px;

  display: flex;
  flex-direction: column;
  gap: 16px;
  
  @media ${myTheme.media.tablet} {
    left: 16px;
    right: 16px;
    bottom: 16px;
  }

  @media ${myTheme.media.mobile} {
    left: 8px;
    right: 8px;
    bottom: 8px;
    padding: 12px 16px;
  }
`;

const TitleProject = styled.h4`
  margin: 0;
`;

const LinksWrapper = styled.div`
  display: flex;
  gap: 40px;

  @media ${myTheme.media.tablet} {
    flex-direction: column;
    gap: 8px;
  }

  @media ${myTheme.media.mobile} {
    gap: 8px;
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

    ${InfoOverlay} {
      background-color: transparent;
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
  InfoOverlay,
  TitleProject,
  LinksWrapper,
  Link,
  Work,
  Works,
};
