import React from "react";
import {
  Container,
  Header,
  Title,
  Icon,
  Footer,
  Amount,
  LastTransaction,
} from "./styles";

interface Props {
  title: string;
  amount: string;
  lastTransaction: string;
  type: "total" | "down" | "up";
}

const icon = {
  up: "arrow-up-circle",
  down: "arrow-down-circle",
  total: "dollar-sign",
};

export function HighlightCard(props: Props) {
  return (
    <Container type={props.type}>
      <Header>
        <Title type={props.type}>{props.title}</Title>
        <Icon name={icon[props.type]} type={props.type} />
      </Header>
      <Footer>
        <Amount type={props.type}>{props.amount}</Amount>
        <LastTransaction type={props.type}>
          {props.lastTransaction}
        </LastTransaction>
      </Footer>
    </Container>
  );
}
