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
              Welcome to my portfolio, dear guest. My name is Irina Eliseeva and
              I studied at one of the best it&#8209;schools &#8209; "It&#8209;incubator". I
              got experience from professionals, and Now I am a react
              frontend&#8209;developer. You can check the results of my work in the
              section below. I believe, that we can enjoy our work cooperation
              and get quality result.
            </p>
          </FlexWrapper>
        </FlexWrapper>
      </Container>
    </Styles.About>
  );
};
