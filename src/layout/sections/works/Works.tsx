import React from "react";
import styled from "styled-components";
import { ContainerWrapper } from "../../../components/ContainerWrapper";
import { myTheme } from "../../../styles/Theme.styled";
import { SectionTitle } from "../../../components/SectionTitle";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Work } from "./work/Work";
import socialNetwork from "../../../assets/img/socialNetwork.jpg";
import toDoList from "../../../assets/img/toDoList.jpg";
import workExample4 from "../../../assets/img/workExample4.jpg";
import workExample3 from "../../../assets/img/workExample3.jpg";

const items = ["All", "Landing page", "React", "SPA"];

export const Works = () => {
  return (
    <ContainerWrapper bgColor={myTheme.colors.backgroundA}>
      <WorksStyled>
        <SectionTitle>
          <SectionTitleStyled>My work experience</SectionTitleStyled>
        </SectionTitle>
        <FlexWrapper justify="space-between" wrap="wrap">
          <Work title="Social network" text="Lorem" src={socialNetwork} />
          <Work title="Task tracker" text="Lorem" src={toDoList} />
          <Work
            title="New project is loading"
            text="Lorem"
            src={workExample4}
          />
          <Work
            title="Here could be your idea"
            text="Lorem"
            src={workExample3}
          />
        </FlexWrapper>
      </WorksStyled>
    </ContainerWrapper>
  );
};

const WorksStyled = styled.section`
  width: 1300px;
  padding-top: 120px;
`;

const SectionTitleStyled = styled.div`
  position: relative;

  ::before {
    content: "";
    width: 20px;
    height: 1px;
    border-bottom: 1px solid ${myTheme.colors.accentA};
    position: absolute;
    height: 2px;
    width: 450px;
    top: -10px;
  }
`;
