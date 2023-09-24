import PropTypes from "prop-types";

export const TaskItem = ({id, title, completed, removeTask, toggleTodo}) => {
  return (
      <li className="list-container">
        <label className="task-label">
          <input className="checkbox" type="checkbox" checked={completed} onChange={(e) => toggleTodo(id, e.target.checked)} />
          {title}
        </label>
        <button onClick={() => removeTask(id)} className="task-btn">remove</button>
      </li>
  )
}

TaskItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  removeTask: PropTypes.func.isRequired,
  toggleTodo: PropTypes.func.isRequired,
};