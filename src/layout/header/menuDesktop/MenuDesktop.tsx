import React from "react";
import styled from "styled-components";
import { myTheme } from "../../../styles/Theme.styled";
import { Menu } from "../menu/Menu";

export const MenuDesktop:React.FC<{menuItems: Array<string>}> = (props: {menuItems: Array<string>}) => {
  return (
    <MenuDesktopStyled>
      <Menu menuItems={props.menuItems}/>
    </MenuDesktopStyled>
  );
};

const MenuDesktopStyled = styled.nav`
  ul {
    display: flex;
    justify-content: center;
    gap: 30px;
  }

  @media ${myTheme.media.tablet} {
    display: none;
  }
`;
