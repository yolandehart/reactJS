import React,{useState} from 'react'

function BestFunct() {

  const[state,setState] = useState({})
  const upDateState=(e)=>{
  state[e.target.id]=e.target.value
  setState({...state})
}

const getData=(e)=> {
  e.preventDefault();
  console.log(state)
}
return (
     <div>
       <label> User Name</label> <input id='uname' onChange={upDateState} /><br/>
       <label> Last Name</label> <input id='lname' onChange={upDateState} /><br/>
       <label> Father Name</label> <input id='fname' onChange={upDateState} /><br/>
       <label> Mother Name</label> <input id='mname' onChange={upDateState} /><br/><br/>
       <button onClick={getData}>Get Data</button>
    </div>
)
}

export default BestFunct;