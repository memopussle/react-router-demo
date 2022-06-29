import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./App.css";

const Home = () => {
  return <h2>Home</h2>;
};
const About = () => {
  return <h2>About</h2>;
};
const Contact = () => {
  return <h2>Contact</h2>;
};
const NotFound = () => {
  return <h2>404 Not Found</h2>;
};

// Router: BrowserRouter & HashRouter: use history API to maintain browsing history
// Route: a component for route matching
//link: provided by React Router

function App() {
  return (
    <Router>
      <div className="container">
        <h2 className="text-center">React Router Demo</h2>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about/">About</Link>
            </li>
            <li>
              <a href="/about/">About</a>
            </li>
            <li>
              <Link to="/contact/">Contact</Link>
            </li>
          </ul>
        </nav>
        <Route path="/" exact component={Home} />
        <Route path="/about/" component={About} />
        <Route path="/contact/" component={Contact} />
        <hr />
        <p>Using Switch</p>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about/" component={About} />
          <Route path="/contact/" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
