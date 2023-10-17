import React, { useState } from 'react'
import { sampleData } from '../data'
function Main() {

   const [data,setData] = useState(sampleData)

  //  console.log(data)
  return (

    <table className='table'>
      <thead>

      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Age</th>
        <th>City</th>
        <th>Occupation</th>
        </tr>
      </thead>
      
     
     <tbody>
      

     {
        data.map((item)=>(
          <tr key={item.id}>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.age}</td>
          <td>{item.city}</td>
          <td>{item.occupation}</td>
          </tr>
          // console.log(item);
        ))
      }

{/* <tbody>
           { this.state.classes.map((obj) => (

            <tr>
            <td>{obj.id}</td>
            <td>{obj.name}</td>
            <td>{obj.batch}</td>
            <td><input onClick={() => this.handleSelectedClass(obj)} name="classSelect" className='form-check' type="radio" /></td> 
            </tr>

            ))}
            
          </tbody> */}

     </tbody>
       
       
    </table>
  )
}

export default Main