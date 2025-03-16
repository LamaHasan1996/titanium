import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles<Theme>((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "6rem",
    marginTop: "40px",
    marginBottom: "40px",
  },
  filterscontainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: "6rem",
    marginTop: "40px",
    [theme.breakpoints.down(1025)]: {
      marginTop: "24px",
    },
  },
  filtersBox: {
    borderRadius: "8px",
    border: "1px solid #34495e",
    padding: "10px",
    gap: "8px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "& .MuiButtonGroup-root": {
      boxShadow: "none",
    },
    [theme.breakpoints.down(426)]: {
      flexDirection: "column",
      alignItems: "flex-end",
      gap: "16px",
    },
  },
  imgBox: {
    height: "348px",
    width: "100%",
    "& img": {
      height: "100%",
      width: "100%",
    },
  },
  pagination: {
    "& .MuiPagination-ul .Mui-selected": {
      backgroundColor: "#512d6a38",
      color: theme.palette.secondary.main,
    },
  },
  category: {
    minWidth: "160px",
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "#34495e",
      "& legend": {
        height: "20px",
        "& span": {
          opacity: 1,
        },
      },
    },
  },
  select: {
    minWidth: 150,
    height: "50px",
    position: "relative",
    [theme.breakpoints.down(426)]: {
      width: "100%",
    },
  },
  btnGroup: {
    direction: "initial",
    [theme.breakpoints.down(426)]: {
      width: "100%",
    },
    "& .MuiButtonBase-root": {
      [theme.breakpoints.down(426)]: {
        width: "33.3%",
      },
    },
  },
}));
export default useStyles;
