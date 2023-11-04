import React from "react";
import { IconFooter } from "../../components/menu/icon/Icon";
import { FlexWrapper } from "../../components/FlexWrapper_Styles";
import { Container } from "../../components/Container_Styles";
import { Styles } from "./Footer_Styles";

const socialItemData = [
  { iconId: "telegram" },
  { iconId: "phone" },
  { iconId: "email" },
];

export const Footer: React.FC = () => {
  return (
    <Container>
      <Styles.Footer>
        <FlexWrapper justify="space-between">
          <Styles.ContactsFooter>
            <small>irina.eliseeva1991@gmail.com</small>
            <small>Web designer and front-end developer</small>
          </Styles.ContactsFooter>
          <Styles.MediaBlock>
            <small>Media</small>
            <Styles.SocialList>
              {socialItemData.map((socialItem, index) => {
                return (
                  <Styles.SocialLink>
                    <IconFooter iconId={socialItem.iconId} key={index} />
                  </Styles.SocialLink>
                );
              })}
            </Styles.SocialList>
          </Styles.MediaBlock>
        </FlexWrapper>
        <Styles.Copyright>&copy; 2023, Made by Irina Eliseeva</Styles.Copyright>
      </Styles.Footer>
    </Container>
  );
};
