import { ADD_COUNT } from "./actions"; 
import { SUB_COUNT } from "./actions";
import { ADD_TODO } from "./actions";
import { SUB_TODO } from "./actions"; 

const initState = {
     count : 0 , 
    // count : localStorage.getItem("counter") || 0 , 
    todo : [] , 
}
export const reducer = (store = initState , {type , payload} )=>{
     console.log("store" , store)
    switch(type){
        case ADD_COUNT :
            //  localStorage.setIteam("counter", store.count + payload) ; 
             return {...store , count : store.count + payload} ; 

        case SUB_COUNT :
            return {...store , count : store.count - payload} ;  

        case ADD_TODO : 
            return {...store , todo : [...payload ]}  /// there is no previous todos present because each and every time you r reciving all the todos so you do not need to write ...store.todos

        case SUB_TODO :
            return {...store , todo : [...store.todo, payload ]}  /// ...store preserve previous store data , ...store.todo means preserve previous todos data , payload means only add new todo
        
      default : 
         return store ; 
     }
     
}