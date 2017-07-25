import React, { Component } from 'react';
import AboutUs from './AboutUs.js';
import { Link } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <div id="containsMain">
        <Header />
      <main>
        <section className="mainSection">
          <h2> Welcome to the home page</h2>
        </section>
        <AboutUs/>
      </main>
    <Footer/>
    </div>
    );
  }
}

class Header extends Component {
  render(){
    return(
      <header className="App">
        <div className="App-header">
          <h1>Heading</h1>
        </div>
        <nav role="navigation">
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/content">Content</Link></li>
            <li><Link to="/AboutUs">About Us</Link></li>
          </ul>
        </nav>
      </header>
      )
  }
}


class Footer extends Component{
  render(){
    return(
      <footer>
        <ul role="navigation">
          <li><a href="">Legal</a></li>
          <li><a href="">About Us</a></li>
        </ul>
      </footer>
      )
  }
}

export default App;
