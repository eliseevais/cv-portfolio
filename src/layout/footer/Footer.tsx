import React from "react";
import styled from "styled-components";
import { myTheme } from "../../styles/Theme.styled";
import { Icon, IconFooter } from "../../components/menu/icon/Icon";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Container } from "../../components/Container";
import { SectionTitle } from "../../components/SectionTitle";

export const Footer = () => {
  return (
    <Container>
      <FooterStyled>
        <FlexWrapper justify="space-between">
          <ContactsFooter>
            <h6>irina.eliseeva1991@gmail.com</h6>
            <h6>Web designer and front-end developer</h6>
          </ContactsFooter>
          <MediaBlock>
            <h6>Media</h6>
            <SocialList>
              <SocialItem>
                <SocialLink>
                  <IconFooter
                    height={"40px"}
                    width={"40px"}
                    viewBox={"0 0 40 40"}
                    iconId={"telegram"}
                  />
                </SocialLink>
              </SocialItem>
              <SocialItem>
                <SocialLink>
                  <IconFooter
                    height={"40px"}
                    width={"40px"}
                    viewBox={"0 0 40 40"}
                    iconId={"phone"}
                  />
                </SocialLink>
              </SocialItem>
              <SocialItem>
                <SocialLink>
                  <IconFooter
                    height={"40px"}
                    width={"40px"}
                    viewBox={"0 0 40 40"}
                    iconId={"email"}
                  />
                </SocialLink>
              </SocialItem>
            </SocialList>
          </MediaBlock>
        </FlexWrapper>
        <Copyright>&copy; 2023, Made by Irina Eliseeva</Copyright>
      </FooterStyled>
    </Container>
  );
};

const FooterStyled = styled.footer`
  padding-bottom: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const ContactsFooter = styled.div`
  min-width: 800px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  line-height: 20px;
`;

const MediaBlock = styled.div`
  min-width: 100px;

  h6 {
    margin-bottom: 0.5em;
  }
`;

const SocialList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
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

const Copyright = styled.small``;
