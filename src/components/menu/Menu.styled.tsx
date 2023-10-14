import React from "react";
import styled from "styled-components";

export const Menu = () => {
  return (
    <MenuStyled>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Porfolio</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </MenuStyled>
  );
};

const MenuStyled = styled.nav`
  ul {
    display: flex;
    gap: 30px;
    color: #FFFFFF;
    font-family: "Poppins";
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;

    a {
      color: #989898;
    }

    a:active {
      color: #FFFFFF;
    }
  }
`