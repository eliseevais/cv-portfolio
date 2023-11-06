import React, { useEffect, useState } from "react";
import { IconFooter } from "../skillsIcon/Icon";
import { animateScroll } from "react-scroll";
import { Styles } from "./GoTopBtn_Styles";

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
        <Styles.GoTop onClick={() => {animateScroll.scrollToTop()}}>
          <IconFooter iconId={"goTop"} />
        </Styles.GoTop>
      )}
    </>
  );
};

