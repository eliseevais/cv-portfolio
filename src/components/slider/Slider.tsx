import React from "react";
import styled from "styled-components";
import { myTheme } from "../../styles/Theme.styled";


export const Slider = () => {
  return (
    <SliderStyled>
      <Slide>
        <Text>At work I prefer a clear project structure. <br/> I value the owner's preferences  and convenience for the client</Text>
        <Name>What's the main point?</Name>
      </Slide>
    </SliderStyled>
  );
};

const SliderStyled = styled.div`
  max-width: 60%;
  display: flex;
 text-align: center;
`

const Slide = styled.div`
  

`

const Text = styled.p`
  color: ${myTheme.colors.accentA};
  font-family: "Poppins", sans-serif;
  font-size: 12px;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: 3px;
`

const Name = styled.span`
  color: ${myTheme.colors.accentA};
  font-family: "Poppins", sans-serif;
  font-size: 26px;
  font-weight: 600;
  line-height: 38px;
  letter-spacing: 3px;
  
`