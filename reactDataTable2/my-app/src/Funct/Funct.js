import React,{useState} from 'react';

function MyTable() {
  // multiple data
  const myObject = [
    {Name:"Pete", Password:"P123", Email:"pete@gmail.com", Mobile:"02345678"},
    {Name:"Pete", Password:"P123", Email:"pete@gmail.com", Mobile:"02345678"},
    {Name:"Pete", Password:"P123", Email:"pete@gmail.com", Mobile:"02345678"},
    {Name:"Pete", Password:"P123", Email:"pete@gmail.com", Mobile:"02345678"},
  ]

  return (
    <div>
        <table class="table">
          <thead>
                <tr>
                  <th scope="col"></th>
                  <th scope="col">First Name</th>
                  <th scope="col">Password</th>
                  <th scope="col">Email</th>
                  <th scope="col">Mobile</th>
                </tr>
              </thead>

              {
             myObject.map((data, i) => {
                return <tbody key={i}>
                <tr>
                  <th scope="row">(i)</th>
                  <td>{data.Name}</td>
                  <td>{data.Password}</td>
                  <td>{data.Email}</td>
                  <td>{data.Mobile}</td>
                </tr>
              </tbody>
            })
          }
          </table>
     </div>
   )
   }
export default MyTable;
