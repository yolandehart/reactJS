import React from 'react';
import Home from '../src/Home/Home'
import About from '../src/Home/About/About'
import Contact from '../src/Home/Contact/Contact'
import Login from '../src/Home/Login/Login'
import { BrowserRouter, Route, Link } from "react-router-dom";

class App extends React.Component {
  render () {
    return(
      <div>
        
        <BrowserRouter>
           <Route exact path="/" component={Home} />
           <Route path="/about" component={About} />
           <Route path="/contact" component={Contact} />
           <Route path="/login" component={Login} />
        </BrowserRouter>
      </div>
    )
  }
}
export default App;
