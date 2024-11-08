import React from "react";
import { FlexWrapper } from "../../components/FlexWrapper_Styles";
import { Container } from "../../components/Container_Styles";
import { Styles } from "./Footer_Styles";
import { IconFooter } from "../../components/skillsIcon/Icon";

export const Footer: React.FC = () => {
  return (
    <Styles.Footer>
      <Container>
        <FlexWrapper justify="space-between">
          <Styles.ContactsFooter>
            <small>irina.eliseeva1991@gmail.com</small>
            <small>Web designer and front-end developer</small>
          </Styles.ContactsFooter>
          <Styles.MediaBlock>
            <small>+7 (926) 061-30-04</small>
            <br/>
            <small>Phone number and telegram</small>
          </Styles.MediaBlock>
        </FlexWrapper>
        <Styles.Copyright>&copy; 2024, Made by Irina Eliseeva</Styles.Copyright>
      </Container>
    </Styles.Footer>
  );
};
