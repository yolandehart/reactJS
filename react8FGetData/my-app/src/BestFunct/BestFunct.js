import React,{useState} from 'react'

function BestFunct() {

  const[state,setState] = useState({})
  const upDateState=()=>{
    state[e.target.id]=e.target.value
    setState({...state})
  }

  const getData=(e)=> {
    e.preventDefualt();
    console.log(state)
  }
  
  return (
    <div>
      <label>User Name</label> <input id='uname' onChange={upDateState} />
      <label>Last Name</label> <input id='lname' onChange={upDateState} />
      <label>Fathers Name</label> <input id='fname' onChange={upDateState} />
      <label>Mothers Name</label> <input id='mname' onChange={upDateState} />
      <button onClick={getData}>Get Data</button>
    </div>
  )
}

export default BestFunct;



