import React, { Component } from 'react';
import Header from './Header.js';
import Footer from './Footer.js';

class Content extends Component{
  render(){
	return(
	   <div>
	     <Header />
	     <h2>Content</h2>
	     <Footer />
	   </div>
	)
  }
}

export default Content