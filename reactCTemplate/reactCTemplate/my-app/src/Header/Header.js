import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";

class Header extends React.Component {
  render () {
    return(
      <div>
      
      <nav>
      <div class="nav-wrapper">
        <a href="#" class="brand-logo">Logo</a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li><a href="home.html">Home</a></li>
          <Link to="/">Home</Link>
          <li><a href="about.html">About</a></li>
          <Link to="/">About</Link>
          <li><a href="contact.html">Contact</a></li>
          <Link to="/">Contact</Link>
          <li><a href="login.html">Login</a></li>
          <Link to="/">Login</Link>
        </ul>
      </div>
      </nav>


      </div>
    )
  }
}
export default Header;