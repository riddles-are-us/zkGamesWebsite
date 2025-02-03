import "./App.css";
import { Main } from "./components/Main";
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
        <Route path="trending/:gameId" element={<Main />} />

        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
