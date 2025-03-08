import { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import { Line } from "react-chartjs-2";
import { fetchProgressData } from "../services/progressService";
import { Container, Typography } from "@mui/material";
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const ProgressChart = ({ userId }) => {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    const loadProgressData = async () => {
      const res = await fetchProgressData(userId);
      if (res.success) {
        const labels = res.progress.map(entry => new Date(entry.date).toLocaleDateString());
        const moodData = res.progress.map(entry => entry.mood === "happy" ? 10 : entry.mood === "neutral" ? 5 : 2);
        
        setChartData({
          labels,
          datasets: [{
            label: "Mood Progress",
            data: moodData,
            borderColor: "#4A90E2",
            backgroundColor: "rgba(74, 144, 226, 0.2)",
            fill: true
          }]
        });
      }
    };
    loadProgressData();
  }, [userId]);

  return (
    <Container sx={{ py: 4, textAlign: "center" }}>
      <Typography variant="h4" sx={{ mb: 2 }}>Your Mental Health Progress</Typography>
      {chartData.labels ? <Line data={chartData} /> : <Typography>Loading...</Typography>}
    </Container>
  );
};
ProgressChart.propTypes = {
  userId: PropTypes.string.isRequired,
};

export default ProgressChart;
