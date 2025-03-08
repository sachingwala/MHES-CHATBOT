import { Container, TextField, Button, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

const ContactForm = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    alert("Thank you for reaching out! We'll get back to you soon.");
    reset();
  };

  return (
    <Container maxWidth="sm" sx={{ py: 5, textAlign: "center" }}>
      <Typography variant="h4" sx={{ mb: 2 }}>Contact Us</Typography>

      <motion.form
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <TextField label="Name" fullWidth sx={{ mb: 2 }} {...register("name", { required: true })} />
        <TextField label="Email" fullWidth sx={{ mb: 2 }} {...register("email", { required: true })} />
        <TextField label="Message" fullWidth multiline rows={4} sx={{ mb: 2 }} {...register("message", { required: true })} />
        <Button variant="contained" color="primary" type="submit">Submit</Button>
      </motion.form>
    </Container>
  );
};

export default ContactForm;
