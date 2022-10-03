import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme/theme";
import { HomePage } from "./components/index";
import { createContext, useState } from "react";
import GlobalStyle from './theme/GlobalStyles';


//color switcher context
export const ThemeContext = createContext(
  {} as { toggle: string; setToggle: any }
);

function App() {
  const [toggle, setToggle] = useState("light");

  switch (toggle) {
    case "light":
      theme.currentTheme = {
        fontColor: "#000",
        background: "#fff",
        mainColor: "#FFC800",
      };
      break;

    case "dark":
      theme.currentTheme = {
        fontColor: "#fff",
        background: "#292929",
        mainColor: "#121212",
      };
      break;

    default:
      theme.currentTheme = {
        fontColor: "#000",
        background: "#fff",
        mainColor: "#FFC800",
      };
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route
            index
            element={
              <ThemeContext.Provider value={{ toggle, setToggle }}>
                <HomePage />
              </ThemeContext.Provider>
            }
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
