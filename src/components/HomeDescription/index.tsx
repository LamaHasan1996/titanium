import { Box, Typography } from "@mui/material";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { useTranslation } from "../../translation";
import { data } from "./data";
import useStyles from "./styles";

export const HomeDecription = () => {
  const { lang } = useTranslation();
  const styles = useStyles();

  return (
    <Box className={styles.container}>
      <Typography className={styles.title}>{data.title[lang]}</Typography>
      <Typography className={styles.description}>
        {data.summary[lang]}
      </Typography>
    </Box>
  );
};
