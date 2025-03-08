import { Container, Typography, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";
// import ButtonID from "./ButtonID";

const AboutSection = () => {
  return (
    <>
    
    <Container maxWidth="lg" sx={{ py: 5 }}>
      <Typography variant="h4" sx={{ textAlign: "center", fontWeight: "bold", mb: 3 }}>
        About MindCare AI
        {/* <ButtonID /> */}
      </Typography>

      <Grid container spacing={3}>
        {[
          { title: "Instant Mental Health Support", desc: "AI-powered chatbot for emotional support anytime, anywhere." },
          { title: "Personalized Self-Help Guidance", desc: "Track moods, get therapy suggestions, and improve mental well-being." },
          { title: "Professional Therapy Recommendations", desc: "Connect with licensed therapists for deeper mental health insights." }
        ].map((item, index) => (
          <Grid item xs={12} md={4} key={index}>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Paper sx={{ p: 3, textAlign: "center", background: "#f9f9f9", borderRadius: "8px" }}>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>{item.title}</Typography>
                <Typography variant="body1" sx={{ mt: 1, color: "#555" }}>{item.desc}</Typography>
              </Paper>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
    </>
  );
};

export default AboutSection;
