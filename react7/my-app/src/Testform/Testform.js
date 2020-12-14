import React from 'react';

// 
import { HashRouter } from 'react-router-dom';
class Testform extends React.Component {

  state={
    fname:' ',
    lname:' ',
    pass:' ',
    email:' ',
  }

  updateState1=(e)=>{
    e.preventDefault()
    this.setState({fname:e.target.value})
  }
  updateState2=(e)=>{
    e.preventDefault()
    this.setState({lname:e.target.value})
  }
  updateState3=(e)=>{
    e.preventDefault()
    this.setState({pass:e.target.value})
  }
  updateState4=(e)=>{
    e.preventDefault()
    this.setState({email:e.target.value})
  }
  
  // getData
  getData=(e)=>{
    e.preventDefault();
    console.log(this.state)
 }

  render () {
    return(
      <div>
        <h5>Enter First Name {this.state.lname}</h5>
         <input onChange={this.updateState1}/>
         <h5>Enter Last Name {this.state.lname}</h5>
         <input onChange={this.updateState2}/>
         <h5>Enter Password {this.state.pass}</h5>
         <input onChange={this.updateState3}/>
         <h5>Enter Email {this.state.email}</h5>
         <input onChange={this.updateState4}/>
      
         <button onClick={this.getData}>Click</button>
      </div>
    )
  }
}
export default Testform;