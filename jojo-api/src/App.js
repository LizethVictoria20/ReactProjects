import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DataAPI from "./components/DataAPI";
import Detail from "./components/Details/Detail";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<DataAPI/>} />
        <Route path="/:characterID" element={<Detail/>} />
      </Routes>
    </Router>
  );
}

export default App;
