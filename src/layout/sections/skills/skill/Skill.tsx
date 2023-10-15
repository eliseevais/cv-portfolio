import React from "react";
import { Icon } from "../../../../components/menu/icon/Icon";
import { myTheme } from "../../../../styles/Theme.styled";
import styled from "styled-components";

type SkillPropsType = {
  iconId: string;
  title: string;
}

export const Skill = (props: SkillPropsType) => {
  return (
    <SkillStyled>
      <Icon iconId={props.iconId} />
      <SkillTitle>{props.title}</SkillTitle>
    </SkillStyled>
  );
};

const SkillStyled = styled.section`
  /* background-color: ${myTheme.colors.backgroundB}; */
  color: ${myTheme.colors.accentA};
`;

const SkillTitle = styled.h2`
  display: flex;
  justify-content: center;
  font-family: "Poppins";
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;
  letter-spacing: 3px;
  margin-top: 40px;
`;
