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

const SkillStyled = styled.div`
  color: ${myTheme.colors.accentA};
`;

const SkillTitle = styled.h3`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;
