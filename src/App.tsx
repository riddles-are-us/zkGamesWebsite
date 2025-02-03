import "./App.css";
import { Trending } from "./components/pages/trending/Trending";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/trending/" />} />
        <Route
          path="trending/"
          element={<Navigate to="/trending/automata" />}
        />
        <Route path="trending/:gameId" element={<Trending />} />
      </Routes>
    </Router>
  );
}

export default App;
