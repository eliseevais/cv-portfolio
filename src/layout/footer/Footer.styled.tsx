import React from "react";
import styled from "styled-components";
import { myTheme } from "../../styles/Theme.styled";
import { Icon } from "../../components/menu/icon/Icon";
import { FlexWrapper } from "../../components/FlexWrapper.styled";

export const Footer = () => {
  return (
    <FooterStyled>
      <FlexWrapper direction={"column"} align={"center"}>

      {/* <SocialList>
        <SocialItem>
          <SocialLink>
            <Icon height={"20px"} width={"20px"} viewbox={"0 0 21px 21px"} iconId={"telegram"} />
          </SocialLink>
        </SocialItem>

        <SocialItem>
          <SocialLink>
            <Icon height={"20px"} width={"20px"} viewbox={"0 0 21px 21px"} iconId={"phone"} />
          </SocialLink>
        </SocialItem>

        <SocialItem>
          <SocialLink>
            <Icon height={"20px"} width={"20px"} viewbox={"0 0 21px 21px"} iconId={"email"} />
          </SocialLink>
        </SocialItem>

      </SocialList> */}

      <Copyright>&copy; 2023, Irina Eliseeva</Copyright>
      </FlexWrapper>
    </FooterStyled>
  );
};

const FooterStyled = styled.footer`
  background-color: ${myTheme.colors.backgroundB};
  color: ${myTheme.colors.accentA};
  padding: 20px 0 20px 0;
`;

const SocialList = styled.ul`
  width: 10px;
  height: 10px;
  display: flex;
  margin-bottom: 10px;
`;

const SocialLink = styled.a``;

const SocialItem = styled.li``;

const Copyright = styled.small`
  font-family: "Poppins";
  font-weight: 300;
  font-size: 12px;
  line-height: 40px;
  letter-spacing: 10px;
  text-transform: uppercase;
`;
