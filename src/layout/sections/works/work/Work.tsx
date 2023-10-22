import React from "react";
import styled from "styled-components";
import { myTheme } from "../../../../styles/Theme.styled";
import socialNetwork from "../../../../assets/img/socialNetwork.jpg";

type WorkPropsType = {
  title: string;
  text: string;
  src?: string;
  img?: string;
};

export const Work = (props: WorkPropsType) => {
  return (
    <WorkStyled background-image={props.img}>
      <ImgStyled src={props.src} alt="photo" />
      <TitleProject>{props.title}</TitleProject>
      <Link href={"#"}>Visit</Link>
    </WorkStyled>
  );
};

const WorkStyled = styled.div`
  margin-bottom: 80px;
  width: 580px;
  height: 450px;
  background-position: center;
  background-repeat: no-repeat;

  background-image: url(${socialNetwork});

  :hover{ 
    transition: 0.5s;
    backdrop-filter: brightness(40%);
  }
`;

const ImgStyled = styled.img`
  width: 580px;
  height: 450px;
  object-fit: cover;

  transition: 0.5s;

  :hover {
    filter: brightness(40%);
  }
`;

const TitleProject = styled.h3`
  color: ${myTheme.colors.accentA};
  font-family: "Poppins", sans-serif;
  font-size: 26px;
  font-weight: 600;
  line-height: 38px;
  letter-spacing: 3px;
`;

const Link = styled.a`
  color: ${myTheme.colors.accentA};
  cursor: pointer;
  font-family: "Poppins";
  font-size: 12px;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: 3px;
`;
