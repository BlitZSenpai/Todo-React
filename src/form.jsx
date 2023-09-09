import { useState } from "react";
import PropTypes from "prop-types";

export const FormComponent = ({addTask}) => {
  const [newTask, setNewTask] = useState('');
  
  const submitHandler = (e) => {
    e.preventDefault();
    if(newTask === "") return
    addTask(newTask)
    
    setNewTask("");
  }

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="text">Add Task</label>
        <input value={newTask} type="text" id="text" onChange={e => setNewTask(e.target.value)}/>
        <button className="btn">Add</button>
    </form>
  )
}

FormComponent.propTypes = {
  addTask: PropTypes.func
}