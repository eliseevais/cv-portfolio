import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../../components/FlexWrapper.styled";
import { Icon } from "../../components/menu/icon/Icon";
import { SectionTitle } from "../../components/SectionTitle.styled";
import { myTheme } from "../../styles/Theme.styled";
import { Skill } from "./skill/Skill";

export const Skills = () => {
  return (
    <SkillsStyled>
      <SectionTitle>My skills</SectionTitle>
      <FlexWrapper justify={"space-between"} align={"center"} >
        <Skill iconId={"html"} title={"HTML"} />
        <Skill iconId={"css"} title={"CSS"} />
        <Skill iconId={"javaScript"} title={"JavaScript"} />
        <Skill iconId={"typeScript"} title={"TypeScript"} />
        <Skill iconId={"react"} title={"React"} />
        <Skill iconId={"git"} title={"Git"} />
      </FlexWrapper>
    </SkillsStyled>
  );
};

const SkillsStyled = styled.section`
  background-color: ${myTheme.colors.backgroundB};
  min-height: 400px;
  display: flex;
  flex-direction: column;
  padding: 68px 118px 68px 118px;
`;

