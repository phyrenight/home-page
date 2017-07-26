import React, { Component } from 'react';
import Footer from './Footer.js';
import Header from './Header.js';

class Home extends Component{
  render() {
    return(
      <div>
        <Header />
        <main>
          <section className="mainSection">
            <h2> Welcome to the home page</h2>
          </section>
        </main>
        <Footer/>
      </div>
      )
  }
}


export default Home