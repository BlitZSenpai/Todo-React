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
  return (
    <>
      <FormComponent addTask={addTask}/>
      <TaskList todos={todos} />
    </>
  )
}

export default App
