import React, { useState } from "react";
import { Menu } from "../menu/Menu";
import { Styles } from "../HeaderMenu_Styles";

export const MenuMobile: React.FC<{ menuItems: Array<string> }> = (props: {
  menuItems: Array<string>;
}) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const onBurgerBtnClick = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  return (
    <>
      <Styles.MenuMobile>
        <Styles.BurgerButton isOpen={menuIsOpen} onClick={onBurgerBtnClick}>
          <span></span>
        </Styles.BurgerButton>
      </Styles.MenuMobile>

      <Styles.MenuMobilePopup
        isOpen={menuIsOpen}
        onClick={() => {
          setMenuIsOpen(!menuIsOpen);
        }}
      >
        <Menu menuItems={props.menuItems} />
      </Styles.MenuMobilePopup>
    </>
  );
};
