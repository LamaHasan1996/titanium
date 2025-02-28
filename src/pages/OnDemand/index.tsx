import { Box, Container, Pagination } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { CarCard } from "../../components";
import { data } from "./data";
import useStyles from "./styles";

export const OnDemand = () => {
  const styles = useStyles();
  const [cars] = useState(data);
  const [page, setPage] = useState(1);
  const itemsPerPage = 6;

  const currentItems = useMemo(() => {
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return cars.slice(start, end);
  }, [page, cars]);

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <>
      <Box className={styles.imgBox}>
        <img src="/images/cars.png" alt="Car image" />
      </Box>

      <Container maxWidth={"lg"} className={styles.container}>
        <motion.div
          key={page}
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <Grid container spacing={2}>
            {currentItems?.map((item) => (
              <Grid size={{ xs: 12, sm: 4, md: 4 }}>
                <motion.div variants={cardVariants}>
                  <CarCard data={item} maxWidth={"100%"} />
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
        <Pagination
          count={Math.ceil(cars.length / itemsPerPage)}
          page={page}
          onChange={(_, value) => setPage(value)}
          siblingCount={0}
          className={styles.pagination}
        />
      </Container>
    </>
  );
};
