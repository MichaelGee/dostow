import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/home";
import Signup from "./components/signup";
import Mailspace from "./components/mailspace";
import ProtectedRoute from "./protectedRoute";
import firebase from "./components/fireConfig";

function App() {
  const [initializedFirebase, setInitializeFirebase] = React.useState(false);
  React.useEffect(() => {
    firebase.isInitialized().then((val) => {
      setInitializeFirebase(val);
    });
  });
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route component={Home} exact path='/' />
          <Route component={Signup} exact path='/signup' />
          <Route component={Mailspace} exact path='/mailspace' />
          <ProtectedRoute component={Mailspace} exact path='/mailspace' />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
