import React from "react";
import {Container} from "../../../components/Container_Styles";
import {SectionTitle} from "../../../components/SectionTitle_Styles";
import {FlexWrapper} from "../../../components/FlexWrapper_Styles";
import {Work} from "./work/Work";
import {Styles} from "./Works_Styles";
import toDoList from "../../../assets/img/toDoList.jpg";
import workExample4 from "../../../assets/img/workExample4.jpg";
import workExample3 from "../../../assets/img/workExample3.jpg";
import calculator from "../../../assets/img/calculator.jpg";

const worksData = [
  {
    title: "Todolist",
    src: toDoList,
    link: "https://eliseevais.github.io/1-4-todolist-5-sprint/"
  },
  {
    title: "Calculator LS",
    src: calculator,
    link: "https://eliseevais.github.io/11-1-counter-final/"
  },
  {
    title: "Normalized state",
    src: workExample4,
    link: 'https://eliseevais.github.io/22-normalized-state/'
  },
  {
    title: "Here could be your idea",
    src: workExample3,
  },
];

export const Works: React.FC = () => {
  return (
    <Styles.Works id={"works"}>
      <Container>
        <SectionTitle>My work experience</SectionTitle>
        <FlexWrapper justify="space-between" wrap="wrap">
          {worksData.map((work, index) => {
            return <Work title={work.title} src={work.src} key={index} link={work.link}/>;
          })}
        </FlexWrapper>
      </Container>
    </Styles.Works>
  );
};
