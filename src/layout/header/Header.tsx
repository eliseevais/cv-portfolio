import React from "react";
import styled from "styled-components";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Menu } from "../../components/menu/Menu";
import { myTheme } from "../../styles/Theme.styled";

const items = ["Home", "Portfolio", "Contact"];

export const Header = (props: any) => {
  return (
    <HeaderStyled>
      <Container>
        <FlexWrapper justify="space-between" align="end">
          <LogoStyled>Irina Eliseeva</LogoStyled>
          <Menu menuItems={items} />
        </FlexWrapper>
      </Container>
    </HeaderStyled>
  );
};

const HeaderStyled = styled.header`
  min-height: 70px;
  display: flex;
  align-items: flex-end;
  
  position: fixed;
  z-index: 99999;

  top: 0;
  left: 0%;
  right: 0;
  margin: 0 14px;

  backdrop-filter: brightness(40%);

  @media ${myTheme.media.tablet} {
    display: none;
  }
`;

const LogoStyled = styled.div`
  font-family: "Alex Brush", "cursive";
  font-size: 32px;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0em;
`;
