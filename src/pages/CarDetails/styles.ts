import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles<Theme>((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "1rem",
    marginTop: "40px",
    marginBottom: "40px",
  },
  sliderBox: {
    width: "100%",
    overflowX: "hidden",
    overflowY: "hidden",
    height: "385px",
    "& .slick-slider": {
      height: "385px",
    },
    "& .slick-dots": {
      bottom: "0px",
      "& li button:before": {
        fontSize: "11px",
        color: theme.palette.secondary.main,
      },
    },
    "& .lg-react-element": {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
  },
  title: {
    fontSize: "20px!important",
    fontWeight: "600!important",
    fontFamily:
      theme.direction === "rtl"
        ? "Montserrat-Bold!important"
        : "Poppins-Bold!important",
    maxWidth: "70%",
  },
  label: {
    fontWeight: "600!important",
    fontFamily:
      theme.direction === "rtl"
        ? "Montserrat-Bold!important"
        : "Poppins-Bold!important",
  },
  sliderImg: {
    height: "385px",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
    boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
    display: "flex!important",
    justifyContent: "center",
    alignItems: "flex-end",
    paddingBottom: "40px",
  },
  arrow: {
    top: "50%",
    transform: "translateY(-50%)",
    zIndex: 2,
    backgroundColor: "#9abee570!important",
    color: "white!important",
    outline: "none!important",
  },
  accordion: {
    width: "100%",
    borderRadius: "8px!important",
    "&::before": {
      display: "none",
    },
    "& .MuiCollapse-wrapper": {
      borderTop: "1px solid #ccc",
    },
  },
  form: {
    "& .MuiFormHelperText-root": {
      textAlign: "left",
    },
  },
  accTitle: {
    fontWeight: "600!important",
    fontSize: "18px!important",
    fontFamily:
      theme.direction === "rtl"
        ? "Montserrat-Bold!important"
        : "Poppins-Bold!important",
  },
  subTitle: {
    fontWeight: "600!important",
    fontSize: "16px!important",
    fontFamily:
      theme.direction === "rtl"
        ? "Montserrat-Bold!important"
        : "Poppins-Bold!important",
  },
  btn: {
    color: "#fff!important",
    backgroundColor: `${theme.palette.secondary.main}!important`,
  },
  link: {
    "& a": {
      color: theme.palette.secondary.main,
    },
  },
  error: {
    color: "#d32f2f",
    fontSize: "0.75rem!important",
    lineHeight: "1.66!important",
  },
  mb16: {
    marginBottom: "16px!important",
  },
}));
export default useStyles;
