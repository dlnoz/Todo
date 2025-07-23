import {useEffect, useState} from "react"

import FormTodo from "./modules/List/formtodo"
import ListTodo from "./modules/List/todolist"

const App = () => {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos"));
    if (savedTodos) {
      setTodos(savedTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
      
  return (

   <>
   <FormTodo todos={todos} setTodos={setTodos}/>
   <ListTodo todos={todos} setTodos={setTodos}/>
   </>
  )

  }

export default App
