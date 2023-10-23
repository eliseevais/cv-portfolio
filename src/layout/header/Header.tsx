import React from "react";
import styled from "styled-components";
import { Container } from "../../components/Container";
import { myTheme } from "../../styles/Theme.styled";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Menu } from "../../components/menu/Menu";

const items = ["Home", "Portfolio", "Contact"];

export const Header = (props: any) => {
  return (
    <Container>
      <HeaderStyled>
        <FlexWrapper justify="space-between" align="end">
          <a href="#">
            <LogoStyled>Irina Eliseeva</LogoStyled>
          </a>
          <Menu menuItems={items} />
        </FlexWrapper>
      </HeaderStyled>
    </Container>
  );
};

const HeaderStyled = styled.header`
  background-color: ${myTheme.colors.backgroundA};
  padding-top: 6vh;
  min-height: 10vh;
`;

const LogoStyled = styled.div`
  font-family: "Alex Brush", "cursive";
  font-size: 32px;
  font-weight: 400;
  line-height: 40px;
  letter-spacing: 0em;
`;
