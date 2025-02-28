import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { useTranslation } from "../../translation";
import { data } from "./data";
import useStyles from "./styles";
import { IArrowProps } from "./types";

export const HomeSlider = () => {
  const styles = useStyles();
  const { t, lang } = useTranslation();

  const CustomPrevArrow: React.FC<IArrowProps> = ({ onClick }) => (
    <IconButton
      onClick={onClick}
      sx={{
        position: "absolute",
        left: "10px",
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
        right: "10px",
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
    speed: 500,
    rtl: lang === "ar",
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  return (
    <Box className={styles.sliderBox}>
      <Slider {...settings}>
        {data?.map((item) => (
          <Box
            sx={{
              backgroundImage: `url(${item.img})`,
              direction: lang === "ar" ? "rtl" : "ltr",
            }}
            className={styles.sliderImg}
          >
            <Box className={styles.content}>
              <Typography className={styles.title}>
                {item.title[lang]}
              </Typography>
              <Typography className={styles.description}>
                {item.description[lang]}
              </Typography>
              <Box className={styles.link}>
                <Typography
                  component={Link}
                  to="/car/exeed-lx-comfort-1-5l-petrol-turbo-2024-model-grey-color-exterior"
                >
                  {t("Details")}
                </Typography>
              </Box>
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};
