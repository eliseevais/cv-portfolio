import React from "react";
import { Container } from "../../../components/Container_Styles";
import { FlexWrapper } from "../../../components/FlexWrapper_Styles";
import { SectionTitle } from "../../../components/SectionTitle_Styles";
import { Button } from "../../../components/Button_Styles";
import { Styles } from "./Contacts_Styles";

export const Contacts: React.FC = () => {
  return (
    <Styles.Contacts id={"contact"}>
      <Container>
        <FlexWrapper direction="column" justify="center" align="center">
          <SectionTitle>Interested in my work </SectionTitle>
          <Styles.Form>
            <Styles.Field name="your name" placeholder="name" />
            <Styles.Field name="e-mail" placeholder="e-mail" />
            <Styles.Field name="subject" placeholder="subject" />
            <Styles.Field
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
