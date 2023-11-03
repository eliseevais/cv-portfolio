import React from "react";
import { Styles } from "./MenuMobile_Styles";
import { Menu } from "../menu/Menu";

export const MenuMobile = (props: {menuItems: Array<string>}) => {
  return (
    <>
      <Styles.MenuMobile>
        <Styles.BurgerButton isOpen={false}>
          <span></span>
        </Styles.BurgerButton>
      </Styles.MenuMobile>

      <Styles.MenuMobilePopup isOpen={false}>
        <Menu menuItems={props.menuItems} />
      </Styles.MenuMobilePopup>
    </>
  );
};
