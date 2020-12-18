import React,{useState} from 'react';
function MyFunct() {

  const [state,setState] = useState({})
  const upDateState=(e)=>{
    state[e.target.id]=e.target.value
     setState({...state})
  }
  
  const getData=(e)=> {
    e.preventDefault()
    // local storage in application
     localStorage.setItem("MyData",JSON.stringify(state))
     // local storage in console
     const mydata=localStorage.getItem("MyData")
     console.log(mydata)
  }

  return(
    <div>
        <label>User Name</label> <input id='uname' onChange={upDateState} />
        <br/><br/>
        <label>Password</label> <input id='pass' onChange={upDateState} />
        <br/><br/>
        <label>Email</label> <input id='email' onChange={upDateState} />
        <br/><br/>
        <label>Mobile</label> <input id='mobile' onChange={upDateState} />
        <br/><br/>

        <h4>Select City</h4>
        <select onChange={upDateState} >
        <option value="selet city"> -- Select Option --</option>
        <option value="perth">Perth</option>
        <option value="melbourne">Melbourne</option>
        <option value="sydney">Sydney</option>
        </select>
        <br/><br/>

        <h4>Select Gender</h4>
        <label for="Male">Male</label>
        <input type="radio" name="gender" value="Male" />
        <label for="Female">Female</label>
        <input type="radio" name="gender" value="Female" />
        <button type="submit">Submit</button>
        <br/><br/><br/>

        <button onClick={getData}>Submit</button>
    </div>

  )
}
export default MyFunct;
