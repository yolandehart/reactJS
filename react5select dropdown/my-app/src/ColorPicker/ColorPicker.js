import React from 'react';
import { HashRouter } from 'react-router-dom';
class ColorPicker extends React.Component {

  state={
    beforeChange:"red",
  }

  getData=(e)=>{
    e.preventDefault();
    this.setState({beforeChange:"black"})
 }
  changeColor=(e)=>{
    e.preventDefault();
    this.setState({beforeChange:e.target.value})
  }
  

  render() {
    return(
      <div>
        {/* samll box input */}
        <h1>Colour Picker</h1>
        <div style={{width:"200px", height:"300px", backgroundColor:this.state.beforeChange}}>
        </div><br></br>

        <h2>Choose your Color {this.state.name}</h2>
        <input onChange={this.changeColor}/><br></br><br></br> 

        {/* large box selector bnt*/}
        <div style={{width:"1000px", height:"500px", backgroundColor:this.state.beforeChange}}>
        </div><br></br>

        <select onChange={this.changeColor}>
        <option value="">-- Select Color --</option>
        <option value="Pink">Pink</option>
        <option value="Orange">Orange</option>
        <option value="Turquiose">Turquiose</option>
        <option value="Green">Green</option>
        </select>


        <br></br><br></br>  <br></br><br></br>  <br></br><br></br> 
        {/* <button onClick={this.getData}>Click</button> */}
       </div>
    )
  }
}
export default ColorPicker;
