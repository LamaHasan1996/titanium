import { Box, Tooltip } from "@mui/material";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "../../translation";
import useStyles from "./styles";
import { ICar } from "./types";

export const CarCard = ({
  data,
  maxWidth,
}: {
  data: ICar;
  maxWidth: string;
}) => {
  const styles = useStyles();
  const navigate = useNavigate();
  const { t, lang } = useTranslation();

  return (
    <Card
      sx={{ maxWidth: maxWidth, direction: lang === "ar" ? "rtl" : "ltr" }}
      onClick={() => navigate(`/car/${data.alias}`)}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={data?.img}
          alt="car image"
        />
        <CardContent>
          <Typography variant="h6" className={styles.title}>
            {data?.title[lang]}
          </Typography>
          {data?.oldStatus ? (
            <Tooltip title={data?.oldStatus[lang]}>
              <Typography className={styles.oldFlag}>
                {data?.oldStatus[lang]}
              </Typography>
            </Tooltip>
          ) : (
            ""
          )}
          {data?.requestStatus ? (
            <Tooltip title={data?.requestStatus[lang]}>
              <Typography className={styles.requestFlag}>
                {data?.requestStatus[lang]}
              </Typography>
            </Tooltip>
          ) : (
            ""
          )}
          <Box>
            {data?.fuel ? (
              <Box display={"flex"} gap={"16px"}>
                <Typography fontWeight={"600"} className={styles.fontFamily}>
                  {t("Fuel")}
                </Typography>
                <Typography>{data?.fuel[lang]}</Typography>
              </Box>
            ) : (
              ""
            )}
            {data?.transmission ? (
              <Box display={"flex"} gap={"16px"}>
                <Typography fontWeight={"600"} className={styles.fontFamily}>
                  {t("Transmission")}
                </Typography>
                <Typography>{data?.transmission[lang]}</Typography>
              </Box>
            ) : (
              ""
            )}
            {data?.modelYear ? (
              <Box display={"flex"} gap={"16px"}>
                <Typography fontWeight={"600"} className={styles.fontFamily}>
                  {t("Model Year")}
                </Typography>
                <Typography>{data?.modelYear}</Typography>
              </Box>
            ) : (
              ""
            )}
          </Box>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button size="small" color="secondary">
          {t("See More")}
        </Button>
      </CardActions>
    </Card>
  );
};
