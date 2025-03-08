import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <AppBar position="sticky" sx={{ background: "#4A90E2", padding: "10px 0" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Left Side - Logo */}
        <Typography variant="h6" component="div" sx={{ fontWeight: "bold" }}>
          MindCare AI
        </Typography>

        {/* Right Side - Navigation Links */}
        <Box>
          <Button component={NavLink} to="/" sx={navLinkStyle}>Home</Button>
          <Button component={NavLink} to="/chatbot" sx={navLinkStyle}>Chatbox</Button>
          <Button component={NavLink} to="/journal" sx={navLinkStyle}>Journal</Button>
          <Button component={NavLink} to="/therapy" sx={navLinkStyle}>Therapy</Button>
          <Button component={NavLink} to="/progress" sx={navLinkStyle}>Progress</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

// Custom Styles for Active Link Highlight
const navLinkStyle = {
  color: "white",
  textDecoration: "none",
  margin: "0 10px",
  fontWeight: "bold",
  "&.active": { // React Router applies `active` class to the current page
    color: "#FFD700", // Change color for the active page (Gold)
    borderBottom: "2px solid #FFD700",
  }
};

export default Navbar;
