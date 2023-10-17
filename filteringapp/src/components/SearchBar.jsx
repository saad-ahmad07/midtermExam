import React, {useState} from 'react'

function SearchBar(props) {
    const[field,setField] = useState("")

    function handleChange(e){
    setField(e.target.value)
    props.handle(e.target.value)
    }
  return (
    <form action="">
        <label htmlFor="search">{props.label}</label>
        <input type="text" onChange={handleChange} name="search" id="" value={field}/>
    </form>
  )
}

export default SearchBar