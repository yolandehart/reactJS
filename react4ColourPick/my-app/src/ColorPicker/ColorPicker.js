import React from 'react';
import { HashRouter } from 'react-router-dom';
class ColorPicker extends React.Component {

  state={
    beforeChange:"red",
  }

  beforeChange=(e)=>{
    e.preventDefault()
    this.setState({beforeChange:e.target.value})
  }

  getData=(e)=>{
    e.preventDefault();
    console.log(this.state)
 }

  render() {
    return(
      <div>
        <h1>ColorPicker</h1>
        <div style={{width:"200px", height:"300px", backgroundColor:this.state.beforeChange}}></div>

        <br></br>
        <button onClick={this.getData}>GetData</button>
      </div>
    )
  }
}
export default ColorPicker;
