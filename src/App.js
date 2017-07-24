import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
      <header className="App">
        <div className="App-header">
          <h1>Heading</h1>
        </div>
        <nav role="navigation">
          <ul>
            <li><a href="">Home</a></li>
            <li><a href="">Content</a></li>
            <li><a href="">About Us</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section className="mainSection">
          <h2> Welcome to the home page</h2>
        </section>
      </main>
      <footer>
        <ul role="navigation">
          <li><a href="">Legal</a></li>
          <li><a href="">About US</a></li>
        </ul>
      </footer>
    </div>
    );
  }
}

export default App;
