import React from "react";
import { Container } from "../../../components/Container_Styles";
import { SectionTitle } from "../../../components/SectionTitle_Styles";
import { Styles } from "./Skills_Styles";

const skills = [
  "JavaScript (ES6+)",
  "TypeScript",
  "React",
  "Next.js (SSR)",
  "Redux Toolkit",
  "RTK Query",
  "React Hook Form",
  "Zod",
  "CSS",
  "MUI",
  "Radix UI",
  "Axios",
  "WebSocket (Socket.io)",
  "Storybook",
  "Git",
  "GitHub",
  "CI/CD (Jenkins, Kubernetes)",
];

export const Skills: React.FC = () => {
  return (
    <Styles.Skills id="skills">
      <Container>
        <SectionTitle>My skills</SectionTitle>
        <Styles.MarqueeWrapper>
          <Styles.MarqueeContent>
            {[...skills, ...skills].map((skill, index) => (
              <Styles.SkillItem key={index}>{skill}</Styles.SkillItem>
            ))}
          </Styles.MarqueeContent>
        </Styles.MarqueeWrapper>
      </Container>
    </Styles.Skills>
  );
};
