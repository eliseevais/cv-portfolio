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
      <ImgStyled src={props.src} alt="photo" />
      <TitleProject>{props.title}</TitleProject>
      <Link href={"#"}>Visit</Link>
    </WorkStyled>
  );
};

const ImgStyled = styled.img`
  width: 620px;
  height: 450px;
  object-fit: cover;
`;

const WorkStyled = styled.div`
  margin-bottom: 40px;
  width: 620px;
  height: 450px;
  position: relative;

  &:hover {
    ${ImgStyled} {
      filter: brightness(40%);
      transition: 0.5s;
    }
  }
`;

const TitleProject = styled.h3`
  position: absolute;
  bottom: 66px;
  left: 65px;
`;

const Link = styled.a`
  cursor: pointer;
  letter-spacing: 3px;
  position: absolute;
  bottom: 46px;
  left: 65px;
`;
