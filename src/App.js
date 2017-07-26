import React, { Component } from 'react';
import AboutUs from './AboutUs.js';
import Legal from './legal.js';
import Home from './Home.js';
import Content from './content.js';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <div id="containsMain">
        <Route exact path="/" component={ Home } />
        <Route path="/AboutUs" component={ AboutUs } />
        <Route path="/content" component={ Content } />
        <Route path="/legal" component={ Legal } />
      </div>
    );
  }
}




export default App;
