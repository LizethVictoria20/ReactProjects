import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import DataAPI from "./components/DataAPI";
import Detail from "./components/Details/Detail";
import Logo from "./assets/JojosLogo.png";
import "./App.css";

function App() {
  return (
    <>
    <Router>
      <Link to="/">
        <div className="main-logo">
          <img src={Logo} alt="Logo Jojo's" />
        </div>
      </Link>
      <Routes>
        <Route exact path="/" element={<DataAPI />} />
        <Route path="/:characterID" element={<Detail />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
