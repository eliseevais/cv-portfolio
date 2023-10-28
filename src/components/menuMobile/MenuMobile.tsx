import React from "react";
import styled from "styled-components";
import { myTheme } from "../../styles/Theme.styled";

type MenuPropsType = {
  menuItems: Array<string>;
};

export const MenuMobile = (props: MenuPropsType) => {
  return (
    <MenuMobileStyled>
      <BurgerButton>
        <span></span>
      </BurgerButton>
      <ul>
        {props.menuItems.map((item, index) => {
          return (
            <ListItem key={index}>
              <Link href="#">{item}</Link>
            </ListItem>
          );
        })}
      </ul>
    </MenuMobileStyled>
  );
};

const MenuMobileStyled = styled.nav`
  ul {
    display: flex;
    justify-content: center;
    gap: 30px;
    padding-right: 10px;
  }

  @media ${myTheme.media.tablet} {
    display: none;
  }
`;

const BurgerButton = styled.button`
  width: 16px;
  height: 6px;

  position: fixed;
  top: -40px;
  right: -30px;

  span {
    display: block;
    width: 16px;
    height: 2px;
  }
`;

const ListItem = styled.li``;

const Link = styled.a`
  color: ${myTheme.colors.accentB};
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 20px;

  &:active {
    color: ${myTheme.colors.accentA};
  }

  &:hover {
    color: ${myTheme.colors.accentA};
  }
`;
