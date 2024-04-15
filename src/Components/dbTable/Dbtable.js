import React from 'react'
import tab from "./dbTable.module.css"

function Dbtable() {
  return (
    <div className='p-[60px] flex items-center flex-col'>
       <h2 className='pb-[50px] text-[24px]'>Visitor Appointment Information</h2>
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
              <tr>
              <td>1</td>
                <td>prom</td>
                <td>0998765</td>
                <td>ttyyr</td>
                <td>thfdsa</td>
                <td>thfdsa@@@</td>
                <td>Mamma</td>
                <td>complain</td>
           
              </tr>

              <tr>
              <td>2</td>
                <td>prom</td>
                <td>0998765</td>
                <td>ttyyr</td>
                <td>thfdsa</td>
                <td>thfdsa@@@</td>
                <td>Mamma</td>
                <td>complain</td>
           
              </tr>

              <tr>
              <td>3</td>
                <td>prom</td>
                <td>0998765</td>
                <td>ttyyr</td>
                <td>thfdsa</td>
                <td>thfdsa@@@</td>
                <td>Mamma</td>
                <td>complain</td>
           
              </tr>

              <tr>
              <td>4</td>
                <td>prom</td>
                <td>0998765</td>
                <td>ttyyr</td>
                <td>thfdsa</td>
                <td>thfdsa@@@</td>
                <td>Mamma</td>
                <td>complain</td>
           
              </tr>

              <tr>
              <td>5</td>
                <td>prom</td>
                <td>0998765</td>
                <td>ttyyr</td>
                <td>thfdsa</td>
                <td>thfdsa@@@</td>
                <td>Mamma</td>
                <td>complain</td>
           
              </tr>

              <tr>
              <td>6</td>
                <td>prom</td>
                <td>0998765</td>
                <td>ttyyr</td>
                <td>thfdsa</td>
                <td>thfdsa@@@</td>
                <td>Mamma</td>
                <td>complain</td>
           
              </tr>

              <tr>
              <td>7</td>
                <td>prom</td>
                <td>0998765</td>
                <td>ttyyr</td>
                <td>thfdsa</td>
                <td>thfdsa@@@</td>
                <td>Mamma</td>
                <td>complain</td>
           
              </tr>
              {/* <tr><</tr> */}
              {/* <tr></tr>
              <tr></tr>
              <tr></tr>
              <tr></tr> */}
            </tbody>
        </table>
        {/* http://localhost:8000/visitors */}
    </div>
  )
}

export default Dbtable