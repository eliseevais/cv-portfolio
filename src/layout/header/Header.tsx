import React from "react";
import styled from "styled-components";
import { ContainerWrapper } from "../../components/ContainerWrapper";
import { myTheme } from "../../styles/Theme.styled";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Menu } from "../../components/menu/Menu";

const items = ["Home", "Portfolio", "Contact"];

export const Header = (props: any) => {
  return (
    <ContainerWrapper
      height="10vh"
      bgColor={myTheme.colors.backgroundA}
      justify="flex-end"
    >
      <HeaderStyled>
        <FlexWrapper align="end" justify="space-between">
          <a href="#">
            <LogoStyled>Irina Eliseeva</LogoStyled>
          </a>
          <Menu menuItems={items} />
        </FlexWrapper>
      </HeaderStyled>
    </ContainerWrapper>
  );
};

const HeaderStyled = styled.header`
  width: 1300px;

  a {
    text-decoration: none;
  }
`;

const LogoStyled = styled.div`
  font-family: "Alex Brush", cursive;
  font-size: 32px;
  font-weight: 400;
  line-height: 40px;
  letter-spacing: 0em;
  color: ${myTheme.colors.accentA};
`;
