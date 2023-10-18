import React from "react";
import sprite from "../../../assets/img/sprite.svg";
import { myTheme } from "../../../styles/Theme.styled";

type IconPropsType = {
  iconId: string;
  height?: string;
  width?: string;
  viewBox?: string;
};

export const Icon = (props: IconPropsType) => {
  return (
    <svg
      width={props.width || "140px"}
      height={props.height || "140px"}
      viewBox={props.viewBox || "0 0 16 16"}
      fill={myTheme.colors.brightA}
      xmlns="http://www.w3.org/2000/svg"
    >
      <use xlinkHref={`${sprite}#${props.iconId}`} />
    </svg>
  );
};