import React from "react";

import {
  Photo,
  User,
  UserGreeting,
  UserInfo,
  UserName,
  UserWrapper,
  Icon,
  Container,
} from "./styles";

export default function Header() {
  return (
    <Container>
      <UserWrapper>
        <UserInfo>
          <Photo
            source={{
              uri: "https://avatars.githubusercontent.com/u/69832627?v=4",
            }}
          />
          <User>
            <UserGreeting>Olá,</UserGreeting>
            <UserName>Rodrigo</UserName>
          </User>
        </UserInfo>
        <Icon name="power" />
      </UserWrapper>
    </Container>
  );
}
