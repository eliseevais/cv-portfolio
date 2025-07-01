import styled, { css } from "styled-components";
import { myTheme } from "../../../styles/Theme.styled";
import { Link } from "react-scroll";

const BurgerButton = styled.button<{ isOpen: boolean }>`
  width: 20px;
  height: 20px;
  z-index: 9999;

  position: fixed;
  top: 40px;
  right: calc(100% - 95%);

  span {
    display: block;
    width: 20px;
    height: 4px;
    background-color: ${myTheme.colors.accentA};
    position: absolute;
    left: 0;
    bottom: 0;

    ${(props) =>
      props.isOpen &&
      css<{ isOpen: boolean }>`
        background-color: ${myTheme.colors.backgroundA};
      `}

    &::before {
      content: "";
      display: block;
      width: 20px;
      height: 4px;
      background-color: ${myTheme.colors.accentA};
      position: absolute;
      left: 0;
      bottom: 8px;
      transform: translateY(-10px);

      ${(props) =>
        props.isOpen &&
        css<{ isOpen: boolean }>`
          transform: rotate(-45deg) translateY(0);
        `}
    }

    &::after {
      content: "";
      display: block;
      width: 20px;
      height: 4px;
      background-color: ${myTheme.colors.accentA};
      position: absolute;
      left: 0;
      bottom: 20px;
      transform: translateY(10px);

      ${(props) =>
        props.isOpen &&
        css<{ isOpen: boolean }>`
          transform: rotate(45deg) translateY(0);
          bottom: 8px;
        `}
    }
  }
`;

const NavLink = styled(Link)`
  color: ${myTheme.colors.accentB};
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 20px;
  transition: ${myTheme.animations.transition};

  &:hover,
  &.active {
    color: ${myTheme.colors.accentA};
  }

  cursor: pointer;
`;

const MenuItem = styled.li``;

const MenuDesktop = styled.nav`
  ul {
    display: flex;
    justify-content: center;
    gap: 32px;
    margin-right: 24px;
  }
`;

const MenuMobile = styled.nav`
  display: none;
  position: relative;

  @media ${myTheme.media.tablet} {
    display: block;
  }
`;

const MenuMobilePopup = styled.div<{ isOpen: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateY(-100%);
  transition: ${myTheme.animations.transitionLong};

  width: 100%;
  height: 100vh;
  justify-content: center;

  background-color: ${myTheme.colors.backgroundA};

  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;

  ${(props) =>
    props.isOpen &&
    css<{ isOpen: boolean }>`
      transform: translateY(0);
    `}

  ul {
    display: flex;
    gap: 32px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-right: 12px;
  }
`;

export const Styles = {
  BurgerButton,
  NavLink,
  MenuItem,
  MenuDesktop,
  MenuMobile,
  MenuMobilePopup,
};
