import React from "react";
import { Dashboard } from "./src/screens/Dashboard";
import { ThemeProvider } from "styled-components/native";

import theme from "./src/global/styles/theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Dashboard />
    </ThemeProvider>
  );
}
