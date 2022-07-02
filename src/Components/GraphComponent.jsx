import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Box, Container, Paper, Skeleton } from "@mui/material";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const GraphComponent = ({ dataList, loading }) => {
  return (
    <Container
      component={Paper}
      elevation={3}
      sx={{ borderRadius: "1rem", my: "4rem" }}
      maxWidth="sm">
      {loading ? (
        <Box width="100%">
          <Skeleton
            animation="wave"
            variant="rectangle"
            width="100%"
            height="20rem"
          />
        </Box>
      ) : (
        <Line
          data={{
            labels: dataList.map((_, index) => index + 1),
            datasets: [
              {
                label: "reviews",
                data: dataList.map((item) => item.reviews),
                backgroundColor: "#44A9F3",
                borderColor: "#44A9F3",
              },
            ],
          }}
        />
      )}
    </Container>
  );
};

export { GraphComponent };
