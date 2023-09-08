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
  return (
    <>
      <FormComponent setTodos={setTodos} />
      <TaskList todos={todos} />
    </>
  )
}

export default App
