import React from "react";

import { HighlightCard } from "../../components/HIghlightCard";
import Header from "../../components/Header";
import { Container, HighlightCards, TransactionList } from "./styles";
import Transaction from "../../components/Transaction";
import TransactionCard from "../../components/TransactionCard";
import { TransactionCardProps } from "../../components/TransactionCard";

export interface DataListProps extends TransactionCardProps {
  id: string;
}

export function Dashboard() {
  const data = [
    {
      id: "1",
      type: "positive",
      title: "Desenvolvimento de Site",
      amount: "R$12.000,00",
      category: { name: "Vendas", icon: "dollar-sign" },
      date: "20/12/2021",
    },
    {
      id: "2",
      type: "negative",
      title: "Desenvolvimento de Site",
      amount: "R$12.000,00",
      category: { name: "Vendas", icon: "coffee" },
      date: "20/12/2021",
    },
    {
      id: "3",
      type: "positive",
      title: "Desenvolvimento de Site",
      amount: "R$12.000,00",
      category: { name: "Vendas", icon: "shopping-bag" },
      date: "20/12/2021",
    },
  ];
  return (
    <Container>
      <Header />
      <HighlightCards>
        <HighlightCard
          type="down"
          amount="10"
          lastTransaction="R$ 10.00"
          title="titlo"
        />
        <HighlightCard
          type="up"
          amount="10"
          lastTransaction="R$ 10.00"
          title="titlo"
        />
        <HighlightCard
          type="total"
          amount="10"
          lastTransaction="R$ 10.00"
          title="titlo"
        />
      </HighlightCards>
      <Transaction>
        <TransactionList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <TransactionCard data={item} />}
        />
      </Transaction>
    </Container>
  );
}
