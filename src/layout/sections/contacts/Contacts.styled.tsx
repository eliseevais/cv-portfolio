import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle.styled";
import { myTheme } from "../../../styles/Theme.styled";
import { Button } from "../../../components/Button.styled";
import { FlexWrapper } from "../../../components/FlexWrapper.styled";

export const Contacts = () => {
  return (
    <ContactsWrapper>

    <ContactsStyled>
      <SectionTitle>Interested <br/>in my work</SectionTitle>
      <FlexWrapper justify="space-between">
        <FormStyled>
          <FieldStyled placeholder="Your name" />
          <FieldStyled placeholder="Your e-mail" />
          <FieldStyled placeholder="Subject" />
          <FieldStyled as={"textarea"} placeholder="Message" />
          <Button type={"submit"}>Contact me</Button>
        </FormStyled>
      </FlexWrapper>
    </ContactsStyled>
    </ContactsWrapper>
  );
};

const ContactsWrapper = styled.section`
  width: 100%;
  background-color: ${myTheme.colors.backgroundA};
  display: flex;
  justify-content: center;
`

const ContactsStyled = styled.section`
  width: 1300px;
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
`;
