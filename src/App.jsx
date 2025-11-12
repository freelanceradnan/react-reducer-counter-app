import { useReducer } from "react"
const newReducer=(state,action)=>{
if(action==='increase_by_1'){
  return state+1;
}
else if(action==='decrease_by_1'){
  return state-1;
}
}
const App=()=>{
   const[counter,dispatch]=useReducer(newReducer,20)
  return(

   <div className="app-reducer">
    <p>your value is:{counter}</p>
    <button onClick={()=>dispatch('increase_by_1')}>Add By +1</button>
    <button onClick={()=>dispatch('decrease_by_1')}>Add By -1</button>
   </div>
  )
}
export default App