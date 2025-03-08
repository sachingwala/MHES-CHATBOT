import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "/src/pages/LandingPage";
import Chatbot from "/src/pages/chatbot";
import Journal from "/src/pages/journal";
import Therapy from "/src/pages/therapy";
import Progress from "/src/pages/progress";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/pages/chatbot" element={<Chatbot />} />
        <Route path="/journal" element={<Journal />} />

        <Route path="/therapy" element={<Therapy />} />
        <Route path="/progress" element={<Progress />} />
      </Routes>
    </Router>
  );
}

export default App;
