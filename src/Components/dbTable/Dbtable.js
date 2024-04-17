import React, { useEffect, useState } from 'react'
import tab from "./dbTable.module.css"
import axios from 'axios';


function Dbtable() {

const [visitors, setVisitors]=useState([])
const [loading, setLoading]=useState(false)

const fetchData = async ()=>{
setLoading(true);
try {
  const response = await axios.get("http://localhost:8000/visitors")
  setLoading(false)
  setVisitors(response?.data, "server")
} catch (error) {
  console.log(error, "error occured")
  setLoading(false)
  
};
}

useEffect(()=>{
  fetchData();
},[]);
console.log(visitors, "me")


  return (
    <div className='p-[60px] flex items-center flex-col'>
       <h2 className='pb-[50px] text-[24px]'>Visitor Appointment Information</h2>
       {loading?(
        <p>loading...</p>
       ):(
        <table>
            <thead>
              <tr>
              <th>S/N</th>
              <th>Visitors Name</th>
                <th>Phone</th>
                <th>Arrival Time</th>
                <th>Exit Time</th>
                <th>Email</th>
                <th>Host</th>
                <th>Purpose</th>
              </tr>
            </thead>

            <tbody>
              {visitors?.map((i,index)=>{
                return(
                <tr>
                <td>{index+1}</td>
                <td>{i.name}</td>
                <td>{i.phone}</td>
                <td>{i.arrival}</td>
                <td>{i.exit}</td>
                {/* <td>{i.email}</td> */}
                <td>{i.host}</td>
                <td>{i.purpose}</td> 
              </tr>
              )
              })}
              
            </tbody>
        </table>

)}
        {/* http://localhost:8000/visitors */}
    </div>
  )
}
export default Dbtable;

{/* <tbody>
  {visitors?.map((visitor, index) => (
    <tr key={visitor.id}>
      <td>{index + 1}</td>
      <td>{visitor.name}</td>
      <td>{visitor.phone}</td>
      <td>{visitor.arrival}</td>
      <td>{visitor.exit}</td>
      {/* <td>{visitor.email}</td> */}
  //     <td>{visitor.host}</td>
  //     <td>{visitor.purpose}</td> 
  //   </tr>
  // ))}
// </tbody> */}
