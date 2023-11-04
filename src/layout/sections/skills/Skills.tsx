import React from "react";
import { Skill } from "./skill/Skill";
import { FlexWrapper } from "../../../components/FlexWrapper_Styles";
import { SectionTitle } from "../../../components/SectionTitle_Styles";
import { Container } from "../../../components/Container_Styles";
import { Styles } from "./Skills_Styles";

const skillsData = [
  { iconId: "html", title: "HTML" },
  { iconId: "css", title: "CSS" },
  { iconId: "javaScript", title: "JS" },
  { iconId: "typeScript", title: "TS" },
  { iconId: "react", title: "React" },
  { iconId: "git", title: "git" },
];

export const Skills: React.FC = () => {
  return (
    <Container>
      <Styles.Skills>
        <SectionTitle>My skills</SectionTitle>
        <FlexWrapper justify="space-between" align="center" wrap="wrap">
          {skillsData.map((skill, index) => {
            return (
              <Skill iconId={skill.iconId} key={index} title={skill.title} />
            );
          })}
        </FlexWrapper>
      </Styles.Skills>
    </Container>
  );
};
