//import { useState, useEffect } from "react";
import { Container, Typography, List, ListItem, ListItemText } from "@mui/material";

const meditationSessions = [
  { time: "7:00 AM", title: "Morning Relaxation", instructor: "John Doe" },
  { time: "12:00 PM", title: "Mid-Day Mindfulness", instructor: "Dr. Smith" },
  { time: "6:00 PM", title: "Evening Stress Relief", instructor: "Emily Davis" }
];

const MeditationSchedule = () => {
  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" sx={{ mb: 2 }}>Daily Meditation Sessions</Typography>
      <List>
        {meditationSessions.map((session, index) => (
          <ListItem key={index}>
            <ListItemText primary={`${session.time} - ${session.title}`} secondary={session.instructor} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default MeditationSchedule;
