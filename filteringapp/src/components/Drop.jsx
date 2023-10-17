import React, { useState } from 'react'
import { sampleData } from '../data';
function Drop(props) {

    const [data,setData] = useState(sampleData)

    console.log(data);


  return (
    <>
    <label htmlFor="">{props.sort}</label>
    <select name="occupation" id="">
          {
            props.sort == "Occupation" ? 
            data.map((item)=>(
                <option value="a">{item.occupation}</option>
            )) : data.map((item)=>(
                <option value="a">{item.city}</option>
            ))
          }
        </select>
    </>
        
        // <h1>Hello</h1>
  )
}

export default Drop