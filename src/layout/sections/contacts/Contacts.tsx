import React, { ElementRef, useRef } from "react";
import { Container } from "../../../components/Container_Styles";
import { FlexWrapper } from "../../../components/FlexWrapper_Styles";
import { SectionTitle } from "../../../components/SectionTitle_Styles";
import { Button } from "../../../components/Button_Styles";
import { Styles } from "./Contacts_Styles";
import emailjs from "@emailjs/browser";

export const Contacts: React.FC = () => {
  const form = useRef<ElementRef<"form">>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        "service_5pa556g",
        "template_tidpoej",
        form.current,
        "mk7IMrpTg9auxOSb0"
      )
      .then(
        (result) => {
          console.log("SUCCESS:", result.text);
          alert("✅ Message sent successfully!");
          form.current?.reset();
        },
        (error) => {
          console.error("FAILED:", error.text);
          alert("❌ Failed to send message. Please try again.");
        }
      );
  };

  return (
    <Styles.Contacts id="contact">
      <Container>
        <FlexWrapper direction="column" justify="center" align="center">
          <SectionTitle>Interested in my work</SectionTitle>
          <Styles.Form ref={form} onSubmit={sendEmail}>
            <Styles.Field required name="user_name" placeholder="Name" />
            <Styles.Field required type="email" name="email" placeholder="E-mail" />
            <Styles.Field required name="subject" placeholder="Subject" />
            <Styles.Field
              required
              name="message"
              as="textarea"
              placeholder="Message"
              rows={5}
            />
            <Button type="submit">Send</Button>
          </Styles.Form>
        </FlexWrapper>
      </Container>
    </Styles.Contacts>
  );
};
