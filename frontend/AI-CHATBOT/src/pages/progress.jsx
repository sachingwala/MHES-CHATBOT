import ProgressChart from "../components/ProgressChart";
import ProgressDetails from "../components/ProgressDetails";
import { Container, Typography } from "@mui/material";
// import ButtonID from "../components/ButtonIfD";
import Navbar1 from "../components/Navbar1";
import Footer from "../components/Footer";

const Progress = () => {
  const userId = "12345"; // Replace with actual user ID

  return (
    <>
    <Navbar1 />
    <Container maxWidth="lg">
      <Typography variant="h2" sx= {{ textAlign: "center", py: 4 }}>Your Mental Health Progress</Typography>
      <ProgressChart userId={userId} />
      <ProgressDetails />
    </Container>
    <Footer />
    </>
  );
};

export default Progress;
