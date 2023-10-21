import React from "react";
import styled from "styled-components";
import { myTheme } from "../../../../styles/Theme.styled";

type WorkPropsType = {
  title: string;
  text: string;
  src: string;
}

export const Work = (props: WorkPropsType) => {
  return (
    <WorkStyled>
      <ImgStyled src={props.src} alt="photo"/>
      <TitleProject>{props.title}</TitleProject>
      <Link href={"#"}>Visit</Link>
    </WorkStyled>
  );
};

const WorkStyled = styled.div`
`

const ImgStyled = styled.img`
  width: 580px;
  height: 450px;
  object-fit: cover;
  
`

const TitleProject = styled.h3`
  color: ${myTheme.colors.accentA};
  font-family: "Poppins", sans-serif;
  font-size: 26px;
  font-weight: 600;
  line-height: 38px;
  letter-spacing: 3px;
`

const Link = styled.a`
  color: ${myTheme.colors.accentA};
  cursor: pointer;
  font-family: "Poppins";
  font-size: 12px;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: 3px;
`