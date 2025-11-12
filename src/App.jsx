import { useReducer } from "react"
const newReducer=(state,action)=>{
switch(action.type){
  case 'increase_counter':{
    return state+action.payload;
  }
  case 'decrease_counter':{
return state-action.payload
  }
  
}
}
const App=()=>{
   const[counter,dispatch]=useReducer(newReducer,20)
  return(

   <div className="app-reducer">
    <p>your value is:{counter}</p>
    <button onClick={()=>dispatch({type:"increase_counter",payload:1})}>Add By +1</button>
    <button onClick={()=>dispatch({type:"increase_counter",payload:5})}>Add By +5</button>
    <button onClick={()=>dispatch({type:"decrease_counter",payload:1})}>Add By -1</button>
    <button onClick={()=>dispatch({type:"decrease_counter",payload:5})}>Add By -5</button>
   </div>
  )
}
export default App