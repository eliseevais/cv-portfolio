import React from "react";
import Typewriter from "typewriter-effect";
import { Button } from "../../../components/Button_Styles";
import { Container } from "../../../components/Container_Styles";
import { FlexWrapper } from "../../../components/FlexWrapper_Styles";
import { Styles } from "./Main_Styles";
import mainPhotoSmall from "../../../assets/img/2.jpg";
import cvPdf from "../../../assets/Irina_Eliseeva_CV_frontend.jpg";

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
            <div className="typewriter-wrapper">
              <Typewriter
                options={{
                  strings: ["Front-end web developer"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
          </h1>
          <Button
            as="a"
            href={cvPdf}
            download
            target="_blank"
            rel="noopener noreferrer"
          >
            Download CV
          </Button>
        </FlexWrapper>

        <Styles.PhotoWrapper>
          <Styles.PhotoStyled src={mainPhotoSmall} alt="myPhoto" />
        </Styles.PhotoWrapper>
      </Container>
    </Styles.Main>
  );
};
