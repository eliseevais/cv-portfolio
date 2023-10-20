import React from "react";
import styled from "styled-components";
import { myTheme } from "../styles/Theme.styled";

type ContainerPropsType = {
  direction?: string;
  justify?: string;
  align?: string;
  wrap?: string;
  width?: string;
  height?: string;
  bgColor?: string;
};

export const ContainerWrapper = styled.div<ContainerPropsType>`
  display: flex;
  flex-direction: ${props => props.direction || "column"};
  justify-content: ${props => props.justify || "center"};
  align-items: ${props => props.align || "center"};
  flex-wrap: ${props => props.wrap || "no-wrap"};
  width: ${props => props.width || "100%" };
  height: ${props => props.height || "auto"};
  background-color: ${props => props.bgColor || "green"};
`;
