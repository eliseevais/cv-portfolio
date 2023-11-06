import React from "react";
import { Styles } from "../HeaderMenu_Styles";

const itemsMenu = [
  { title: "Home", href: "home" },
  { title: "About", href: "about" },
  { title: "Skills", href: "skills" },
  { title: "Portfolio", href: "works" },
  { title: "Contact", href: "contact" },
];


type MenuProps = {
  onMenuItemClick?: () => void
}

export const Menu: React.FC<MenuProps> = ({onMenuItemClick}) => {
  return (
    <ul>
      {itemsMenu.map((item, index) => {
        return (
          <Styles.MenuItem key={index}>
            <Styles.NavLink 
                activeClass="active" 
                to={item.href} 
                spy={true}
                smooth={true}
                onClick={onMenuItemClick}
                >
              {item.title}
            </Styles.NavLink>
          </Styles.MenuItem>
        );
      })}
    </ul>
  );
};
