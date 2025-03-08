import {  Button } from "@mui/material";
// import Chatbot from "../pages/chatbot";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    
      
        <Button variant="contained" color="secondary" component={Link} to="pages/chatbot">
        AI Chatbot 
        </Button>
      
 
  );
};

export default Navbar;
