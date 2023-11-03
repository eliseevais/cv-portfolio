import React from "react";
import { Menu } from "../menu/Menu";
import { Styles } from "../HeaderMenu_Styles";


export const MenuMobile: React.FC<{ menuItems: Array<string> }> = (props: {
  menuItems: Array<string>;
}) => {
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
