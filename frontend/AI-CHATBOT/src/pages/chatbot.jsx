import { useState } from "react";
import { fetchChatResponse } from "/src/services/chatService.jsx";
import ChatSidebar from "../components/ChatSidebar";
import ChatMessage from "../components/ChatMessage";
import { Container, TextField, Button, Box, Typography, Paper } from "@mui/material";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import Navbar1 from "../components/Navbar1";
import "../styles/chat.css";

const Chatbot = () => {
  const userId = "12345"; // Replace with actual user ID
  const [chat, setChat] = useState([]);
  const [message, setMessage] = useState("");
  
  const suggestedResponses = ["I'm feeling anxious", "How can I sleep better?", "What are some stress relief techniques?"];

  const sendMessage = async () => {
    if (!message) return;
    const userMessage = { sender: "user", text: message };
    setChat([...chat, userMessage]);

    const res = await fetchChatResponse(message);
    const botMessage = { sender: "bot", text: res.response };
    setChat([...chat, userMessage, botMessage]);

    setMessage("");
  };

  return (
    <>
    <Navbar1 />
    <Box sx={{ display: "flex", height: "100vh" }}>
      {/* Sidebar */}
      <ChatSidebar userId={userId} onSelectChat={(chat) => setChat([...chat])} />

      {/* Main Chat Area */}
      <Container maxWidth="md" sx={{ flexGrow: 1, display: "flex", flexDirection: "column", justifyContent: "space-between", py: 2 }}>
        <Typography variant="h4" sx={{ textAlign: "center", mb: 2 }}>Mental Health Chatbot</Typography>

        {/* Chat Messages */}
        <Paper elevation={3} sx={{ p: 2, height: "60vh", overflowY: "auto", display: "flex", flexDirection: "column" }}>
          {chat.map((msg, index) => <ChatMessage key={index} sender={msg.sender} text={msg.text} />)}
        </Paper>

        {/* Suggested Responses */}
        <Box sx={{ mt: 2 }}>
          <Typography variant="subtitle1">Suggested Responses:</Typography>
          <Box sx={{ display: "flex", gap: 1 }}>
            {suggestedResponses.map((text, index) => (
              <motion.div whileHover={{ scale: 1.1 }} key={index}>
                <Button variant="outlined" size="small" onClick={() => setMessage(text)}>
                  {text}
                </Button>
              </motion.div>
            ))}
          </Box>
        </Box>

        {/* Input Field & Send Button */}
        <Box sx={{ mt: 2, display: "flex", gap: 1 }}>
          <TextField label="Type a message..." fullWidth value={message} onChange={(e) => setMessage(e.target.value)} />
          <Button variant="contained" color="primary" onClick={sendMessage}>Send</Button>
        </Box>
      </Container>
    </Box>
    <Footer />
    </>
  );
};

export default Chatbot;
