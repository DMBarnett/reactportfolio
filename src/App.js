import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Welcome from "./screens/Welcome";
import Portfolio from "./screens/Portfolio";
import WorkHistory from "./screens/WorkHistory";
import Contact from "./screens/Contact";
import Header from "./components/Header"
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
      <Header />
      <Router>
        
        <Switch>
          <Route exact path="/" component={Welcome}></Route>
          <Route exact path="/Portfolio" component={Portfolio}></Route>
          <Route exact path="/Resume" component={WorkHistory}></Route>
          <Route exact path="/Contact" component={Contact}></Route>
        </Switch>
      </Router>
      </div>
    );
  }
}

export default App;
