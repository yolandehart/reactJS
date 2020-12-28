import React from 'react';
// custom components
import Home from '../src//Home/Home'
import White from './Home/Header/White/White'
import TechOut from './Home/Header/TechOut/TechOut'
import Vintage from './Home/Header/Vintage/Vintage'
import ColorMagic from './Home/Header/ColorMagic/ColorMagic'
// extra components
import Drawer from './Home/Header/Drawer/Drawer'
import SignIn from './Home/Header/SignIn/SignIn'
import Dashboard from './Home/Header/Dashboard/Dashboard'
import Footer from './Home/Footer/Footer'

import { BrowserRouter, Route, Link } from "react-router-dom";


function App () {
    return(
        <BrowserRouter>
           <Route exact path="/" component={Home} />
           <Route path="/white" component={White} />
           <Route path="/techOut" component={TechOut} />
           <Route path="/vintage" component={Vintage} />
           <Route path="/colorMagic" component={ColorMagic} />
           <Route path="/menu" component={Drawer} />
           <Route path="/signIn" component={SignIn} />
           <Route path="/dashboard" component={Dashboard} />
           <Route path="/footer" component={Footer} />
          
        </BrowserRouter>  
    )
  }
export default App;
