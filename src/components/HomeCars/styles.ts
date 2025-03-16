import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles<Theme>((theme) => ({
  sliderBox: {
    width: "100%",
    overflowX: "hidden",
    overflowY: "hidden",
    paddingLeft: "50px",
    paddingRight: "50px",
    "& .slick-list": {
      paddingBottom: "1rem",
    },
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
  },
  arrow: {
    top: "50%",
    transform: "translateY(-50%)",
    zIndex: 2,
    backgroundColor: "#9abee570!important",
    color: "white!important",
    outline: "none!important",
  },
  title: {
    fontSize: "20px!important",
    fontWeight: "600!important",
    textAlign: "center",
    marginBottom: "1rem!important",
    fontFamily:
      theme.direction === "rtl"
        ? "Montserrat-Bold!important"
        : "Poppins-Bold!important",
  },
  btn: {
    borderColor: `${theme.palette.secondary.main}!important`,
    transition: "box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out",
    "&:hover": {
      backgroundColor: theme.palette.secondary.main,
      color: "#fff",
      boxShadow: "-6px 4px 4px -1px rgba(0, 0, 0, 0.2)",
    },
  },
}));
export default useStyles;
