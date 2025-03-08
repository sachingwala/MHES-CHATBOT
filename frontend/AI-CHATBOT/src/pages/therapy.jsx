
import { Container, Typography } from "@mui/material";
import Navbar1 from "../components/Navbar1";
import Footer from "../components/Footer";
import VideoCarousel from "../components/VideoCarousel";
import MeditationSchedule from "../components/MeditationSchedule";
import BookRecommendations from "../components/BookRecommendation";
import TherapyBooking from "../components/TherapyBooking";

const Therapy = () => {
  return (
    <>
    <Navbar1 />
    <Container maxWidth="lg">
      <Typography variant="h2" sx={{ textAlign: "center", py: 4 }}>Therapy & Mental Wellness</Typography>
      <VideoCarousel />
      <MeditationSchedule />
      <BookRecommendations />
      <TherapyBooking />
      <therapyService />
    </Container>
    
    <Footer />
    </>
  );
};

export default Therapy;
