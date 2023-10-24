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
            <ListItem key={index}>
              <Link href="#">{item}</Link>
            </ListItem>
          );
        })}
      </ul>
    </MenuStyled>
  );
};

const MenuStyled = styled.nav`
  ul {
    display: flex;
    justify-content: center;
    gap: 30px;
    padding-right: 10px;
  }
`;

const ListItem = styled.li`

`;

const Link = styled.a`
  color: ${myTheme.colors.accentB};
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 20px;

  :active {
    color: ${myTheme.colors.accentA};
  }
`;
