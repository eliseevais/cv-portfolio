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
        <FlexWrapper direction="column" justify="center" align="center" >
          <SectionTitle>Interested in my work </SectionTitle>
          <FormStyled>
            <FieldStyled name="your name" placeholder="name" />
            <FieldStyled name="e-mail" placeholder="e-mail" />
            <FieldStyled name="subject" placeholder="subject" />
            <FieldStyled name="message" as={"textarea"} placeholder="message" />
            <Button type={"submit"}>Send</Button>
          </FormStyled>
        </FlexWrapper>
      </ContactsStyled>
    </Container>
  );
};

const ContactsStyled = styled.section`
  outline: 1px solid ${myTheme.colors.accentB};
  padding: 100px 14px 120px;

  ${SectionTitle} {
    margin-bottom: 40px;
  }

  textarea {
    resize: none;
    height: 160px;
  }

  @media ${myTheme.media.tablet} {
    padding: 40px 14px;
  }
`;

const FormStyled = styled.form`
  max-width: 600px;
  width: 100%;
  gap: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FieldStyled = styled.input`
  width: 100%;
  padding: 7px 15px;
  border-radius: 4px;
  background-color: ${myTheme.colors.backgroundA};
  border: 2px solid ${myTheme.colors.backgroundB};
  color: ${myTheme.colors.accentA};

  &::placeholder {
    text-transform: capitalize;
  }

  &:focus-visible {
    outline: 5px solid ${myTheme.colors.backgroundB};
  }
`;
