import React from "react";
import styled from "styled-components";
import { Menu } from "../../components/menu/Menu.styled";

export const Header = (props: any) => {
  return (
    <HeaderStyled>
      <a href="#">
        <LogoStyled>Irina Eliseeva</LogoStyled>
      </a>
      <Menu />
    </HeaderStyled>
  );
};

const HeaderStyled = styled.header`
  width: 1440px;
  height: 110px;
  display: flex;
  margin: 0 auto;
  padding: 70px 114px 0 114px;
  align-items: flex-end;
  background-color: #1f1f1f;
  justify-content: space-between;
  
  a {
    text-decoration: none;
  }
`;

const LogoStyled = styled.div`
  width: 200px;
  height: 40px;
  display: flex;
  align-items: flex-end;
  
  font-family: 'Alex Brush', cursive;
  font-size: 32px;
  font-weight: 400;
  line-height: 40px;
  letter-spacing: 0em;
  text-align: left;
  color: #ffffff;
`;
