import { useState } from "react";
import { bookTherapySession } from "../services/therapyService";
import { Container, TextField, Button, Typography } from "@mui/material";

const TherapyBooking = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = async () => {
    if (!name || !email || !date) return;
    await bookTherapySession({ name, email, date });
    alert("Therapy session booked successfully!");
    setName("");
    setEmail("");
    setDate("");
  };

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" sx={{ mb: 2 }}>Book a One-on-One Therapy Session</Typography>
      <TextField label="Name" fullWidth sx={{ mb: 2 }} value={name} onChange={(e) => setName(e.target.value)} />
      <TextField label="Email" fullWidth sx={{ mb: 2 }} value={email} onChange={(e) => setEmail(e.target.value)} />
      <TextField label="Preferred Date" type="date" fullWidth sx={{ mb: 2 }} value={date} onChange={(e) => setDate(e.target.value)} />
      <Button variant="contained" color="primary" onClick={handleSubmit}>Book Session</Button>
    </Container>
  );
};

export default TherapyBooking;
