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
    <form onSubmit={submitHandler} className="form-container">
      <label htmlFor="text" className="text-label">Add Task</label>
        <input value={newTask} type="text" id="text" onChange={e => setNewTask(e.target.value)} className="input-box"/>
        <button className="btn">Add</button>
    </form>
  )
}

FormComponent.propTypes = {
  addTask: PropTypes.func
}