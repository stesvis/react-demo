import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import logo from "./logo.svg";
import { AboutDetailsPage } from "./pages/AboutDetailsPage";
import { AboutPage } from "./pages/AboutPage";
import { HomePage } from "./pages/HomePage";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Routes>
            <Route path="/about/details" element={<AboutDetailsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/" element={<HomePage />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
