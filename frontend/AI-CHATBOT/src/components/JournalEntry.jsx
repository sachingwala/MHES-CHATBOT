import { Paper, Typography } from "@mui/material";
import { motion } from "framer-motion";
import PropTypes from 'prop-types';

const JournalEntry = ({ entry }) => {
  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
      <Paper sx={{ p: 2, my: 1, bgcolor: "#f3f3f3" }}>
        <Typography variant="h6">{entry.title}</Typography>
        <Typography variant="body1">{entry.content}</Typography>
        <Typography variant="caption" sx={{ color: "#666" }}>Mood: {entry.mood} | {new Date(entry.createdAt).toLocaleDateString()}</Typography>
      </Paper>
    </motion.div>
  );
};
JournalEntry.propTypes = {
  entry: PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    mood: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
  }).isRequired,
};

export default JournalEntry;

