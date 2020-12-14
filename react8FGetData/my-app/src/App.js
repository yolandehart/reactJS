import React from 'react';
import Home from '../src/Home/Home'
import About from '../src/Home/About/About'
import Contact from '../src/Home/Contact/Contact'
import Login from '../src/Home/Login/Login'
import FunctName from '../src/FunctionCmp/FunctionCmp'
import BestFunct from '../src/BestFunct/BestFunct'
import { BrowserRouter, Route, Link } from "react-router-dom";

function App()
{
  return(
             <div>
               <BestFunct/>
              {/* <FunctName/> */}
             </div>
    
            // <BrowserRouter>
            // <Route exact path="/" component={Home} />
            // <Route path="/about" component={About} />
            // <Route path="/contact" component={Contact} />
            // <Route path="/login" component={Login} />
            // </BrowserRouter>
  )
}
export default App;
