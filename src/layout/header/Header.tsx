import React from "react";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Styles } from "./Header_Styles";
import { MenuDesktop } from "./menuDesktop/MenuDesktop";
import { MenuMobile } from "./menuMobile/MenuMobile";

const items = ["Home", "Portfolio", "Contact"];

export const Header: React.FC = (props: any) => {
  return (
    <>
      <Styles.Header>
        <Container>
          <FlexWrapper justify="space-between" align="end">
            <Styles.LogoStyled>Irina Eliseeva</Styles.LogoStyled>
            <MenuDesktop menuItems={items} />
          </FlexWrapper>
        </Container>
      </Styles.Header>
      <MenuMobile menuItems={items} />
    </>
  );
};