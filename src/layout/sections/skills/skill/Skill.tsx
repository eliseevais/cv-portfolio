import React from "react";
import { Styles } from "../Skills_Styles";
import { Icon } from "../../../../components/skillsIcon/Icon";

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
