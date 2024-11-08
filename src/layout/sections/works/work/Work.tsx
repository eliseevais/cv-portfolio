import React from "react";
import { Styles } from "../Works_Styles";

type WorkPropsType = {
  title: string;
  src: string;
  link: any
};

export const Work: React.FC<WorkPropsType> = (props: WorkPropsType) => {
  return (
    <Styles.Work>
      <Styles.ImgWrapper>
        <Styles.ImgStyled src={props.src} alt="photo" />
      </Styles.ImgWrapper>
      <Styles.TitleProject>{props.title}</Styles.TitleProject>
      <Styles.Link href={props.link} target="_blank">Visit</Styles.Link>
    </Styles.Work>
  );
};