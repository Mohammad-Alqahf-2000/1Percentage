import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { ThemeProvider } from "@mui/material/styles";

// Direction
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefix } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";

// i18n (Languange lib)
import { useTranslation } from "react-i18next";
import { CssBaseline } from "@mui/material";

// My Theme
import { getCustomTheme } from "../theme/theme";

const ColorModeContext = createContext({
  toggleColorMode: () => {},
  mode: "light",
});
const LanguageContext = createContext({
  toggleLanguage: () => {},
  lang: "ar",
  direction: "rtl",
});

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugin: [prefix, rtlPlugin],
});

const cacheLtr = createCache({ key: "muiltr" });

export const AppUIContextProvider = ({ children }) => {
  const { i18n } = useTranslation();

  const [mode, setMode] = useState(() => {
    return localStorage.getItem("mode") === "light" ||
      localStorage.getItem("mode") === "dark"
      ? localStorage.getItem("mode")
      : "light";
  });

  const [language, setLanguage] = useState(() => {
    return localStorage.getItem("lang") === "en" ||
      localStorage.getItem("lang") === "ar"
      ? localStorage.getItem("lang")
      : "ar";
  });

  const color = useMemo(
    () => ({
      mode,
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    [mode],
  );

  const lang = useMemo(
    () => ({
      language,
      direction: language === "ar" ? "rtl" : "ltr",
      toggleLanguage: () => {
        setLanguage((prevLang) => (prevLang === "ar" ? "en" : "ar"));
      },
    }),
    [language],
  );

  useEffect(() => {
    localStorage.setItem("mode", mode);
  }, [mode]);

  const currentDirection = language === "ar" ? "rtl" : "ltr";
  useEffect(() => {
    localStorage.setItem("lang", language);
    i18n.changeLanguage(language);
    document.documentElement.dir = currentDirection;
    document.documentElement.lang = i18n.language;
  }, [language, i18n, currentDirection]);

  const theme = useMemo(
    () => getCustomTheme(mode, currentDirection),
    [mode, currentDirection],
  );

  return (
    <>
      <ColorModeContext.Provider value={color}>
        <LanguageContext.Provider value={lang}>
          <CacheProvider
            key={currentDirection}
            value={currentDirection === "rtl" ? cacheRtl : cacheLtr}
          >
            <ThemeProvider theme={theme}>
              <CssBaseline>{children}</CssBaseline>
            </ThemeProvider>
          </CacheProvider>
        </LanguageContext.Provider>
      </ColorModeContext.Provider>
    </>
  );
};

/* eslint-disable react-refresh/only-export-components */
export const useColorMode = () => useContext(ColorModeContext);
export const useLanguage = () => useContext(LanguageContext);
