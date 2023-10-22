import React from "react";
import styled from "styled-components";
import { ContainerWrapper } from "../../../components/ContainerWrapper";
import { myTheme } from "../../../styles/Theme.styled";
import { SectionTitle } from "../../../components/SectionTitle";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Slider } from "../../../components/slider/Slider";

export const Testimony = () => {
  return (
    <ContainerWrapper bgColor={myTheme.colors.backgroundA}>
      <TestimonyStyled>
        <FlexWrapper direction="column" justify="space-between" align="center">
          <SectionTitle>
            <SectionTitleStyled>My priorities</SectionTitleStyled>
          </SectionTitle>
          <Slider />
          <Pagination>
            <span> </span>
            <span> </span>
            <span> </span>
          </Pagination>
        </FlexWrapper>
      </TestimonyStyled>
    </ContainerWrapper>
  );
};

const TestimonyStyled = styled.section`
  width: 1300px;
  padding-top: 120px;
`;

const SectionTitleStyled = styled.div`
  position: relative;

  ::before {
    content: "";
    border-bottom: 1px solid ${myTheme.colors.accentA};
    position: absolute;
    height: 2px;
    width: 400px;
    top: 50px;
    right: 450px;
  }

  ::after {
    content: "";
    border-bottom: 1px solid ${myTheme.colors.accentA};
    position: absolute;
    height: 2px;
    width: 400px;
    top: 50px;
    left: 450px;
  }
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
