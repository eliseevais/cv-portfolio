import React from "react";
import { Styles } from "./Header_Styles";
import { animateScroll as scroll } from "react-scroll";

export const Logo: React.FC = () => {
  return (
    <a
      onClick={() => {
        scroll.scrollToTop();
      }}
    >
      <Styles.LogoStyled>Irina Eliseeva</Styles.LogoStyled>
    </a>
  );
};
