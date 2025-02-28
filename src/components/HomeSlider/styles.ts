import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles<Theme>((theme) => ({
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
        color: "#512d6a",
      },
    },
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
  content: {
    padding: "0.5rem",
    backgroundColor: "#9abee570",
    borderRadius: "8px",
    width: "40rem",
    backdropFilter: "blur(3px)",
  },
  title: {
    fontSize: "16px!important",
    fontWeight: "600!important",
    color: "#fff",
    overflowWrap: "anywhere",
    maxWidth: "100%",
    display: "-webkit-box",
    overflow: "hidden",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: "1",
    textOverflow: "ellipsis",
    fontFamily:
      theme.direction === "rtl"
        ? "Montserrat-Bold!important"
        : "Poppins-Bold!important",
  },
  description: {
    fontSize: "16px!important",
    color: "#fff",
    overflowWrap: "anywhere",
    maxWidth: "100%",
    display: "-webkit-box",
    overflow: "hidden",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: "1",
    textOverflow: "ellipsis",
  },
  link: {
    display: "flex",
    justifyContent: "flex-end",
    marginTop: "8px",
    "& a": {
      color: "#512d6a",
    },
  },
}));
export default useStyles;
