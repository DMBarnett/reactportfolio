import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Welcome from "./screens/Welcome";
import Portfolio from "./screens/Portfolio";
import Header from "./components/Header";
import Footer from "./components/Footer";
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
        </Switch>
      </Router>
      <Footer />
      </div>
    );
  }
}

export default App;
