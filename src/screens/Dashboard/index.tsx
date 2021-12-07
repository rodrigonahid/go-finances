import React from "react";
import { Text, View } from "react-native";
import Welcome from "../../components/Welcome";
import { Container } from "./styles";

export function Dashboard() {
  return (
    <Container>
      <Text>Dashboard</Text>
      <Welcome></Welcome>
    </Container>
  );
}
