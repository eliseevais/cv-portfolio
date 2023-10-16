import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle.styled";
import { Icon } from "../../../components/menu/icon/Icon";
import { myTheme } from "../../../styles/Theme.styled";
import { FlexWrapper } from "../../../components/FlexWrapper.styled";
import { Slider } from "../../../components/slider/Slider.styled";

export const Testimony = () => {
  return (
    <TestimonyStyled>
      <FlexWrapper direction="column" justify="space-between" align="center">
        <SectionTitle>My priority</SectionTitle>
        <Slider />
        <Pagination>
          <span> </span>
          <span> </span>
          <span> </span>
        </Pagination>
      </FlexWrapper>
    </TestimonyStyled>
  );
};

const TestimonyStyled = styled.section`
 background-color: ${myTheme.colors.backgroundB};
 padding: 120px;
`

const Pagination = styled.div`
  span {
    display: inline-block;
    width: 10px;
    height: 10px;
    margin: 40px 5px 5px 5px;
    background-color: ${myTheme.colors.accentB};
  }
`
