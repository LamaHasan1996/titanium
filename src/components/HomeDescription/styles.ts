import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles<Theme>((theme) => ({
  container: {
    border: `1px solid ${theme.palette.secondary.main}`,
    borderRadius: "8px",
    maxWidth: "50rem",
    padding: "16px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#34495e",
    color: "#fff",
  },
  title: {
    fontSize: "20px!important",
    fontWeight: "600!important",
    fontFamily:
      theme.direction === "rtl"
        ? "Montserrat-Bold!important"
        : "Poppins-Bold!important",
    [theme.breakpoints.down(425)]: {
      fontSize: "16px!important",
    },
  },
  description: {
    fontSize: "16px!important",
    textAlign: "center",
    [theme.breakpoints.down(425)]: {
      fontSize: "14px!important",
    },
  },
}));
export default useStyles;
