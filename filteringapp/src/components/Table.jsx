import React,{useState} from 'react'


function Table(props) {
    const [data,setData] = useState(props.data)
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


   </tbody>
     
     
  </table>
  )
}

export default Table