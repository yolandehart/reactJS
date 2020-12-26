import React from 'react';
import '../src/App.css'

import { BrowserRouter, Route, Link } from "react-router-dom";

// custom components
import Home from '../src/Home/Home'
import About from '../src/Home/About/About'
import Services from '../src/Home/Services/Services'
import Projects from '../src/Home/Projects/Projects'
import Contact from '../src/Home/Contact/Contact'

// drawer components
import Drawer from '../src/Header/Drawer/Drawer'

// material-UI color change 



function App () {
    return(
      <>
       <Drawer />
      <div>  
        <BrowserRouter>
           <Route exact path="/" component={Home} />
           <Route path="/about" component={About} />
           <Route path="/services" component={Services} />
           <Route path="/projects" component={Projects} />
           <Route path="/contact" component={Contact} />
        </BrowserRouter>  
      </div>
      </>
    )
  }
export default App;

//https://www.youtube.com/watch?v=cgStK4RxRGE
