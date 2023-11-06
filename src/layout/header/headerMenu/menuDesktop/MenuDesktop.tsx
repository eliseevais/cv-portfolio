import React from "react";
import { Menu } from "../menu/Menu";
import { Styles } from "../HeaderMenu_Styles";

export const MenuDesktop: React.FC = () => {
  return (
    <Styles.MenuDesktop>
      <Menu />
    </Styles.MenuDesktop>
  );
};
