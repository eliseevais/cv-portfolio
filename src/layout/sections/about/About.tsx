import React from "react";
import { Container } from "../../../components/Container_Styles";
import aboutPhotoVertical from "./../../../assets/img/AboutPhotoVertical.jpg";
import { FlexWrapper } from "../../../components/FlexWrapper_Styles";
import { SectionTitle } from "../../../components/SectionTitle_Styles";
import { Styles } from "./About_Styles";

export const About: React.FC = () => {
  return (
    <Styles.About id={"about"}>
      <Container>
        <FlexWrapper justify="space-around" align="center">
          <Styles.ImgWrapper>
            <img src={aboutPhotoVertical} alt="img" />
          </Styles.ImgWrapper>
          <FlexWrapper direction="column" justify="center">
            <SectionTitle>About</SectionTitle>
            <p>
              Welcome to my portfolio page! My name is Irina Eliseeva and I am a beginner React Frontend developer. You can get acquainted with my projects In the "Portfolio" section. There are: Todolist with Redux Toolkit, Calculator with Local storage and an example of using Normalized state. For these applications I used Material UI library, CSS and styled component. I will be glad to cooperate with you!
            </p>
          </FlexWrapper>
        </FlexWrapper>
      </Container>
    </Styles.About>
  );
};
