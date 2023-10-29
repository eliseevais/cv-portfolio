import React from "react";
import styled from "styled-components";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";
import { MenuHeader } from "../../components/menu/MenuHeader";
import { myTheme } from "../../styles/Theme.styled";
import { MenuMobile } from "../../components/menuMobile/MenuMobile";
import { myFont } from "../../styles/Common";

const items = ["Home", "Portfolio", "Contact"];

export const Header = (props: any) => {
  return (
    <>
      <HeaderStyled>
        <Container>
          <FlexWrapper justify="space-between" align="end">
            <LogoStyled>Irina Eliseeva</LogoStyled>
            <MenuHeader menuItems={items} />
          </FlexWrapper>
        </Container>
      </HeaderStyled>
      <MenuMobile menuItems={items} />
    </>
  );
};

const HeaderStyled = styled.header`
  min-height: 70px;
  display: flex;

  position: fixed;
  z-index: 99;

  top: 0;
  left: 0%;
  right: 0;

  ${Container} {
    outline: 1px solid ${myTheme.colors.accentB};
    backdrop-filter: brightness(40%);
    padding: 0 14px;
  }
`;

const LogoStyled = styled.div`
  ${myFont({
    family: '"Alex Brush", "cursive"',
    weight: 400,
    lineHeight: 1.5,
    Fmax: 32,
    Fmin: 14,
  })}
`;
