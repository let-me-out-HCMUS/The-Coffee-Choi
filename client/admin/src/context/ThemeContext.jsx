/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

import { defaultTheme, darkTheme } from "../ui/Theme";

const ThemeContext = createContext();

function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState(defaultTheme);
  const [isDarkmode, setIsDarkmode] = useState(true);

  useEffect(
    function () {
      setTheme(isDarkmode ? darkTheme : defaultTheme);
    },
    [isDarkmode, setTheme]
  );

  return (
    <ThemeContext.Provider
      value={{ theme, setTheme, isDarkmode, setIsDarkmode }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export { ThemeContext, ThemeContextProvider };
