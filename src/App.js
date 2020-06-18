import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import Signup from "./pages/signup";
import Mailspace from "./pages/mailspace";
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
          <ProtectedRoute component={Mailspace} exact path='/mailspace' />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
