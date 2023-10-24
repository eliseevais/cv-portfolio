import React from "react";
import styled from "styled-components";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Menu } from "../../components/menu/Menu";

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
  /* border: 1px solid orange; */
  min-height: 120px;
  display: flex;
  align-items: flex-end;
  position: fixed;
  top: 0;
  left: 0%;
  right: 0;
  z-index: 99999;
`;

const LogoStyled = styled.div`
  font-family: "Alex Brush", "cursive";
  font-size: 32px;
  font-weight: 400;
  line-height: 40px;
  letter-spacing: 0em;
`;
