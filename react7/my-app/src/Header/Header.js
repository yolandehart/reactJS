import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";

class Header extends React.Component {
  render () {
    return(
      <div>
       {/* nav bar materilize */}

      <nav>
    <div class="nav-wrapper">
      <a href="#" class="brand-logo">Logo</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><Link to="/">Home</Link></li>
        <li> <Link to="/">About</Link></li>
        <li><Link to="/">Contact</Link></li>
        <li><Link to="/">Login</Link></li>
      </ul>
    </div>
  </nav>


      </div>
    )
  }
}
export default Header;