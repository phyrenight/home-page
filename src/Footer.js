import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Footer extends Component{
  render(){
    return(
      <footer>
        <ul role="navigation">
          <li><Link to="/legal">Legal</Link></li>
          <li><Link to="/AboutUs">About Us</Link></li>
        </ul>
      </footer>
      )
  }
}


export default Footer