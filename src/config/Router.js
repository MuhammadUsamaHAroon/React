import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import LogIn from '../Screen/LogIn/index'
import Quiz from "../Screen/Quiz";
import SignUp from "../Screen/SignUp/index";

export default function App() {
  return (
    <Router>
      <div>
        

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/">
            <LogIn/>
          </Route>
          <Route path="/signup">
            <SignUp/>
            
          </Route>
          <Route path="/Quiz">
          <Quiz/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}