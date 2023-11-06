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
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores
              voluptatum explicabo mollitia corrupti eum fuga vel maiores
              blanditiis voluptatem, numquam amet laborum quidem eius soluta
              nemo unde nam. Adipisci, magni. Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Dolores voluptatum explicabo
              mollitia corrupti eum fuga vel maiores blanditiis voluptatem,
              numquam amet laborum quidem eius soluta nemo unde nam. Adipisci,
              magni.
            </p>
          </FlexWrapper>
        </FlexWrapper>
      </Container>
    </Styles.About>
  );
};