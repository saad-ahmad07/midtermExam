import React from 'react'

function Drop(props) {

  return (
    
    <select name="occupation" id="">
      { 
       props.data.map((item)=>{
            <option value="">{item.occupation}</option>
      })
      }
    </select>
  )
}

export default Drop