import React from "react";
import styled from "styled-components";
import { myTheme } from "../../styles/Theme.styled";

type MenuPropsType = {
  menuItems: Array<string>;
};

export const Menu = (props: MenuPropsType) => {
  return (
    <MenuStyled>
      <ul>
        {props.menuItems.map((item, index) => {
          return (
            <li key={index}>
              <a href="#">{item}</a>
            </li>
          );
        })}
      </ul>
    </MenuStyled>
  );
};

const MenuStyled = styled.nav`

  ul {
    display: flex;
    gap: 30px;
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-size: 20px;
    line-height: 40px;

    a {
      color: ${myTheme.colors.accentB};
    }

    a:active {
      color: ${myTheme.colors.accentA};
    }
  }
`;
