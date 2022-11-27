import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme/theme";
import { HomePage, PageHelmet, PokemonDetails } from "./components/index";
import { createContext, useState } from "react";
import GlobalStyle from "./theme/GlobalStyles";

//color switcher context
export const ThemeContext = createContext(
  {} as { toggle: string; setToggle: any }
);

function App() {
  const [toggle, setToggle] = useState("dark");
  const [limit, setLimit] = useState<number>(151);
  const [offset, setOffset] = useState<number>(0);

  switch (toggle) {
    case "light":
      document.body.classList.contains("dark") &&
        document.body.classList.remove("dark");
      theme.currentTheme = {
        fontColor: "#fff",
        background: "	#f0f0f0",
        mainColor: "#ee1515",
      };
      break;

    case "dark":
      document.body.classList.add("dark");
      theme.currentTheme = {
        fontColor: "#fff",
        background: "#222224",
        mainColor: "#121212",
      };
      break;

    default:
      theme.currentTheme = {
        fontColor: "#fff",
        background: "	#f0f0f0",
        mainColor: "#ee1515",
      };
  }

  return (
    <ThemeProvider theme={theme}>
      <PageHelmet />
      <GlobalStyle />
      <ThemeContext.Provider value={{ toggle, setToggle }}>
        <BrowserRouter>
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="/pokemon/:id" element={<PokemonDetails />} />
          </Routes>
        </BrowserRouter>
      </ThemeContext.Provider>
    </ThemeProvider>
  );
}

export default App;
