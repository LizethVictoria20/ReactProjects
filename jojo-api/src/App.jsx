import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Card from "./components/Card";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Card />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
