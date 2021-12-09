import React from "react";
import { Container, Title } from "./styles";

export default function Transaction({ children }) {
  return (
    <Container>
      <Title>Listagem</Title>
      {children}
    </Container>
  );
}
