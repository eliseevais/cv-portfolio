import styled from "styled-components";
import { myTheme } from "../../styles/Theme.styled";

const IconWrapperSkills = styled.svg`
  @media ${myTheme.media.tablet} {
    width: 70px;
    height: 70px;
    viewBox: "0 0 12 12";
  }
`;

const IconWrapperFooter = styled.svg`
  @media ${myTheme.media.tablet} {
    width: 20px;
    height: 20px;
    viewBox: "0 0 8 8";
  }
`;

export const Styles = {
  IconWrapperSkills,
  IconWrapperFooter
}