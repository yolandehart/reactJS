import React from 'react';
import { HashRouter } from 'react-router-dom';
class Testform extends React.Component {  
  // Testform this is predefined keyword that refers to class

  state={
    name: 'Yolande',
    lname: 'Hart',
    fname: 'Doug',
    mname: 'Carmen',
    hobby: 'Yoga',
  }

  updateState1=(e)=>{
    e.preventDefault()
    this.setState({name:e.target.value})
  }
  updateState2=(e)=>{
    e.preventDefault()
    this.setState({lname:e.target.value})
  }
  updateState3=(e)=>{
    e.preventDefault()
    this.setState({fname:e.target.value})
  }
  updateState4=(e)=>{
    e.preventDefault()
    this.setState({mname:e.target.value})
  }
  updateState5=(e)=>{
    e.preventDefault()
    this.setState({hobby:e.target.value})
  }

  getData=(e)=>{
     e.preventDefault();
     console.log(this.state)
  }

  render() {
    return(
      <div>
         < BoxContainer /> 
         <div className="App"> 
         <button onClick={this.getData}>GetData</button>
         </div>

         <h2>My Name is {this.state.name}</h2>
         <input onChange={this.updateState1}/>
         <h2>My Last Name is {this.state.lname}</h2>
         <input onChange={this.updateState2}/>
         <h2>My Fathers Name is {this.state.fname}</h2>
         <input onChange={this.updateState3}/>
         <h2>My Mothers Name is {this.state.mname}</h2>
         <input onChange={this.updateState4}/>
         <h2>My Hobby is {this.state.hobby}</h2>
         <input onChange={this.updateState5}/><br></br>
         <button onClick={this.getData}>GetData</button>
         <br></br><br></br><br></br>
  
       </div>
    )
  }
}
export default Testform;





