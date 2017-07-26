import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render(){
    return(
      <header className="App">
        <div className="App-header">
          <h1>Heading</h1>
        </div>
        <nav role="navigation">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/content">Content</Link></li>
            <li><Link to="/AboutUs">About Us</Link></li>
          </ul>
        </nav>
      </header>
      )
  }
}

export default Header