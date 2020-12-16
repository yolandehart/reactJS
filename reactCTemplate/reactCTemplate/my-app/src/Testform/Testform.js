import React from 'react';
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
  
  
  getData=(e)=>{
    e.preventDefault();
    console.log(this.state)
 }


  render () {
    return(
      <div>

         <h2>First Name {this.state.fname}</h2>
         <input onChange={this.updateState1}/>
         <h2>My Last Name is {this.state.lname}</h2>
         <input onChange={this.updateState2}/>
         <h2>Password {this.state.pass}</h2>
         <input onChange={this.updateState3}/>
         <h2>Email {this.state.email}</h2>
         <input onChange={this.updateState4}/>
      
         <button onClick={this.getData}>Click</button>

      </div>
    )
  }
}
export default Testform;