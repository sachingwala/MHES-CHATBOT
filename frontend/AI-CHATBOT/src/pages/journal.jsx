import { useState, useEffect } from "react";
import { fetchJournalEntries, addJournalEntry } from "../services/journalService";
import JournalEntry from "../components/JournalEntry";
import { Container, TextField, Button, Typography, Box } from "@mui/material";
import Navbar1 from "../components/Navbar1";
import Footer from "../components/Footer";
// import { motion } from "framer-motion";

const Journal = () => {
  const userId = "12345"; // Replace with actual user ID
  const [entries, setEntries] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    const loadEntries = async () => {
      const res = await fetchJournalEntries(userId);
      setEntries(res.entries || []);
    };
    loadEntries();
  }, []);

  const handleSubmit = async () => {
    if (!title || !content) return;
    const newEntry = { title, content, mood: "neutral" };
    const res = await addJournalEntry(userId, newEntry);
    setEntries([...entries, res.entry]);
    setTitle("");
    setContent("");
  };

  return (
    <>
    <Navbar1 />
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h4" sx={{ mb: 2, textAlign: "center" }}>Your Journal</Typography>

      {/* Form to Add New Journal Entry */}
      <Box sx={{ mb: 3 }}>
        <TextField label="Title" fullWidth sx={{ mb: 2 }} value={title} onChange={(e) => setTitle(e.target.value)} />
        <TextField label="Content" fullWidth multiline rows={4} sx={{ mb: 2 }} value={content} onChange={(e) => setContent(e.target.value)} />
        <Button variant="contained" onClick={handleSubmit}>Save Entry</Button>
      </Box>

      {/* Display Past Journal Entries */}
      <Typography variant="h5" sx={{ mb: 2 }}>Past Entries</Typography>
      {entries.map((entry, index) => <JournalEntry key={index} entry={entry} />)}
    </Container>
    <Footer />
    </>
  );
};

export default Journal;
