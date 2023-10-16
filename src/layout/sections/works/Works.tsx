import React from "react";
import styled from "styled-components";
import { myTheme } from "../../../styles/Theme.styled";
import { SectionTitle } from "../../../components/SectionTitle.styled";
import { Menu } from "../../../components/menu/Menu.styled";
import { FlexWrapper } from "../../../components/FlexWrapper.styled";
import { Work } from "./work/Work";
import socialNetwork from "../../../assets/img/socialNetwork.jpg";
import toDoList from "../../../assets/img/toDoList.jpg";

const items = ["All", "Landing page", "React", "SPA"];

export const Works = () => {
  return (
    <WorksStyled>
      <SectionTitle>My work experience</SectionTitle>
      <FlexWrapper justify={"space-between"}>
        <Work title={"Social network"} text={"Lorem"} src={socialNetwork} />
        <Work title={"Task tracker"} text={"Lorem"} src={toDoList} />
      </FlexWrapper>
    </WorksStyled>
  );
};

const WorksStyled = styled.section`
  background-color: ${myTheme.colors.backgroundA};
  padding: 120px;
`;
