import { Box, Container, Tooltip } from "@mui/material";
import { AiOutlineGlobal } from "react-icons/ai";
import { useTranslation } from "../../translation/context";
import useStyles from "./styles";

export const Header = () => {
  const styles = useStyles();
  const { lang, setLang, t } = useTranslation();

  return (
    <Container
      maxWidth="xl"
      dir={lang === "en" ? "ltr" : "rtl"}
      className={styles.container}
    >
      <Box className={styles.imgBox}>
        <a href="/home" className={styles.link}>
          <img src={"/images/logo.png"} alt="logo" />
        </a>
      </Box>
      <Box display={"flex"} alignItems={"center"} gap={"16px"}>
        <a href="/home" className={styles.link}>
          {t("Home")}
        </a>
        <a href="/inventory" className={styles.link}>
          {t("Inventory")}
        </a>
        <a href="/on-demand" className={styles.link}>
          {t("On Demand")}
        </a>
        <Tooltip title={lang === "en" ? "العربية" : "English"}>
          <AiOutlineGlobal
            className={styles.icon}
            onClick={() => setLang?.(lang === "en" ? "ar" : "en")}
          />
        </Tooltip>
      </Box>
    </Container>
  );
};
