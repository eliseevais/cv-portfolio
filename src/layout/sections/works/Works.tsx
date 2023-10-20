import React from "react";
import styled from "styled-components";
import { ContainerWrapper } from "../../../components/ContainerWrapper";
import { myTheme } from "../../../styles/Theme.styled";
import { SectionTitle } from "../../../components/SectionTitle";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Work } from "./work/Work";
import socialNetwork from "../../../assets/img/socialNetwork.jpg";
import toDoList from "../../../assets/img/toDoList.jpg";

const items = ["All", "Landing page", "React", "SPA"];

export const Works = () => {
  return (
    <ContainerWrapper bgColor={myTheme.colors.backgroundA}>
      <WorksStyled>
        <SectionTitle>My work experience</SectionTitle>
        <FlexWrapper justify={"space-between"}>
          <Work title={"Social network"} text={"Lorem"} src={socialNetwork} />
          <Work title={"Task tracker"} text={"Lorem"} src={toDoList} />
        </FlexWrapper>
      </WorksStyled>
    </ContainerWrapper>
  );
};

const WorksStyled = styled.section`
  width: 1300px;
  padding: 120px 0;
`;