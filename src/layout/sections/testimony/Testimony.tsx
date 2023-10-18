import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle.styled";
import { Icon } from "../../../components/menu/icon/Icon";
import { myTheme } from "../../../styles/Theme.styled";
import { FlexWrapper } from "../../../components/FlexWrapper.styled";
import { Slider } from "../../../components/slider/Slider.styled";

export const Testimony = () => {
  return (
    <TestimonyWrapper>
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
    </TestimonyWrapper>
  );
};

const TestimonyWrapper = styled.section`
  width: 100%;
  background-color: ${myTheme.colors.backgroundB};
  display: flex;
  justify-content: center;
`;

const TestimonyStyled = styled.section`
  width: 1300px;
  padding: 120px 0;
`;

const Pagination = styled.nav`
  span {
    display: inline-block;
    width: 10px;
    height: 10px;
    margin: 40px 5px 5px 5px;
    cursor: pointer;
    background: linear-gradient(
      180deg,
      ${myTheme.colors.brightA} 50%,
      ${myTheme.colors.brightB}
    );
  }
`;
