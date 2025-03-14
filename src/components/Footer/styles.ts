import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material/styles";

const useStyles = makeStyles<Theme>((theme) => ({
  container: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    paddingTop: "2rem",
    paddingBottom: "2rem",
  },
  imgBox: {
    height: "114px",
    width: "114px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& img": {
      maxWidth: "100%",
      height: "90px",
    },
  },
  root: {
    backgroundColor: "#34495e",
  },
  title: {
    fontSize: "24px!important",
    fontWeight: "600!important",
    display: "flex",
    paddingTop: "20px",
    color: "#fff !important",
    fontFamily:
      theme.direction === "rtl"
        ? "Montserrat-Bold!important"
        : "Poppins-Bold!important",
  },
  contentContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: "20px",
  },
  contentBox: {
    display: "flex",
    alignItems: "center",
    gap: "4px",
    color: "#fff !important",

    "& svg": {
      color: theme.palette.primary.main,
    },
  },
  pointer: {
    cursor: "pointer",
  },
  link: {
    color: "#fff !important",
    display: "flex",
    gap: "4px",
  },
}));
export default useStyles;
