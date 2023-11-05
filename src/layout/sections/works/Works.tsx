import React from "react";
import { Container } from "../../../components/Container_Styles";
import { SectionTitle } from "../../../components/SectionTitle_Styles";
import { FlexWrapper } from "../../../components/FlexWrapper_Styles";
import { Work } from "./work/Work";
import { Styles } from "./Works_Styles";
import socialNetwork from "../../../assets/img/socialNetwork.jpg";
import toDoList from "../../../assets/img/toDoList.jpg";
import workExample4 from "../../../assets/img/workExample4.jpg";
import workExample3 from "../../../assets/img/workExample3.jpg";

const worksData = [
  {
    title: "Social network",
    src: socialNetwork,
  },
  {
    title: "Task tracker",
    src: toDoList,
  },
  {
    title: "Here could be your idea",
    src: workExample3,
  },
  {
    title: "New project is loading",
    src: workExample4,
  },
];

export const Works: React.FC = () => {
  return (
    <Styles.Works>
      <Container>
        <SectionTitle>My work experience</SectionTitle>
        <FlexWrapper justify="space-between" wrap="wrap">
          {worksData.map((work, index) => {
            return <Work title={work.title} src={work.src} key={index} />;
          })}
        </FlexWrapper>
      </Container>
    </Styles.Works>
  );
};
