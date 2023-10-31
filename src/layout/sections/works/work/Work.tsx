import React from "react";
import styled from "styled-components";
import { myTheme } from "../../../../styles/Theme.styled";

type WorkPropsType = {
  title: string;
  text: string;
  src?: string;
};

export const Work = (props: WorkPropsType) => {
  return (
    <WorkStyled>
      <ImgWrapper>
        <ImgStyled src={props.src} alt="photo" />
      </ImgWrapper>
      <TitleProject>{props.title}</TitleProject>
      <Link href={"#"}>Visit</Link>
    </WorkStyled>
  );
};

const ImgWrapper = styled.div`
  
`

const ImgStyled = styled.img`
  max-width: 600px; 
  width: 100%;
  object-fit: cover;
  aspect-ratio: 4/3;

`;

const WorkStyled = styled.div`
  margin: 10px;
  max-width: 600px;
  width: 100%;
  position: relative;
  flex-grow: 1;
  aspect-ratio: 4/3;

  &:hover {
    ${ImgStyled} {
      filter: brightness(40%);
      transition: 0.5s;
    }
  }

  @media ${myTheme.media.largeTablet} {
    max-width: 450px;
    width: 360px;
    margin-bottom: 8px;
    gap: 10%
  }

  @media ${myTheme.media.mobile} {
    max-width: 360px;
    width: 300px;
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
