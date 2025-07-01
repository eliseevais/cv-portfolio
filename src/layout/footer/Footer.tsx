import React from "react";
import { FlexWrapper } from "../../components/FlexWrapper_Styles";
import { Container } from "../../components/Container_Styles";
import { Styles } from "./Footer_Styles";

export const Footer: React.FC = () => {
  return (
    <Styles.Footer>
      <Container>
        <FlexWrapper justify="space-between" align="center" wrap="wrap">
          <Styles.ContactsFooter>
            <small>📧 i.e.work@yandex.ru</small>
            <small>📞 +7 (926) 061-30-04</small>
            <small>✈️ telegram @is_eliseeva</small>
          </Styles.ContactsFooter>
        </FlexWrapper>
        <Styles.Copyright>
          &copy; 2025, Made by Irina Eliseeva
        </Styles.Copyright>
      </Container>
    </Styles.Footer>
  );
};
