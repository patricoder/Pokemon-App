import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme/theme";
import { HomePage } from "./components/index";
import { createContext, useState } from "react";
import GlobalStyle from "./theme/GlobalStyles";
import { Helmet } from "react-helmet";

//color switcher context
export const ThemeContext = createContext(
  {} as { toggle: string; setToggle: any }
);

function App() {
  const [toggle, setToggle] = useState("light");

  switch (toggle) {
    case "light":
      theme.currentTheme = {
        fontColor: "#fff",
        background: "	#f0f0f0",
        mainColor: "#ee1515",
      };
      break;

    case "dark":
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
      <Helmet>
        <meta charSet="utf-8" />
        <title>Pokedex</title>
        <link
          href="https://fonts.googleapis.com/css2?family=VT323&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <GlobalStyle theme={theme.currentTheme} />
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
