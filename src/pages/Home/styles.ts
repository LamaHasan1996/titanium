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
    position: "relative",
    zIndex: 0,
  },
  background: {
    height: "100%",
    width: "99vw",
    position: "absolute",
    top: "-1rem",
    zIndex: -2,
    backgroundImage: `url('/images/line.svg')`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100%",
    transform: "scale(1.3)",
    "&::before": {
      content: '""',
      zIndex: -1,
      top: "69px",
      width: "100%",
      height: "76%",
      display: "block",
      backgroundColor: "#f4f4f4",
      position: "absolute",
      animation: "drawLine 10s infinite",
    },
  },
}));
export default useStyles;
