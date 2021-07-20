import "./App.css";

import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";

import AboutPage from "./AboutPage";
import HomePage from "./HomePage";
import logo from "./logo.svg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Router>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/about">
              <AboutPage />
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
