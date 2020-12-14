import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";

function Header() {
   return(
    <div>

        <nav>
        <div class="nav-wrapper">
          <a href="#" class="brand-logo">Logo</a>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li><Link to="/">Home</Link></li>
            <li> <Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
        </div>
        </nav>
      </div>
    )
  }
export default Header;

