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
  { iconId: "git", title: "git" },
  { iconId: "react", title: "React" },
  { iconId: "react", title: "RTK" },
  { iconId: "react", title: "Saga" },
];

export const Skills: React.FC = () => {
  return (
    <Styles.Skills id={"skills"}>
        <Container>
        <SectionTitle>My skills</SectionTitle>
        <FlexWrapper justify="space-between" align="center" wrap="wrap">
          {skillsData.map((skill, index) => {
            return (
              <Skill iconId={skill.iconId} key={index} title={skill.title} />
            );
          })}
        </FlexWrapper>
    </Container>
      </Styles.Skills>
  );
};
