import ArrowBackIos from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIos from "@mui/icons-material/ArrowForwardIos";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  IconButton,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import clsx from "clsx";
import { useFormik } from "formik";
import "lightgallery/css/lg-fullscreen.css";
import "lightgallery/css/lg-share.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lightgallery.css";
import lgFullscreen from "lightgallery/plugins/fullscreen";
import lgShare from "lightgallery/plugins/share";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import LightGallery from "lightgallery/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import * as Yup from "yup";
import { useTranslation } from "../../translation";
import { data } from "./data";
import useStyles from "./styles";
import { IArrowProps } from "./types";
export const CarDetails = () => {
  const styles = useStyles();
  const { lang, t } = useTranslation();

  const CustomPrevArrow: React.FC<IArrowProps> = ({ onClick }) => (
    <IconButton
      onClick={onClick}
      sx={{ position: "absolute", left: "10px" }}
      className={styles.arrow}
    >
      <ArrowBackIos />
    </IconButton>
  );

  const CustomNextArrow: React.FC<IArrowProps> = ({ onClick }) => (
    <IconButton
      onClick={onClick}
      sx={{ position: "absolute", right: "10px" }}
      className={styles.arrow}
    >
      <ArrowForwardIos />
    </IconButton>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  const validationSchema = Yup.object({
    name: Yup.string().required(t("Name is required")),
    phone: Yup.string()
      .matches(/^[0-9]+$/, t("Phone must contain only numbers"))
      .min(10, t("Phone must be at least 10 digits"))
      .required(t("Phone is required")),
    email: Yup.string()
      .email(t("Invalid email format"))
      .required(t("Email is required")),
    userType: Yup.string().required(t("Please select your role")),
    agreement: Yup.boolean().oneOf([true], t("You must accept the terms")),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      email: "",
      userType: "",
      message: "",
      agreement: false,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log("Form Submitted", values);
      alert("Form Submitted Successfully!");
    },
  });

  return (
    <Container maxWidth={"lg"} className={styles.container}>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        width={"100%"}
        alignItems={"baseline"}
      >
        <Typography className={styles.title}>{data?.title[lang]}</Typography>
        <Typography>{data?.price[lang]}</Typography>
      </Box>
      <Box className={styles.sliderBox}>
        <Slider {...settings}>
          {data?.images.map((img, index) => (
            <LightGallery
              speed={500}
              plugins={[lgZoom, lgThumbnail, lgFullscreen, lgShare]}
              mode="lg-fade"
              download={true}
            >
              <a href={img} key={index} data-lg-size="1400-900">
                <img
                  src={img}
                  alt={`Image ${index + 1}`}
                  style={{
                    width: "100%",
                    height: "345px",
                    cursor: "pointer",
                  }}
                />
              </a>
            </LightGallery>
          ))}
        </Slider>
      </Box>
      <Accordion defaultExpanded className={styles.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography className={styles.accTitle}>
            {t("Vehicle Details")}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, sm: 4, md: 4 }}>
              <Typography className={styles.label}>
                {t("Vehicle Type")}
              </Typography>
              <Typography>{data.vehicleType[lang]}</Typography>
            </Grid>
            <Grid size={{ xs: 12, sm: 4, md: 4 }}>
              <Typography className={styles.label}>{t("Petrol")}</Typography>
              <Typography>{data.fuel[lang]}</Typography>
            </Grid>
            <Grid size={{ xs: 12, sm: 4, md: 4 }}>
              <Typography className={styles.label}>
                {t("Model Year")}
              </Typography>
              <Typography>{data.modelType}</Typography>
            </Grid>
            <Grid size={{ xs: 12, sm: 4, md: 4 }}>
              <Typography className={styles.label}>
                {t("Transmission")}
              </Typography>
              <Typography>{data.transmission[lang]}</Typography>
            </Grid>
            <Grid size={{ xs: 12, sm: 4, md: 4 }}>
              <Typography className={styles.label}>
                {t("Exterior Color")}
              </Typography>
              <Typography>{data.exteriorColor[lang]}</Typography>
            </Grid>
            <Grid size={{ xs: 12, sm: 4, md: 4 }}>
              <Typography className={styles.label}>
                {t("Interior Color")}
              </Typography>
              <Typography>{data.interiorColor[lang]}</Typography>
            </Grid>
            <Grid size={{ xs: 12, sm: 4, md: 4 }}>
              <Typography className={styles.label}>{t("Cylinders")}</Typography>
              <Typography>{data.cylinders[lang]}</Typography>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded className={styles.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography className={styles.accTitle}>
            {t("Description")}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{data.description[lang]}</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded className={styles.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography className={styles.accTitle}>{t("Features")}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent={"space-between"}
            gap="16px"
          >
            {Object.keys(data.features).map((category) => {
              const featureKey = category as keyof typeof data.features;

              return (
                <Box key={featureKey}>
                  <Typography className={styles.subTitle}>
                    {data.features[featureKey][lang]}
                  </Typography>
                  <Box
                    display="grid"
                    gridTemplateColumns="repeat(3, 1fr)"
                    gap="16px"
                  >
                    {data.features[featureKey].items.map((item, index) => (
                      <Box
                        key={index}
                        display="flex"
                        alignItems="center"
                        gap="8px"
                      >
                        <TaskAltIcon color="secondary" />
                        <Typography>{item[lang]}</Typography>
                      </Box>
                    ))}
                  </Box>
                </Box>
              );
            })}
          </Box>
        </AccordionDetails>
      </Accordion>
      <Box>
        <Typography className={clsx(styles.accTitle, styles.mb16)}>
          {t("Contact US")}
        </Typography>
        <form onSubmit={formik.handleSubmit} className={styles.form}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, sm: 6, md: 6 }}>
              <TextField
                fullWidth
                placeholder={t("Name")}
                name="name"
                variant="outlined"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 6 }}>
              <TextField
                fullWidth
                placeholder={t("Phone")}
                name="phone"
                variant="outlined"
                value={formik.values.phone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.phone && Boolean(formik.errors.phone)}
                helperText={formik.touched.phone && formik.errors.phone}
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 6 }}>
              <TextField
                fullWidth
                placeholder={t("Email")}
                name="email"
                variant="outlined"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 6 }}>
              <FormControl fullWidth variant="outlined">
                <Select
                  name="userType"
                  value={formik.values.userType}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.userType && Boolean(formik.errors.userType)
                  }
                >
                  <MenuItem value="">{t(`I'm a`)}</MenuItem>
                  <MenuItem value="buyer">{t("Buyer")}</MenuItem>
                  <MenuItem value="dealer">{t("Dealer")}</MenuItem>
                  <MenuItem value="enthusiast">{t("Enthusiast")}</MenuItem>
                </Select>
              </FormControl>
              {formik.touched.userType && Boolean(formik.errors.userType) ? (
                <Typography className={styles.error}>
                  {formik.errors.userType}
                </Typography>
              ) : null}
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 6 }}>
              <TextField
                fullWidth
                multiline
                rows={3}
                placeholder={t("Message")}
                name="message"
                variant="outlined"
                value={formik.values.message}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 6 }}>
              <FormControlLabel
                control={
                  <Checkbox
                    name="agreement"
                    checked={formik.values.agreement}
                    onChange={formik.handleChange}
                    color="primary"
                  />
                }
                label={
                  <Typography className={styles.link}>
                    {t("By submitting this form I agree to")}{" "}
                    <a href="#">{t("Terms of Use")}</a>
                  </Typography>
                }
              />
              {formik.touched.agreement && formik.errors.agreement && (
                <Typography color="error" variant="body2">
                  {formik.errors.agreement}
                </Typography>
              )}
            </Grid>
            <Grid size={{ xs: 3 }}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                className={styles.btn}
              >
                {t("Request Information")}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Container>
  );
};
