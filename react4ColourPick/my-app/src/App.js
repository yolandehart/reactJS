import React from 'react';  //react is the parent
import ColorPicker from '../src/ColorPicker/ColorPicker'

import { BrowserRouter, Route, Link } from "react-router-dom";

class App extends React.Component {
  render() {
    return(
      <div>
      <ColorPicker/>   
      </div>
    )
  }
}
export default App;
