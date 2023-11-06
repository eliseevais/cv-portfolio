import React, { ElementRef, useRef } from "react";
import { Container } from "../../../components/Container_Styles";
import { FlexWrapper } from "../../../components/FlexWrapper_Styles";
import { SectionTitle } from "../../../components/SectionTitle_Styles";
import { Button } from "../../../components/Button_Styles";
import { Styles } from "./Contacts_Styles";
import emailjs from "@emailjs/browser";

export const Contacts: React.FC = () => {
  const form = useRef<ElementRef<"form">>(null);

  const sendEmail = (e: any) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        "service_4kecq46",
        "template_tidpoej",
        form.current,
        "Y3qO1MyQO3FkM1HlU"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
      e.target.reset()
  };

  return (
    <Styles.Contacts id={"contact"}>
      <Container>
        <FlexWrapper direction="column" justify="center" align="center">
          <SectionTitle>Interested in my work </SectionTitle>
          <Styles.Form ref={form} onSubmit={sendEmail}>
            <Styles.Field required name="user_name" placeholder="name" />
            <Styles.Field required name="email" placeholder="e-mail" />
            <Styles.Field required name="subject" placeholder="subject" />
            <Styles.Field required
              name="message"
              as={"textarea"}
              placeholder="message"
            />
            <Button type={"submit"}>Send</Button>
          </Styles.Form>
        </FlexWrapper>
      </Container>
    </Styles.Contacts>
  );
};
