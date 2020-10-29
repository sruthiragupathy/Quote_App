import React from 'react';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";

import Login from "./Components/Login/Login";
import UserProvider from "./Providers/UserProvider";
import Signup from "./Components/Signup/Signup"


function App() {
  

  return (
   
    <Router>
        <Switch>
          <Route path="/" exact component={Login}></Route>
          {/* <Route path="/home" component={withAuthentication(Home)} /> */}
          <Route path="/signup" exact component={Signup}></Route>

        </Switch>
    </Router>
    
      
    
  );
}

export default App;
