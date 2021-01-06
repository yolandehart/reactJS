import React from 'react';
import Home from '../src/Home/Home'
import About from '../src/Home/About/About'
import Services from '../src/Home/Services/Services'
import Projects from '../src/Home/Projects/Projects'
import Contact from '../src/Home/Contact/Contact'

import { BrowserRouter, Route, Link } from "react-router-dom";

function App () {
    return(
      <div>
        
        <BrowserRouter>
           <Route exact path="/" component={Home} />
           <Route path="/about" component={About} />
           <Route path="/services" component={Services} />
           <Route path="/projects" component={Projects} />
           <Route path="/contact" component={Contact} />
        </BrowserRouter>
        
      </div>
    )
  }
export default App;
