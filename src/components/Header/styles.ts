import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material/styles";

const useStyles = makeStyles<Theme>((theme) => ({
  header: {
    position: "sticky",
    top: 0,
    zIndex: 5,
    width: "100%",
    backgroundColor: "#34495e",
  },
  container: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    paddingTop: "16px",
    paddingBottom: "8px",
  },
  imgBox: {
    height: "50px",
    width: "70px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& img": {
      maxWidth: "100%",
      height: "65px",
    },
  },
  icon: {
    cursor: "pointer",
    height: "30px",
    width: "30px",
    color: theme.palette.primary.main,
  },
  label: {
    fontSize: `${theme.typography.htmlFontSize}px!important`,
    fontWeight: `${theme.typography.fontWeightBold}!important`,
    color: theme.palette.primary.main,
  },
  value: {
    fontSize: "16px",
    color: theme.palette.primary.main,
  },
  infoBox: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  link: {
    color: `#fff !important`,
    fontSize: "16px!important",
    fontWeight: "600!important",
    fontFamily:
      theme.direction === "rtl"
        ? "Montserrat-Bold!important"
        : "Poppins-Bold!important",
    [theme.breakpoints.down(425)]: {
      fontSize: "14px !important",
      fontWeight: "500 !important",
      fontFamily:
        theme.direction === "rtl"
          ? "Montserrat!important"
          : "Poppins!important",
    },
  },
}));
export default useStyles;
