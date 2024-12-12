import React, { useState } from "react";
import Input from "./input";

export default function App(){
const [todos,setTodos]=useState([])
const [editing,setEditing] = useState(false)
const [editingIndex, setEditIndex]= useState(-1)
function getNewTodo(val){
  console.log("val",val)
  if(todos.includes(val)){
    alert("cannot add same todo")
  }else{
    setTodos([...todos,val])
  }

}


function deleteTodo(index){
  let newTodo= todos.filter((todo,ind)=>ind !== index)
 setTodos(newTodo)
 console.log(todos,newTodo)
}


return(
  <div className="h-[100vh] bg-gray-100 p-[40px]">
  <h1 className="text-3xl p-[10px] ml-[30px] ">TODO-APP</h1>
  <Input 
   getNewTodo={getNewTodo} isEditing={editing} todos={todos} editingIndex={editingIndex} setEditing={setEditing} setTodos={setTodos}/>
 
 
 <ul className="m-[20px]">
 {
    todos.length>0?
    todos.map((todo,index)=>{
      return(
        <li key={index} className="mb-[10px]" > <span className="w-[100px] inline-block pl-[20px] bg-green-200 py-[5px] rounded-[10%] "> {todo}</span>
        <button onClick={()=>deleteTodo(index)} className="rounded-sm border-black text-white bg-gray-700 p-[5px] ml-[20px]">delete</button>
        <button onClick={()=>{
          setEditing(true)
          setEditIndex(index)
        }} className="rounded-sm border-black text-white bg-gray-700 p-[5px] ml-[20px]" >edit</button>
        </li>

      )
    })
    : <li className="w-[200px] inline-block pl-[20px] bg-green-200 py-[5px] rounded-[10%] ">nothing to show</li>
  }
  </ul> 

  </div>
)
}