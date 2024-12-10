import React, { useEffect, useState } from "react";

export default function Input({getNewTodo,isEditing,editingIndex,todos,setEditing,setTodos}){
  const [val,setVal]= useState("")
  const [newval,setNewVal]= useState("")
useEffect(()=>{
if(isEditing){
  console.log("editing")
console.log(todos[editingIndex],editingIndex)
setVal(todos[editingIndex])
}
// setEditing(false)
},[isEditing])


return(
  <>
<input type="text" onChange={(e)=>{setVal(e.target.value)

}} value={val}/>
{
  isEditing?
  <button onClick={()=>{
    setNewVal(val)
    let newTodo= todos.splice(editingIndex,1,)
    setTodos(newTodo)
    setEditing(false)
  }}>update</button>
  :<button onClick={()=>{
    getNewTodo(val)
    setVal("")
}}>add</button>
}

  </>
)
}