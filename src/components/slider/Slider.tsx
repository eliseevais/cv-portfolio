import React from "react";
import styled from "styled-components";
import { myTheme } from "../../styles/Theme.styled";

export const Slider = () => {
  return (
    <SliderStyled>
      <Slide>
        <Text>
          At work I prefer a clear project structure. <br /> I value the owner's
          preferences and convenience for the client
        </Text>
      </Slide>
    </SliderStyled>
  );
};

const SliderStyled = styled.div`
  max-width: 60%;
  display: flex;
  text-align: center;
`;

const Slide = styled.div``;

const Text = styled.p`
  margin-bottom: 20px;
`;
