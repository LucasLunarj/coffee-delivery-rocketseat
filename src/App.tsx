import { ThemeProvider } from "styled-components";
import { DefaultTheme } from "./styles/default";
import { GlobalStyle } from "./styles/global";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { CoffeeListProvider } from "./contexts/CoffeListContext";

export function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <BrowserRouter>
        <CoffeeListProvider>
          <Router />
        </CoffeeListProvider>
      </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
  );
}
