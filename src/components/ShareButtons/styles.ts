import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles<Theme>((theme) => ({
  shareBtn: {
    backgroundColor: `${theme.palette.secondary.main}!important`,
    minWidth: "45px!important",
    height: "45px",
    padding: "8px",
    "& .MuiSvgIcon-root": {
      color: "#fff",
      fontSize: "18px",
    },
  },
}));
export default useStyles;
