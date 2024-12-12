import React, { useEffect, useState } from "react";

export default function Input({getNewTodo,isEditing,editingIndex,todos,setEditing,setTodos}){
  const [val,setVal]= useState("")
 
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

}} value={val} className="m-[20px] w-[400px] bg-blue-200 p-[10px] rounded-[15px]" placeholder="...enter todo here"/>
{
  isEditing?
  <button onClick={()=>{
    getNewTodo(val)
  let newTodo= [...todos]
  newTodo[editingIndex]= val
  setTodos(newTodo)
    setVal("")
   setEditing(false)
  }} className="bg-blue-600 text-white p-[10px] rounded-[5px] border-[1px] border-transparent">update</button>
  :<button onClick={()=>{
    getNewTodo(val)
    setVal("")
}} className="bg-blue-600 text-white p-[10px] rounded-[5px] border-[1px] border-transparent" >Add</button>
}

  </>
)
}