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
  display: flex;
  justify-content: center;
`;

const Footer = styled.section`
  padding: 0 14px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
`;

const MediaBlock = styled.div`
  small {
    margin-bottom: 0.5em;
  };
  width: 250px;
`;

const SocialItem = styled.div`
  &:hover {
    transform: translateY(-4px);
  }
`;

const SocialLink = styled.a`
  color: ${myTheme.colors.accentA};
  cursor: pointer;
  transition: ${myTheme.animations.transition};

  &:hover {
    color: ${myTheme.colors.accentB};
    scale: calc(1.01);
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
