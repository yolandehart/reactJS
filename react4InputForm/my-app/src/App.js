import React from 'react';  //react is the parent
import Home from '../src/Home/Home'
import About from '../src/Home/About/About'
import Contact from '../src/Home/Contact/Contact'
import Login from '../src/Home/Login/Login'
import Signup from '../src/Home/Signup/Signup'
import TestForm from '../src/Testform/Testform'
import ColorPicker from '../src/ColorPicker/ColorPicker'


import { BrowserRouter, Route, Link } from "react-router-dom";

class App extends React.Component {
  render() {
    return(
      <div>
        <TestForm/>
        <ColorPicker/>

      {/* <BrowserRouter>
        <Route exact path = "/" component = {Home}/>
        <Route path = "/about" component = {About}/>
        <Route path = "/contact" component = {Contact}/>
        <Route path = "/login" component = {Login}/>
        <Route path = "/signup" component = {Signup}/> 
        </BrowserRouter> */}

      </div>
    )
  }
}
export default App;
