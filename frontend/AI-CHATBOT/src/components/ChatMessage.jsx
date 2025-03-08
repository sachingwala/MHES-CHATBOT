import { Paper, Typography } from "@mui/material";
import { motion } from "framer-motion";
import PropTypes from 'prop-types';

const ChatMessage = ({ sender, text }) => {
  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
      <Paper sx={{ p: 2, my: 1, maxWidth: "75%", bgcolor: sender === "user" ? "#d1e7fd" : "#f3f3f3", alignSelf: sender === "user" ? "flex-end" : "flex-start" }}>
        <Typography variant="body1"><strong>{sender === "user" ? "You" : "Bot"}:</strong> {text}</Typography>
      </Paper>
    </motion.div>
  );
};
ChatMessage.propTypes = {
  sender: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default ChatMessage;
