import React from "react";
import sprite from "../../../assets/img/sprite.svg";
import styled from "styled-components";
import { myTheme } from "../../../styles/Theme.styled";

type IconPropsType = {
  iconId: string;
  height?: string;
  width?: string;
  viewbox?: any
};

export const Icon = (props: IconPropsType) => {
  return (
    <svg
      width="140px"
      height="140px"
      viewBox="0 0 16 16"
      fill={myTheme.colors.brightB}
      xmlns="http://www.w3.org/2000/svg"
    >
      <use xlinkHref={`${sprite}#${props.iconId}`} />
    </svg>
  );
};