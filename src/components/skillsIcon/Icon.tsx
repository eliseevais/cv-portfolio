import React from "react";
import sprite from "../../assets/img/sprite.svg";
import { myTheme } from "../../styles/Theme.styled";
import { Styles } from "./Icon_Styles";

type IconPropsType = {
  iconId: string;
  height?: string;
  width?: string;
  viewBox?: string;
};

export const Icon = (props: IconPropsType) => {
  return (
    <Styles.IconWrapperSkills
      width={props.width || "140px"}
      height={props.height || "140px"}
      viewBox={props.viewBox || "0 0 16 16"}
      fill="url(#linear-gradient)"
      x="0"
      y="0"
      xmlns="http://www.w3.org/2000/svg"
    >
      <linearGradient id="linear-gradient" x1="0" y1="-0.75" x2="0" y2="100%">
        <stop offset="50%" stopColor={myTheme.colors.brightA} />
        <stop offset="100%" stopColor={myTheme.colors.brightB} />
      </linearGradient>

      <use xlinkHref={`${sprite}#${props.iconId}`} />
    </Styles.IconWrapperSkills>
  );
};

export const IconFooter = (props: IconPropsType) => {
  return (
    <Styles.IconWrapperFooter
      width={props.width || "40px"}
      height={props.height || "40px"}
      viewBox={props.viewBox || "0 0 40 40"}
      fill="currentColor"
    >
      <use xlinkHref={`${sprite}#${props.iconId}`} />
    </Styles.IconWrapperFooter>
  );
};
