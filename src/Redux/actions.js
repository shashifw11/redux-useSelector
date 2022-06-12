// import {ADD_COUNT} from "./actionType";
// import {SUB_COUNT} from   "./actionType"; 


// action type
export const ADD_COUNT = "ADD_COUNT" ; 
export const SUB_COUNT = "SUB_COUNT" ;  

export const ADD_TODO = "ADD_TODO" ; 
export const SUB_TODO = "SUB_TODO"


//// action creator
export const addCount = (payload)=>({type : ADD_COUNT , payload})
  
export const subCount = (payload)=>({type : SUB_COUNT , payload})

export const addTodo = (todo)=>({type : ADD_TODO ,payload : todo })
export const subTodo = (todo)=>({type : SUB_TODO , payload : todo})
    