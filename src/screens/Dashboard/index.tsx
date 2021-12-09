import React from "react";

import { HighlightCard } from "../../components/HIghlightCard";
import Header from "../../components/Header";
import { Container, HighlightCards } from "./styles";
import Transaction from "../../components/Transaction";

export function Dashboard() {
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
      <Transaction />
    </Container>
  );
}
