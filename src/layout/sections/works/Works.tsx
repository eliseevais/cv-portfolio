import React from "react";
import {Container} from "../../../components/Container_Styles";
import {SectionTitle} from "../../../components/SectionTitle_Styles";
import {FlexWrapper} from "../../../components/FlexWrapper_Styles";
import {Work} from "./work/Work";
import {Styles} from "./Works_Styles";
import workExampleSocialNetwork from "../../../assets/img/1.jpg";
import workExampleTodolist from "../../../assets/img/2.jpg";
import workExampleSwimSchool from "../../../assets/img/3.jpg";
import workExamplePortfolio from "../../../assets/img/4.jpg";

const worksData = [
  {
    title: "Social network",
    src: workExampleSocialNetwork,
    codeLink: "https://github.com/pobediteli-inc/inctagram",
    appLink: "https://winners-pro.uk",
  },
  {
    title: "Task master",
    src: workExampleTodolist,
    codeLink: "https://github.com/eliseevais/cv-task-master",
    appLink: "https://eliseevais.github.io/cv-task-master/",
  },
  {
    title: "Landing Swim School",
    src: workExampleSwimSchool,
    codeLink: "https://github.com/eliseevais/swimnextjs",
    // appLink: "https://школа-плавания.online/",
  },
  {
    title: "This portfolio",
    src: workExamplePortfolio,
    codeLink: "https://github.com/eliseevais/cv-portfolio",
  },
];

export const Works: React.FC = () => {
  return (
    <Styles.Works id={"works"}>
      <Container>
        <SectionTitle>My work experience</SectionTitle>
        <FlexWrapper justify="space-between" wrap="wrap">
          {worksData.map((work, index) => {
            return  <Work
              key={index}
              title={work.title}
              src={work.src}
              codeLink={work.codeLink}
              appLink={work.appLink}
            />;
          })}
        </FlexWrapper>
      </Container>
    </Styles.Works>
  );
};
