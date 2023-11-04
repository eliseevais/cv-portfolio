import styled from "styled-components";
import { myTheme } from "../styles/Theme.styled";

export const SectionTitle = styled.h2`
  color: ${myTheme.colors.accentA};
  margin-bottom: 86px;

  @media ${myTheme.media.tablet} {
    margin-bottom: 40px;
  }
`