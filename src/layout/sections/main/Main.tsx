import React from "react";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Button } from "../../../components/Button";
import mainPhotoSmall from "../../../assets/img/mainPhotoSmallVertical.jpg";
import { Container } from "../../../components/Container";
import { Styles } from "./Main_Styles";

export const Main: React.FC = () => {
  return (
    <Container>
      <Styles.Main>
        <FlexWrapper direction="column" align="flex-start" justify="center">
          <span>welcome</span>
          <h3>
            I'm Irina <br /> Eliseeva
          </h3>
          <h1>Front-end web developer</h1>
          <Button>Download CV</Button>
        </FlexWrapper>
        <Styles.PhotoWrapper>
          <Styles.PhotoStyled src={mainPhotoSmall} alt="myPhoto" />
        </Styles.PhotoWrapper>
      </Styles.Main>
    </Container>
  );
};
