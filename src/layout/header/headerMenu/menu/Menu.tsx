import React from "react";
import { Styles } from "../HeaderMenu_Styles";

export const Menu: React.FC<{ menuItems: Array<string> }> = (props: {
  menuItems: Array<string>;
}) => {
  return (
    <ul>
      {props.menuItems.map((item, index) => {
        return (
          <Styles.MenuItem key={index}>
            <Styles.Link href="#">{item}</Styles.Link>
          </Styles.MenuItem>
        );
      })}
    </ul>
  );
};
