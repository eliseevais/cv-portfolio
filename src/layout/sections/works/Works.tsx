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
    <WorksWrapper>
      <WorksStyled>
        <SectionTitle>My work experience</SectionTitle>
        <FlexWrapper justify={"space-between"}>
          <Work title={"Social network"} text={"Lorem"} src={socialNetwork} />
          <Work title={"Task tracker"} text={"Lorem"} src={toDoList} />
        </FlexWrapper>
      </WorksStyled>
    </WorksWrapper>
  );
};

const WorksWrapper = styled.section`
  width: 100%;
  background-color: ${myTheme.colors.backgroundA};
  display: flex;
  justify-content: center;
`;

const WorksStyled = styled.section`
  width: 1300px;
  padding: 120px 0;
`;
