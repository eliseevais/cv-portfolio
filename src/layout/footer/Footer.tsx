import React from "react";
import { FlexWrapper } from "../../components/FlexWrapper_Styles";
import { Container } from "../../components/Container_Styles";
import { Styles } from "./Footer_Styles";
import { IconFooter } from "../../components/skillsIcon/Icon";

const socialItemData = [
  { iconId: "telegram" },
  { iconId: "phone" },
  { iconId: "email" },
];

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
            <small>Media</small>
            <Styles.SocialList>
              {socialItemData.map((socialItem, index) => {
                return (
                  <Styles.SocialLink key={index}>
                    <IconFooter iconId={socialItem.iconId}  />
                  </Styles.SocialLink>
                );
              })}
            </Styles.SocialList>
          </Styles.MediaBlock>
        </FlexWrapper>
        <Styles.Copyright>&copy; 2023, Made by Irina Eliseeva</Styles.Copyright>
      </Container>
    </Styles.Footer>
  );
};
