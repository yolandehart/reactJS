import React from 'react';

// custom components
import Home from '../src//Home/Home'
import About from './Home/Header/About/About'
import Services from './Home/Header/Services/Services'
import Projects from './Home/Header/Projects/Projects'
import Contact from './Home/Header/Contact/Contact'
// extra components
import Drawer from './Home/Header/Drawer/Drawer'
import SignIn from './Home/Header/SignIn/SignIn'
import Dashboard from './Home/Header/Dashboard/Dashboard'


import { BrowserRouter, Route, Link } from "react-router-dom";


function App () {
    return(
        <BrowserRouter>
           <Route exact path="/" component={Home} />
           <Route path="/about" component={About} />
           <Route path="/services" component={Services} />
           <Route path="/projects" component={Projects} />
           <Route path="/contact" component={Contact} />
           <Route path="/menu" component={Drawer} />
           <Route path="/signIn" component={SignIn} />
           <Route path="/dashboard" component={Dashboard} />
        </BrowserRouter>  
    )
  }
export default App;
