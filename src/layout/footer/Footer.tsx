import React from "react";
import styled from "styled-components";
import { myTheme } from "../../styles/Theme.styled";
import { Icon, IconFooter } from "../../components/menu/icon/Icon";
import { FlexWrapper } from "../../components/FlexWrapper";
import { ContainerWrapper } from "../../components/ContainerWrapper";
import { SectionTitle } from "../../components/SectionTitle";

export const Footer = () => {
  return (
    <ContainerWrapper bgColor={myTheme.colors.backgroundA}>
      <FooterStyled>
        <FlexWrapper justify="space-between">
          <ContactsFooter>
            <p>irina.eliseeva1991@gmail.com</p>
            <p>Web designer and front-end developer</p>
          </ContactsFooter>
          <MediaBlock>
            <div>Media</div>
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
    </ContainerWrapper>
  );
};

const FooterStyled = styled.footer`
  width: 1300px;
  color: ${myTheme.colors.accentA};
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

  font-family: "Fira Code", sans-serif;
  font-weight: 500;
  font-size: 12px;
  text-transform: none;
`;

const MediaBlock = styled.div`
  min-width: 100px;

  font-family: "Fira Code", sans-serif;
  font-weight: 500;
  font-size: 12px;
  text-transform: none;

  div {
    margin-bottom: 0.5em;
  }
`;

const SocialList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SocialItem = styled.li``;

const SocialLink = styled.a``;

const Copyright = styled.small`
  font-family: "Fira Code", sans-serif;
  font-weight: 400;
  font-size: 12px;
  text-transform: none;
`;
