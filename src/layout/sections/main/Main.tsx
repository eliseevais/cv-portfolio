import React from "react";
import Typewriter from "typewriter-effect";
import { Button } from "../../../components/Button_Styles";
import { Container } from "../../../components/Container_Styles";
import { FlexWrapper } from "../../../components/FlexWrapper_Styles";
import { Styles } from "./Main_Styles";
import mainPhotoSmall from "../../../assets/img/mainPhotoSmallVertical.jpg";

export const Main: React.FC = () => {
  return (
    <Styles.Main id={"home"}>
      <Container>
        <FlexWrapper direction="column" align="flex-start" justify="center">
          <Styles.TitleP>welcome</Styles.TitleP>
          <h3>
            I'm Irina <br /> Eliseeva
          </h3>
          <h1>
            <p>Front-end web developer</p>
            <Typewriter
              options={{
                strings: ["Front-end web developer"],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <Button>Download CV</Button>
        </FlexWrapper>

        <Styles.PhotoWrapper>
          <Styles.PhotoStyled src={mainPhotoSmall} alt="myPhoto" />
        </Styles.PhotoWrapper>
      </Container>
    </Styles.Main>
  );
};
