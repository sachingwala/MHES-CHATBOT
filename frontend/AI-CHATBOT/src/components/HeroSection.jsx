import { Container, Typography, Grid } from "@mui/material";
import { motion } from "framer-motion";
import BrainSVG from "../assets/brain-svgrepo-com.svg";
import ButtonID from "./ButtonID";


const  HeroSection = () => {
  return (
    <>
    <Container maxWidth="lg" sx={{ py: 6, textAlign: "center" }}>
      <Grid container spacing={4} alignItems="center">
        {/* Left Side - Welcome Text */}
        <Grid item xs={12} md={6}>
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <Typography variant="h3" sx={{ fontWeight: "bold", color: "#333" }}>
              Welcome to MindCare AI
            </Typography>
            <Typography variant="h6" sx={{ mt: 2, color: "#666" }}>
              Your AI-powered assistant for mental health relief and emotional well-being.
            </Typography>
            <ButtonID />
          </motion.div>
        </Grid>

        
        <Grid item xs={12} md={6}>
          <motion.img
            src={BrainSVG}
            alt="Mental Health AI"
            style={{ width: "100%", maxWidth: "400px" }}
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          />
        </Grid>
      </Grid>
    </Container>
    
    </>
  );
};

export default HeroSection;
