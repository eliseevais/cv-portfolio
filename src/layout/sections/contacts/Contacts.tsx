import React from "react";
import styled from "styled-components";
import { Container } from "../../../components/Container";
import { myTheme } from "../../../styles/Theme.styled";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SectionTitle } from "../../../components/SectionTitle";
import { Button } from "../../../components/Button";

export const Contacts = () => {
  return (
    <Container>
      <ContactsStyled>
        <SectionTitle>Interested <br />in my work </SectionTitle>
        <FlexWrapper justify="space-between">
          <FormStyled>
            <FieldStyled name="your name" placeholder="Your name" />
            <FieldStyled name="e-mail" placeholder="Your e-mail" />
            <FieldStyled name="subject" placeholder="subject" />
            <FieldStyled name="message" as={"textarea"} placeholder="message" />
            <Button type={"submit"}>Contact me</Button>
          </FormStyled>
        </FlexWrapper>
      </ContactsStyled>
    </Container>
  );
};

const ContactsStyled = styled.section`
  padding: 120px 0;
  display: flex;
  justify-content: space-between;
`;

const FormStyled = styled.form`
  min-width: 600px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const FieldStyled = styled.input`
  min-height: 40px;
  padding: 6px;
  border-radius: 10px;
  font-family: "Poppins", sans-serif;
  letter-spacing: 1.5px;
`;
