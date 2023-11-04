import styled from "styled-components";
import { myTheme } from "../../styles/Theme.styled";

const ContactsFooter = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  line-height: 20px;
`;

const Copyright = styled.small`
  align-self: center;
`;

const Footer = styled.footer`
  padding: 0 14px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const MediaBlock = styled.div`
  small {
    margin-bottom: 0.5em;
  }
`;

const SocialItem = styled.div`
  &:hover {
    transform: translateY(-4px);
  }
`;

const SocialLink = styled.a`
  color: ${myTheme.colors.accentA};
  cursor: pointer;

  &:hover {
    color: ${myTheme.colors.accentB};
    transform: translateY(-2px);
  }
`;

const SocialList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Styles = {
  ContactsFooter,
  Copyright,
  Footer,
  MediaBlock,
  SocialItem,
  SocialLink,
  SocialList,
};
