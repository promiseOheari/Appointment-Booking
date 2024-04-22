import React, { useEffect, useState } from 'react'
import tab from "./dbTable.module.css"
import axios from 'axios';
import Header from '../Header/Header';


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
    <div className='w-full text-[blue]'>
      {/* <Header/> */}
    <div className=' flex items-center flex-col w-[100%]'>
       <h1 className='pb-[50px] text-[24px] mt-[50px] font-bold'>Visitor Appointment Information</h1>
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
                <td>{i.email}</td>
                <td>{i.arrival}</td>
                <td>{i.date}</td>
                <td>{i.exit}</td>
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
// {
//   "id": "c84a",
//   "name": "promise",
//   "email": "rrttjjiiu",
//   "arrival": "",
//   "host": "Josh",
//   "purpose": "Registration"
// },