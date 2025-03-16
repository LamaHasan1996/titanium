import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { useTranslation } from "../../translation";
import { CarCard } from "../index";
import { data } from "./data";
import useStyles from "./styles";
import { IArrowProps } from "./types";

export const HomeCars = () => {
  const styles = useStyles();
  const { t, lang } = useTranslation();
  const navigate = useNavigate();
  const theme = useTheme();

  const CustomPrevArrow: React.FC<IArrowProps> = ({ onClick }) => (
    <IconButton
      onClick={onClick}
      sx={{
        position: "absolute",
        left: "-47px",
      }}
      className={styles.arrow}
    >
      <ArrowBackIos />
    </IconButton>
  );

  const CustomNextArrow: React.FC<IArrowProps> = ({ onClick }) => (
    <IconButton
      onClick={onClick}
      sx={{
        position: "absolute",
        right: "-22px",
        [theme.breakpoints.down(1025)]: {
          right: "-3rem",
        },
      }}
      className={styles.arrow}
    >
      <ArrowForwardIos />
    </IconButton>
  );

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    rtl: lang === "ar",
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 426,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Box className={styles.sliderBox}>
      <Typography className={styles.title}>{t("Latest Cars")}</Typography>
      <Slider {...settings}>
        {data?.map((item) => (
          <CarCard data={item} maxWidth={"18rem"} />
        ))}
      </Slider>
      <Box display={"flex"} justifyContent={"flex-end"} mb={"8px"}>
        <Button
          variant="contained"
          size="medium"
          color="secondary"
          className={styles.btn}
          onClick={() => navigate("/inventory")}
        >
          {t("View All")}
        </Button>
      </Box>
    </Box>
  );
};
