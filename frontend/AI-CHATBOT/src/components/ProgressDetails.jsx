import { Container, Typography, Paper } from "@mui/material";

const ProgressDetails = () => {
  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" sx={{ mb: 2, textAlign: "center" }}>Progress Insights</Typography>
      <Paper sx={{ p: 3, background: "#f5f5f5" }}>
        <Typography variant="body1">Your mood trends have been improving over the past week.</Typography>
        <Typography variant="body1">Continue journaling and meditation to maintain positive growth.</Typography>
        <Typography variant="body1">If you feel stressed, consider booking a therapy session.</Typography>
      </Paper>
    </Container>
  );
};

export default ProgressDetails;
