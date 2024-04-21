
import './App.css'
import { useState  } from 'react';
function App() {
let state = {
  count: 0
}
  const [todos, setTodos] = useState([{
    title: "Go to Gym",
    description: "Go to gym from 7-9",
    completed: false
  },{
    title: "Stedy DSA",
    description: "Study Dsa from 7-9",
    completed: true
  }])
  return (

    <div>
      {/* <CustomTomBtn count={count} setCount={setCount}></CustomTomBtn> */}
      {todos}
      {todos.map(function(todo){
        return  <Todo title={todo.title} description={todo.description}></Todo>
      })}
    </div>
  )
}
 //Component
//  function CustomTomBtn(props){
//   function onClickHandler(){
//     props.setCount(props.count + 1);
//   }
//   return <button onClick={onClickHandler}>
//     Counter {props.count}
//   </button>
// }
function Todo(props){
  return <div>
    <h1>{props.title}</h1>
    <h2>{props.description}</h2>
  </div>
}
export default App
