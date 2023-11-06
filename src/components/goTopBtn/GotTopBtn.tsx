import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { IconFooter } from "../skillsIcon/Icon";
import { myTheme } from "../../styles/Theme.styled";
import { animateScroll } from "react-scroll";

export const GoTopBtn = () => {
  const [showBtn, setShowBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setShowBtn(true);
      } else {
        setShowBtn(false);
      }
    });
  }, []);

  return (
    <>
      {showBtn && (
        <GoTopStyled onClick={() => {animateScroll.scrollToTop()}}>
          <IconFooter iconId={"goTop"} />
        </GoTopStyled>
      )}
    </>
  );
};

const GoTopStyled = styled.button`
  color: ${myTheme.colors.accentB};
  cursor: pointer;
  position: fixed;
  right: 40px;
  bottom: 40px;
`;
