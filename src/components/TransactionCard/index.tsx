import React from "react";
import {
  Container,
  Title,
  Amount,
  Footer,
  Category,
  Icon,
  CategoryName,
  Date,
} from "./styles";

export default function TransactionCard() {
  return (
    <Container>
      <Title>Listagem</Title>
      <Amount>R$12355</Amount>
      <Footer>
        <Category>
          <Icon name="dollar-sign" />
          <CategoryName>Vendas</CategoryName>
        </Category>
        <Date>12/03/2020</Date>
      </Footer>
    </Container>
  );
}
