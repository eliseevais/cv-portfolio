import styled from "styled-components";
import { myTheme } from "../styles/Theme.styled";

export const SectionTitle = styled.h2`
  color: ${myTheme.colors.accentA};
  margin-bottom: 88px;

  @media ${myTheme.media.tablet} {
    margin-bottom: 40px;
  }
`
