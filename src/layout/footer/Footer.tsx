import React from "react";
import styled from "styled-components";
import { myTheme } from "../../styles/Theme.styled";
import { Icon } from "../../components/menu/icon/Icon";
import { FlexWrapper } from "../../components/FlexWrapper";
import { ContainerWrapper } from "../../components/ContainerWrapper";

export const Footer = () => {
  return (
    <ContainerWrapper bgColor={myTheme.colors.backgroundB}>
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
    </ContainerWrapper>
  );
};

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
