import { Drawer, List, ListItem, ListItemText, Typography } from "@mui/material";
import PropTypes from 'prop-types';

const ChatSidebar = ({  onSelect }) => {
  return (
    <Drawer variant="permanent" sx={{ width: 250, flexShrink: 0, bgcolor: "#202123", color: "white" }}>
      <Typography variant="h6" sx={{ textAlign: "center", py: 2 }}>
        Chat History
      </Typography>
      <List>
        {history.map((chat, index) => (
          <ListItem button key={index} onClick={() => onSelect(chat)}>
            <ListItemText primary={chat.message.slice(0, 20) + "..."} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};
ChatSidebar.propTypes = {
  history: PropTypes.arrayOf(
    PropTypes.shape({
      message: PropTypes.string.isRequired,
    })
  ).isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default ChatSidebar;