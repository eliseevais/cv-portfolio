import styled, { keyframes } from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle_Styles";
import { myTheme } from "../../../styles/Theme.styled";
import { FlexWrapper } from "../../../components/FlexWrapper_Styles";

const scroll = keyframes`
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-50%);
  }
`;

const Skills = styled.section`
  display: flex;
  flex-direction: column;
  padding: 120px 16px 0;
  position: relative;

  ${SectionTitle} {
    position: relative;
    width: fit-content;
    margin-bottom: 32px;
  }

  ${FlexWrapper} {
    justify-content: space-between;
  }

  @media ${myTheme.media.largeTablet} {
    padding-top: 96px;

    ${SectionTitle} {
      margin: 0 auto 32px;
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
  }

  @media ${myTheme.media.mobile} {
    ${SectionTitle} {
      margin: 0 0 32px;
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

const MarqueeWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  margin-top: 40px;

  @media ${myTheme.media.mobile} {
    margin-top: 24px;
  }
`;

const MarqueeContent = styled.div`
  display: inline-flex;
  animation: ${scroll} 180s linear infinite;
`;

const SkillItem = styled.span`
  font-size: 24px;
  color: ${myTheme.colors.accentA};
  padding: 0 24px;
  white-space: nowrap;
  
  @media ${myTheme.media.mobile} {
    font-size: 16px;  
    padding: 0 16px;  
  }
`;

export const Styles = {
  Skills,
  Skill,
  SkillTitle,
  MarqueeWrapper,
  MarqueeContent,
  SkillItem,
};
