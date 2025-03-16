import {
  Box,
  Button,
  ButtonGroup,
  Container,
  FormControl,
  MenuItem,
  Pagination,
  Select,
  useTheme,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { CarCard, ShareButton } from "../../components";
import { useTranslation } from "../../translation";
import { data } from "./data";
import useStyles from "./styles";

export const Inventory = () => {
  const styles = useStyles();
  const [cars] = useState(data);
  const [page, setPage] = useState(1);
  const [selectedStatus, setSelectedStatus] = useState<"New" | "Used" | "All">(
    "All"
  );
  const [selectedType, setSelectedType] = useState<string>("All");
  const itemsPerPage = 6;
  const theme = useTheme();
  const { t } = useTranslation();

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
      <Container maxWidth="lg" className={styles.filterscontainer}>
        <Box className={styles.filtersBox}>
          <ButtonGroup
            variant="contained"
            aria-label="status selection"
            className={styles.btnGroup}
          >
            <Button
              key={"All"}
              onClick={() => setSelectedStatus("All")}
              sx={{
                backgroundColor:
                  selectedStatus === "All"
                    ? theme.palette.secondary.main
                    : "#512d6a78",
                color: "#fff",
                borderColor: `${theme.palette.secondary.main}!important`,
              }}
            >
              {t("All")}
            </Button>
            <Button
              key={"New"}
              onClick={() => setSelectedStatus("New")}
              sx={{
                backgroundColor:
                  selectedStatus === "New"
                    ? theme.palette.secondary.main
                    : "#512d6a78",
                color: "#fff",
                borderColor: `${theme.palette.secondary.main}!important`,
              }}
            >
              {t("New")}
            </Button>
            <Button
              key={"Used"}
              onClick={() => setSelectedStatus("Used")}
              sx={{
                backgroundColor:
                  selectedStatus === "Used"
                    ? theme.palette.secondary.main
                    : "#512d6a78",
                color: "#fff",
                borderColor: `${theme.palette.secondary.main}!important`,
              }}
            >
              {t("Used")}
            </Button>
          </ButtonGroup>
          <FormControl className={styles.select}>
            <Select
              label={t("Car Category")}
              value={selectedType}
              className={styles.category}
              onChange={(e) => setSelectedType(e.target.value)}
              MenuProps={{
                disablePortal: true,
                disableScrollLock: true,
                PaperProps: {
                  sx: {
                    position: "absolute",
                    zIndex: 0,
                  },
                },
                anchorOrigin: {
                  vertical: "bottom",
                  horizontal: "left",
                },
                transformOrigin: {
                  vertical: "top",
                  horizontal: "left",
                },
              }}
            >
              <MenuItem value="All">{t("All")}</MenuItem>
              <MenuItem value="SUV">{t("SUV")}</MenuItem>
              <MenuItem value="Sedan">{t("Sedan")}</MenuItem>
              <MenuItem value="Truck">{t("Truck")}</MenuItem>
              <MenuItem value="Coupe">{t("Coupe")}</MenuItem>
            </Select>
          </FormControl>
          <ShareButton />
        </Box>
      </Container>
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
