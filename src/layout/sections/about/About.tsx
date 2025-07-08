import React from "react";
import {Container} from "../../../components/Container_Styles";
import aboutPhotoVertical from "./../../../assets/img/1from2.jpg";
import {FlexWrapper} from "../../../components/FlexWrapper_Styles";
import {SectionTitle} from "../../../components/SectionTitle_Styles";
import {Styles} from "./About_Styles";

export const About: React.FC = () => {
  return (
    <Styles.About id={"about"}>
      <Container>
        <FlexWrapper justify="space-around" align="center">
          <Styles.ImgWrapper>
            <img src={aboutPhotoVertical} alt="img"/>
          </Styles.ImgWrapper>
          <FlexWrapper direction="column" justify="center">
            <SectionTitle>About</SectionTitle>
            <p>
              Frontend Developer with 1+ year of experience in building Single Page Applications (SPAs) using modern
              technologies including TypeScript, React, Next.js and Redux.
              Participated in team-based development processes, including code reviews, CI/CD workflows, and deploying projects to Kubernetes. In my spare time, I solve coding challenges on Codewars to improve my JavaScript and TypeScript skills.
              I am Open to new opportunities and collaboration. </p>
          </FlexWrapper>
        </FlexWrapper>
      </Container>
    </Styles.About>
  );
};
