import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/home";
import Signup from "./components/signup";

function App() {
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route component={Home} exact path='/' />
          <Route component={Signup} exact path='/signup' />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
