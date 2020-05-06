import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation,
} from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";

//Share
import TopNav from "./Components/Shared/Nav/TopNav";

//Page
import Home from "./Pages/Home/Home";

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}
function PageNotFound() {
  return (
    <div>
      <h2>Page Not Found 404 :((</h2>
    </div>
  );
}
function App() {
  return (
    <Router>
      <div className="App">
        <TopNav />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route component={PageNotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
