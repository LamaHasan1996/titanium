import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles<Theme>((theme) => ({
  card: {
    border: "1px solid #512d6a",
  },
  title: {
    fontSize: "16px!important",
    fontWeight: "600!important",
    fontFamily:
      theme.direction === "rtl"
        ? "Montserrat-Bold!important"
        : "Poppins-Bold!important",
    overflowWrap: "anywhere",
    maxWidth: "100%",
    display: "-webkit-box",
    overflow: "hidden",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: "2",
    textOverflow: "ellipsis",
  },
  oldFlag: {
    fontSize: "14px!important",
    position: "absolute",
    right: "0px",
    top: "14px",
    backgroundColor: "#9abee570",
    backdropFilter: "blur(2px)",
    width: "80px",
    paddingLeft: "8px",
    paddingRight: "8px",
    borderRadius: "11px 0px 0px 13px",
    overflowWrap: "anywhere",
    maxWidth: "100%",
    display: "-webkit-box",
    overflow: "hidden",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: "1",
    textOverflow: "ellipsis",
  },
  requestFlag: {
    fontSize: "14px!important",
    position: "absolute",
    right: "0px",
    top: "45px",
    backgroundColor: "#9abee570",
    backdropFilter: "blur(2px)",
    width: "100px",
    paddingLeft: "8px",
    paddingRight: "8px",
    borderRadius: "11px 0px 0px 13px",
    overflowWrap: "anywhere",
    maxWidth: "100%",
    display: "-webkit-box",
    overflow: "hidden",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: "1",
    textOverflow: "ellipsis",
  },
  fontFamily: {
    fontFamily:
      theme.direction === "rtl"
        ? "Montserrat-Bold!important"
        : "Poppins-Bold!important",
  },
}));
export default useStyles;
