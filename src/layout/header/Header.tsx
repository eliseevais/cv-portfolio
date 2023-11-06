import React from "react";
import { Container } from "../../components/Container_Styles";
import { FlexWrapper } from "../../components/FlexWrapper_Styles";
import { Styles } from "./Header_Styles";
import { MenuDesktop } from "./headerMenu/menuDesktop/MenuDesktop";
import { MenuMobile } from "./headerMenu/menuMobile/MenuMobile";
import { Logo } from "./Logo";

export const Header: React.FC = () => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 768;

  React.useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <>
      <Styles.Header>
        <Container>
          <FlexWrapper justify="space-between" align="flex-end">
            <Logo />
            {width > breakpoint ? <MenuDesktop /> : <MenuMobile />}
          </FlexWrapper>
        </Container>
      </Styles.Header>
    </>
  );
};
