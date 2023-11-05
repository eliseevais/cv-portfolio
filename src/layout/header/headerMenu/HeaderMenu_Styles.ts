import styled, { css } from "styled-components";
import { myTheme } from "../../../styles/Theme.styled";

const BurgerButton = styled.button<{ isOpen: boolean }>`
  width: 20px;
  height: 20px;
  z-index: 9999;

  position: absolute;
  top: -24px;
  right: calc(100% - 95%);

  span {
    display: block;
    width: 20px;
    height: 2px;
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
      height: 2px;
      background-color: ${myTheme.colors.accentA};
      position: absolute;
      left: 0;
      bottom: 6px;
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
      height: 2px;
      background-color: ${myTheme.colors.accentA};
      position: absolute;
      left: 0;
      bottom: 18px;
      transform: translateY(10px);

      ${(props) =>
        props.isOpen &&
        css<{ isOpen: boolean }>`
          transform: rotate(45deg) translateY(0);
          bottom: 6px;
        `}
    }
  }
`;

const Link = styled.a`
  color: ${myTheme.colors.accentB};
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 20px;

  &:active {
    color: ${myTheme.colors.accentA};
  }

  &:hover {
    color: ${myTheme.colors.accentA};
  }
`;

const MenuItem = styled.li``;

const MenuDesktop = styled.nav`
  ul {
    display: flex;
    justify-content: center;
    gap: 30px;
  }

  @media ${myTheme.media.tablet} {
    display: none;
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
  display: none;
  width: 100%;
  height: 100%;
  justify-content: center;

  background-color: ${myTheme.colors.backgroundA};
  border: 1px solid ${myTheme.colors.accentB};

  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;

  ${(props) =>
    props.isOpen &&
    css<{ isOpen: boolean }>`
      display: flex;
      justify-content: center;
      align-items: center;
    `}

  ul {
    display: flex;
    gap: 30px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-right: 10px;
  }
`;

export const Styles = {
  BurgerButton,
  Link,
  MenuItem,
  MenuDesktop,
  MenuMobile,
  MenuMobilePopup,
};
