 import {useState,useEffect} from "react" ; 
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../Redux/actions";
import axios from "axios" ; 
 export const Todo = () =>{
const todos = useSelector(store => store.todo) // useSelector decide which components goes to rerender // if we return store only then entire store goes to re-render 
const [text,setText] = useState("") ; 
const dispatch = useDispatch() 

  useEffect(()=>{
    getTodos()
   },[])
  
    const handleupdate=(id)=>{
        axios.put(`http://localhost:8080/todos/${id}`).then(getTodos)
    }
   const handleDelete=(id)=>{
         axios.delete(`http://localhost:8080/todos/${id}`).then(getTodos)
   }

 const getTodos = ()=>{
     axios.get("http://localhost:8080/todos").then(({data})=>{
         dispatch(addTodo(data))
     })
 }
const addTodos = () => {
    axios.post("http://localhost:8080/todos", {
        title : text , 
        status : false , 

    }).then(()=>{getTodos()}) // aftre each and every post of todos getTodos also called and it shows on screen at the same time
}
    return(
        <div>
            <input type = "text" onChange = {(e)=>setText(e.target.value)}/>
           <button onClick = {()=>{ 
                 addTodos() ; 
            //    dispatch(addTodo(text)); 
           }}>ADD Todo</button>
          
           {todos.map((e,i)=>(
           <div key = {e.i}>{e.title} <button onClick={()=>{handleupdate(e.id)}}>Edit</button><button onClick={()=>{handleDelete(e.id)}}>Delete</button></div>))}
        </div>
    )
 }