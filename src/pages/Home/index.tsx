import { Container } from "@mui/material";
import { HomeCars, HomeDecription, HomeSlider } from "../../components";
import useStyles from "./styles";

export const Home = () => {
  const styles = useStyles();

  return (
    <>
      <HomeSlider />
      <Container maxWidth={"lg"} className={styles.container}>
        <HomeDecription />
        <HomeCars />
      </Container>
    </>
  );
};
