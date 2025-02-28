import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles<Theme>((theme) => ({
  container: {
    border: "1px solid #512d6a",
    borderRadius: "8px",
    maxWidth: "50rem",
    padding: "16px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#94b9e31f",
  },
  title: {
    fontSize: "20px!important",
    fontWeight: "600!important",
    fontFamily:
      theme.direction === "rtl"
        ? "Montserrat-Bold!important"
        : "Poppins-Bold!important",
  },
  description: {
    fontSize: "16px!important",
    textAlign: "center",
  },
}));
export default useStyles;
