import React from "react";
import styled from "styled-components";
import { Container } from "../../../components/Container";
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
    <Container>
      <WorksStyled>
        <SectionTitle>My work experience</SectionTitle>
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
    </Container>
  );
};

const WorksStyled = styled.section`
  padding: 120px 14px 0;
  outline: 1px solid ${myTheme.colors.accentB};
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  ${SectionTitle} {
    position: relative;
    width: fit-content;

    ::before {
      content: "";
      border-bottom: 1px solid ${myTheme.colors.accentA};
      position: absolute;
      height: 2px;
      width: 70%;
      top: -10px;
    }
  }

  @media ${myTheme.media.largeTablet} {
    padding-top: 70px;
    align-items: center;

    ${FlexWrapper} {
      justify-content: center;
      align-items: center;
    }

    ${SectionTitle} {
      margin: 0 auto 32px;

      @media ${myTheme.media.largeTablet} {
      &::before {
        display: none;
      }
    }
    }
  }
`;
