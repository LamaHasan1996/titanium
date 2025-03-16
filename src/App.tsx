import { CssBaseline, Paper } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { jssPreset, StylesProvider } from "@mui/styles";
import { create } from "jss";
import rtl from "jss-rtl";
import { Suspense, useEffect, useMemo, useRef } from "react";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import { Footer, Header } from "./components";
import router from "./router/router";
import { getTheme } from "./styles/theme";
import { useTranslation } from "./translation/context";
// import { theme } from "./styles/theme";

function App() {
  const jss = create({ plugins: [...jssPreset().plugins, rtl()] });
  const componentRef = useRef<HTMLDivElement>(null);
  const { lang } = useTranslation();
  console.log(lang, "lang");
  const theme = useMemo(() => getTheme({ lang: lang ?? "en" }), [lang]);
  console.log(theme, "theme");
  useEffect(() => {
    console.log("Language Changed:", lang);
  }, [lang]);
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <StylesProvider jss={jss}>
        <CssBaseline />
        <Paper
          component="div"
          ref={componentRef}
          dir={lang === "en" ? "ltr" : "rtl"}
          id="full-page"
          style={{
            background: theme.palette.background.default,
            position: "relative",
            minHeight: "100vh",
            height: "100%",
            boxShadow: "none",
            display: "flex",
            flexDirection: "column",
            width: "100%",
            fontFamily: theme.typography.fontFamily,
            overflowX: "hidden",
          }}
        >
          <Suspense fallback={<h1></h1>}>
            <RouterProvider router={router} />
          </Suspense>
        </Paper>
      </StylesProvider>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
