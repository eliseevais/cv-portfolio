import React from "react";
import { Menu } from "../menu/Menu";
import { Styles } from "../HeaderMenu_Styles";

export const MenuDesktop: React.FC<{ menuItems: Array<string> }> = (props: {
  menuItems: Array<string>;
}) => {
  return (
    <Styles.MenuDesktop>
      <Menu menuItems={props.menuItems} />
    </Styles.MenuDesktop>
  );
};
