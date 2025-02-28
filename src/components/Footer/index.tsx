import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MailIcon from "@mui/icons-material/Mail";
import { Box, Container, Typography } from "@mui/material";
import clsx from "clsx";
import { useTranslation } from "../../translation/context";
import useStyles from "./styles";

export const Footer = () => {
  const styles = useStyles();
  const { lang, t } = useTranslation();

  return (
    <Box className={styles.root}>
      <Container
        maxWidth="lg"
        dir={lang === "en" ? "ltr" : "rtl"}
        className={styles.container}
      >
        <Box className={styles.imgBox}>
          <img src={"/images/logo.png"} alt="logo" />
        </Box>
        <Typography className={styles.title}>{t("Contact US")}</Typography>
        <Box className={styles.contentContainer}>
          <Box className={clsx(styles.contentBox, styles.pointer)}>
            <a
              href="https://www.google.com/maps?q=RAS+AL+Khor+showroom+285"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              <LocationOnIcon />
              <Typography>RAS AL Khor shwroom 285</Typography>
            </a>
          </Box>
          <Box className={clsx(styles.contentBox, styles.pointer)}>
            <a href="tel:+97156323222" className={styles.link}>
              <LocalPhoneIcon />
              <Typography>
                <bdi>+971 563 232 22</bdi>
              </Typography>
            </a>
          </Box>
        </Box>
        <Box className={styles.contentContainer}>
          <Box
            className={clsx(styles.contentBox, styles.pointer)}
            onClick={() => window.open(`mailto:${"titanium@gmail.com"}`)}
          >
            <MailIcon />
            <Typography>titanium@gmail.com</Typography>
          </Box>
          <Box className={styles.contentBox}>
            <AccessTimeIcon />
            <Typography>{t("9 AM to 6 PM")}</Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
