import React from "react";
import styled from "styled-components";
import { myTheme } from "../../../styles/Theme.styled";
import { Skill } from "./skill/Skill";
import { FlexWrapper } from "../../../components/FlexWrapper.styled";
import { SectionTitle } from "../../../components/SectionTitle.styled";

export const Skills = () => {
  return (
    <SkillsStyled>
      <SectionTitle>My skills</SectionTitle>
      <FlexWrapper justify={"space-evenly"} align={"center"} >
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
  min-height: 600px;
  display: flex;
  flex-direction: column;
`;

