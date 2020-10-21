import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from '../pages/Home';
import About from '../pages/About';
import User from '../pages/User';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Menu from '../components/Menu';

export default function App() {
  return (
    <Router>
      <Header />
      <Menu />
      <div className="container-content">
        <Switch>
          <Route path="/about"><About /></Route>
          <Route path="/users"><User /></Route>
          <Route path="/"><Home /></Route>
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}
