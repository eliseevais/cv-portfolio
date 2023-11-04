import React from "react";
import { Icon } from "../../../../components/menu/icon/Icon";
import { Styles } from "../Skills_Styles";

type SkillPropsType = {
  iconId: string;
  title: string;
};

export const Skill: React.FC<SkillPropsType> = (props: SkillPropsType) => {
  return (
    <Styles.Skill>
        <Icon iconId={props.iconId} />
      <Styles.SkillTitle>{props.title}</Styles.SkillTitle>
    </Styles.Skill>
  );
};
