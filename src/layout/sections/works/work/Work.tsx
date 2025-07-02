import React from "react";
import { Styles } from "../Works_Styles";

type WorkPropsType = {
  title: string;
  src: string;
  codeLink?: string;
  appLink?: string;
};

export const Work: React.FC<WorkPropsType> = ({
                                                title,
                                                src,
                                                codeLink,
                                                appLink,
                                              }) => {
  return (
    <Styles.Work>
      <Styles.ImgWrapper>
        <Styles.ImgStyled src={src} alt={title} />

        <Styles.InfoOverlay>
          <Styles.TitleProject>{title}</Styles.TitleProject>

          <Styles.LinksWrapper>
            {codeLink && (
              <Styles.Link
                href={codeLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Code
              </Styles.Link>
            )}
            {appLink && (
              <Styles.Link
                href={appLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Start App
              </Styles.Link>
            )}
          </Styles.LinksWrapper>
        </Styles.InfoOverlay>
      </Styles.ImgWrapper>
    </Styles.Work>
  );
};
