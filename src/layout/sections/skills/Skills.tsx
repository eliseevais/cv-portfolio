import React from "react";
import styled from "styled-components";
import { myTheme } from "../../../styles/Theme.styled";
import { Skill } from "./skill/Skill";
import { FlexWrapper } from "../../../components/FlexWrapper.styled";
import { SectionTitle } from "../../../components/SectionTitle.styled";

export const Skills = () => {
  return (
    <SkillsWrapper>

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
    </SkillsWrapper>
  );
};

const SkillsWrapper=styled.section`
  width: 100%;
  background-color: ${myTheme.colors.backgroundB};
  display: flex;
  justify-content: center;
`

const SkillsStyled = styled.section`
  width: 1300px;
  display: flex;
  flex-direction: column;
  padding: 120px 0;
`;

