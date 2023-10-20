import React from "react";
import styled from "styled-components";
import { myTheme } from "../../../styles/Theme.styled";
import { Skill } from "./skill/Skill";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SectionTitle } from "../../../components/SectionTitle";
import { ContainerWrapper } from "../../../components/ContainerWrapper";

export const Skills = () => {
  return (
    <ContainerWrapper bgColor={myTheme.colors.backgroundB}>
      <SkillsStyled>
        <SectionTitle>My skills</SectionTitle>
        <FlexWrapper justify={"space-between"} align={"center"}>
          <Skill iconId={"html"} title={"HTML"} />
          <Skill iconId={"css"} title={"CSS"} />
          <Skill iconId={"javaScript"} title={"JavaScript"} />
          <Skill iconId={"typeScript"} title={"TypeScript"} />
          <Skill iconId={"react"} title={"React"} />
          <Skill iconId={"git"} title={"Git"} />
        </FlexWrapper>
      </SkillsStyled>
    </ContainerWrapper>
  );
};

const SkillsStyled = styled.section`
  width: 1300px;
  display: flex;
  flex-direction: column;
  padding: 120px 0;
`;