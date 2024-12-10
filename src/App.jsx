import React, { useEffect,useState } from "react";
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
  <>
  <Input getNewTodo={getNewTodo} isEditing={editing} todos={todos} editingIndex={editingIndex} setEditing={setEditing} setTodos={setTodos}/>
  {
    todos.length>0?
    todos.map((todo,index)=>{
      return(
        <li key={index}>{todo}
        <button onClick={()=>deleteTodo(index)}>delete</button>
        <button onClick={()=>{
          setEditing(true)
          setEditIndex(index)
        }}>edit</button>
        </li>

      )
    })
    : <li>nothing to show</li>
  }
  </>
)
}