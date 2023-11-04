import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle_Styles";
import { myTheme } from "../../../styles/Theme.styled";
import { Button } from "../../../components/Button_Styles";

const Contacts = styled.section`
  padding: 100px 14px 120px;

  ${SectionTitle} {
    margin-bottom: 40px;
  }

  textarea {
    resize: none;
    height: 160px;
  }

  ${Button} {
    margin-top: 34px;
  }

  @media ${myTheme.media.tablet} {
    padding: 40px 14px;
  }
`;

const Field = styled.input`
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

const Form = styled.form`
  max-width: 600px;
  width: 100%;
  gap: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Styles = {
  Contacts,
  Field,
  Form,
};
