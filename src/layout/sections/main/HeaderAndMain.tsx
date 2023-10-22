import React from "react";
import { ContainerWrapper } from "../../../components/ContainerWrapper";
import { myTheme } from "../../../styles/Theme.styled";
import { Header } from "../../header/Header";
import { Main } from "./Main";

export const HeaderAndMain = () => {
  return (
    <ContainerWrapper
      height="100vh"
      bgColor={myTheme.colors.backgroundA}
      justify="center"
    >
      <Header />
      <Main />
    </ContainerWrapper>
  );
};
