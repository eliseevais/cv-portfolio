import styled from "styled-components";
import { myTheme } from "../../styles/Theme.styled";

const ContactsFooter = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  align-items: center;
  font-size: 0.95rem;
  color: ${myTheme.colors.backgroundA};
  line-height: 1.4;
  margin-bottom: 12px;

  small {
    white-space: nowrap;
  }

  @media ${myTheme.media.tablet} {
    flex-direction: column;
    gap: 0;

    small {
      white-space: normal;
      display: block;
      margin-bottom: 4px;
    }

    small:last-child {
      margin-bottom: 0;
    }
  }
`;

const Copyright = styled.small`
  width: 100%;
  text-align: center;
  font-size: 0.85rem;
  color: ${myTheme.colors.accentA};
  user-select: none;
  display: flex;
  justify-content: center;
`;

const Footer = styled.footer`
  padding: 20px 14px;
  background-color: ${myTheme.colors.backgroundA};
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Styles = {
  ContactsFooter,
  Copyright,
  Footer,
};
