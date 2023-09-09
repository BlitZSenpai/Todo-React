import { useState } from 'react';
import './App.css'
import { FormComponent } from './form';
import { TaskList } from './task-list';

function App() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if (localValue == null) return []

    return JSON.parse(localValue)
  })
  const addTask = (title) => {
    setTodos((currentTodos) => {
      return[
      ...currentTodos, {
        id: crypto.randomUUID(), title, completed: false
      }
    ]})
  }
  
  const toggleTodo = (id, completed) => {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if(todo.id === id) {
          return {...todo, completed}
        }
        return todo
      })
    })
  }

  const removeTask = (id) => {
    setTodos((currentTodo) => {
      return currentTodo.filter((todo) => todo.id !== id)
    })
  }
  return (
    <>
      <FormComponent addTask={addTask}/>
      <TaskList todos={todos} removeTask={removeTask} toggleTodo={toggleTodo} />
    </>
  )
}

export default App
