import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle_Styles";
import { myTheme } from "../../../styles/Theme.styled";
import { FlexWrapper } from "../../../components/FlexWrapper_Styles";

const Skills = styled.section`
  display: flex;
  flex-direction: column;
  padding: 120px 14px 0;

  ${SectionTitle} {
    position: relative;
    width: fit-content;

    ::before {
      content: "";
      border-bottom: 1px solid ${myTheme.colors.accentA};
      position: absolute;
      height: 2px;
      width: 70%;
      top: -10px;
    }
  }

  @media ${myTheme.media.largeTablet} {
    ${SectionTitle} {
      margin: 0 auto 32px;
    }
    ${SectionTitle} {
      @media ${myTheme.media.largeTablet} {
        &::before {
          display: none;
        }
      }
    }
  }

  @media ${myTheme.media.tablet} {
    padding-top: 40px;

    ${SectionTitle} {
      margin-bottom: 20px;
    }

    ${FlexWrapper} {
      justify-content: space-evenly;
    }

    ${SectionTitle} {
      @media ${myTheme.media.tablet} {
        &::before {
          content: "";
          top: -4px;
        }
      }
    }
  }

  @media ${myTheme.media.mobile} {
    ${SectionTitle} {
      margin: 0 0 32px;
    }
    ${SectionTitle} {
      @media ${myTheme.media.largeTablet} {
        &::before {
          display: block;
        }
      }
    }
  }
`;

const Skill = styled.div`
  color: ${myTheme.colors.accentA};
`;

const SkillTitle = styled.h4`
  display: flex;
  justify-content: center;
  margin-top: 40px;

  @media ${myTheme.media.tablet} {
    margin: 16px 0 20px 0;
  }
`;

export const Styles = {
  Skills,
  Skill,
  SkillTitle,
};
