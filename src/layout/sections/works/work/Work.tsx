import React from "react";
import { Styles } from "../Works_Styles";

type WorkPropsType = {
  title: string;
  src: string;
  codeLink: string;
  appLink: string;
};

export const Work: React.FC<WorkPropsType> = (props: WorkPropsType) => {
  return (
    <Styles.Work>
      <Styles.ImgWrapper>
        <Styles.ImgStyled src={props.src} alt={props.title} />
        <Styles.TitleProject>{props.title}</Styles.TitleProject>

        <Styles.LinksWrapper>
          <Styles.Link
            href={props.codeLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Code
          </Styles.Link>

          <Styles.Link
            href={props.appLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Start app
          </Styles.Link>
        </Styles.LinksWrapper>
      </Styles.ImgWrapper>
    </Styles.Work>
  );
};
