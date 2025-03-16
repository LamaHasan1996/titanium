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
  },
  imgBox: {
    height: "348px",
    width: "100%",
    "& img": {
      maxHeight: "100%",
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
  select: { minWidth: 150, height: "50px", position: "relative" },
  btnGroup: {
    direction: "initial",
  },
}));
export default useStyles;
