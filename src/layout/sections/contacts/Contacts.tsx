import React from "react";
import styled from "styled-components";
import { ContainerWrapper } from "../../../components/ContainerWrapper";
import { myTheme } from "../../../styles/Theme.styled";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SectionTitle } from "../../../components/SectionTitle";
import { Button } from "../../../components/Button";

export const Contacts = () => {
  return (
    <ContainerWrapper bgColor={myTheme.colors.backgroundA}>
      <ContactsStyled>
        <SectionTitle>Interested <br />in my work </SectionTitle>
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
    </ContainerWrapper>
  );
};

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
