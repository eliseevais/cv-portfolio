import React from "react";
import styled from "styled-components";
import { Menu } from "../../components/menu/Menu.styled";
import { FlexWrapper } from "../../components/FlexWrapper.styled";
import { myTheme } from "../../styles/Theme.styled";

const items = ["Home", "Portfolio", "Contact"]

export const Header = (props: any) => {
  return (
    <HeaderStyled>
      <FlexWrapper align={"end"} justify={"space-between"}  >
        <a href="#">
          <LogoStyled>Irina Eliseeva</LogoStyled>
        </a>
        <Menu menuItems={items}/>
      </FlexWrapper>
    </HeaderStyled>
  );
};

const HeaderStyled = styled.header`
  width: 100%;
  height: 120px;
  background-color: ${myTheme.colors.backgroundA};
  padding: 70px 120px 0 120px;

  a {
    text-decoration: none;
  }
`;

const LogoStyled = styled.div`
  width: 200px;
  height: 40px;

  font-family: "Alex Brush", cursive;
  font-size: 32px;
  font-weight: 400;
  line-height: 40px;
  letter-spacing: 0em;
  color: ${myTheme.colors.accentA};
`;
