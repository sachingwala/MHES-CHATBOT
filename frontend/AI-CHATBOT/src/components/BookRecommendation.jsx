import { Container, Typography, List, ListItem, ListItemText } from "@mui/material";

const books = [
  { title: "The Power of Now", author: "Eckhart Tolle" },
  { title: "Atomic Habits", author: "James Clear" },
  { title: "The 5 AM Club", author: "Robin Sharma" },
  { title: "Mindfulness in Plain English", author: "Bhante Henepola Gunaratana" }
];

const BookRecommendations = () => {
  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" sx={{ mb: 2 }}>AI-Based Book Recommendations</Typography>
      <List>
        {books.map((book, index) => (
          <ListItem key={index}>
            <ListItemText primary={book.title} secondary={`by ${book.author}`} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default BookRecommendations;
