import React, { useContext, useState } from 'react'
import { MyContext } from './Context'

const InputTodos = () => {
const[data,setData]=useState("")
const{AddItem}=useContext(MyContext)
  const submit=(e)=>{
  e.preventDefault(); 
  AddItem(data);
  setData("");
  }
  console.log(data);
  return (
    <div className='inputDiv' >
      <form onSubmit={submit}>
        <input style={{height:"30px",width:"200px",margin:"12px",borderRadius:"2%"}} placeholder='AddTodo...' type='text' value={data} onChange={(e)=>setData(e.target.value)}></input>
        <button style={{height:"30px",width:"30px"}}>➕</button>
      </form>
    </div>
  )
}

export default InputTodos