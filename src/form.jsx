import { useState } from "react";

export const FormComponent = () => {
  const [newTask, setNewTask] = useState('');
  const [todos, setTodos] = useState([]);
  
  const submitHandler = (e) => {
    e.preventDefault();
    setTodos((currentTodos) => [
      ...currentTodos, {
        id: crypto.randomUUID(), title: newTask, completed: false
      }
    ])
  }
  
  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="text">Add Task</label>
        <input value={newTask} type="text" id="text" onChange={e => setNewTask(e.target.value)}/>
        <button className="btn">Add</button>
    </form>
  )
}