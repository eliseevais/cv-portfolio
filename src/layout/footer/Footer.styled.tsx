import React from "react";
import styled from "styled-components";
import { myTheme } from "../../styles/Theme.styled";
import { Icon } from "../../components/menu/icon/Icon";
import { FlexWrapper } from "../../components/FlexWrapper.styled";

export const Footer = () => {
  return (
    <FooterWrapper>
      <FooterStyled>
        <FlexWrapper direction={"column"} align={"center"}>
          <SocialList>
            <SocialItem>
              <SocialLink>
                <Icon
                  height={"40px"}
                  width={"40px"}
                  viewBox={"0 0 40 40"}
                  iconId={"telegram"}
                />
              </SocialLink>
            </SocialItem>

            <SocialItem>
              <SocialLink>
                <Icon
                  height={"40px"}
                  width={"40px"}
                  viewBox={"0 0 40 40"}
                  iconId={"phone"}
                />
              </SocialLink>
            </SocialItem>

            <SocialItem>
              <SocialLink>
                <Icon
                  height={"40px"}
                  width={"40px"}
                  viewBox={"0 0 40 40"}
                  iconId={"email"}
                />
              </SocialLink>
            </SocialItem>
          </SocialList>

          <Copyright>&copy; 2023, Irina Eliseeva</Copyright>
        </FlexWrapper>
      </FooterStyled>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  width: 100%;
  background-color: ${myTheme.colors.backgroundB};
  display: flex;
  justify-content: center;
`;

const FooterStyled = styled.footer`
  color: ${myTheme.colors.accentA};
  padding: 20px 0 20px 0;
`;

const SocialList = styled.ul`
  display: flex;
`;

const SocialLink = styled.a``;

const SocialItem = styled.li``;

const Copyright = styled.small`
  font-family: "Poppins";
  font-weight: 300;
  font-size: 12px;
  letter-spacing: 10px;
  text-transform: uppercase;
`;
