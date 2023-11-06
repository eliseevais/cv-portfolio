import React, { useState } from "react";
import { Menu } from "../menu/Menu";
import { Styles } from "../HeaderMenu_Styles";

export const MenuMobile: React.FC = () => {
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
        <Menu onMenuItemClick={() => {setMenuIsOpen(!menuIsOpen);}} />
      </Styles.MenuMobilePopup>
    </>
  );
};
