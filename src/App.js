import TodoList from "./Todo/TodoList"
import React, {useEffect} from "react"
import Context from "./context"
import Loader from "./Loader"




const AddTodo = React.lazy(() =>(import('./Todo/AddTodo')))

function App() {

  const [todos, setTodos] = React.useState([])
  const [loading, setLoading] = React.useState(true)

  useEffect (()=>{
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=20')
  .then(response => response.json())
  .then(todos => {
    setTodos(todos)
    setLoading(false)
  })
  }, [])


function toggleTodo(id){
  return setTodos( todos.map(todo => {
    if (todo.id === id){
       todo.completed = !todo.completed
        } return todo}))
        
}

function removeTodo(id){
  setTodos(todos.filter(todo => todo.id !== id))
} 

  function addTodo (title){
    setTodos(todos.concat([{
      title,
      id: Date.now(),
      completed : false
    }]))
  }

  return (
    <Context.Provider value={{removeTodo}}>
    <div className="wrapper">
        <h1 >To-do list</h1>
         <React.Suspense fallback={<Loader/>}>
          <AddTodo onCreate={addTodo}/>
        </React.Suspense>
       
        {loading && <Loader />}
        {todos.length > 0 ? <TodoList  todos = {todos} onToggle = {toggleTodo}/> : loading ? null :<h2>You don't have any plans yet...</h2>}
        
    </div>
    </Context.Provider>
  );
}

export default App;
