import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "6rem",
    marginTop: "40px",
    marginBottom: "40px",
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
      color: "#512d6a",
    },
  },
}));
export default useStyles;
