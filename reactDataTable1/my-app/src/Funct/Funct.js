import React,{useState} from 'react';
function MyFunct() {

  // const [state,setState] = useState({})
  // // add data to browser
  // const [array,setArray]=useState([])
  // const upDateState=(e)=>{
  //   state[e.target.id]=e.target.value
  //    setState({...state})
  // }
  
  // const getData=(e)=> {
  //   e.preventDefault()
  //   // local storage in application
  //    localStorage.setItem("MyData",JSON.stringify(state))
  //    // local storage in console
  //    const mydata=localStorage.getItem("MyData")
  //    console.log(mydata)
  // }

  // multiple data
  const about_me = [
    {Name:"Pete", Password:"P123", Email:"pete@gmail.com", Mobile:"02345678"},
    {Name:"Pete", Password:"P123", Email:"pete@gmail.com", Mobile:"02345678"},
    {Name:"Pete", Password:"P123", Email:"pete@gmail.com", Mobile:"02345678"},
    {Name:"Pete", Password:"P123", Email:"pete@gmail.com", Mobile:"02345678"},
  ]

  return (
    <div>
      {
        about_me.map((data,i)=>{
        return <div id={i}>
        <table class = "table" >

      <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First Name</th>
          <th scope="col">Password</th>
          <th scope="col">Email</th>
          <th scope="col">Mobile</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">(i)</th>
          <td>{data.Name}</td>
          <td>{data.Password}</td>
          <td>{data.Email}</td>
          <td>{data.Mobile}</td>
        </tr>
      </tbody>
      </table>
      </div>
        })
      }
  

      {/* {
        // add data to browser
        about_me.map((data,i)=>{
        return     <div id={i}>
        <h4>Name:{data.name}, Password:{data.Password}, Email:{data.Email}, Mobile:{data.Mobile}</h4>
        </div>
          })
        } */}

        
        {/* <label>User Name</label> <input id='uname' onChange={upDateState} /><br/><br/>
        <label>Password</label> <input id='pass' onChange={upDateState} /><br/><br/>
        <label>Email</label> <input id='email' onChange={upDateState} /><br/><br/>
        <label>Mobile</label> <input id='mobile' onChange={upDateState} /><br/><br/>

        <h4>Select City</h4>
        <select onChange={upDateState} >
        <option value="selet city"> -- Select Option --</option>
        <option value="perth">Perth</option>
        <option value="melbourne">Melbourne</option>
        <option value="sydney">Sydney</option>
        </select><br/><br/>

        
        // add data to browser
        <h3>My Data to Browser</h3> 
        Name: {state.uname}<br/><br/>
        Password: {state.pass}<br/><br/>
        Email: {state.email}<br/><br/>
        Mobile: {state.mobile}<br/><br/>

      <button onClick={getData}>Submit</button><br/><br/> */}
      </div>

   )
 }
export default MyFunct;
