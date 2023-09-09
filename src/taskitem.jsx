import PropTypes from "prop-types";

export const TaskItem = ({id, title, completed, removeTask, toggleTodo}) => {
  return (
      <li>
        <label>
          <input type="checkbox" checked={completed} onChange={(e) => toggleTodo(id, e.target.checked)} />
          {title}
        </label>
        <button onClick={() => removeTask(id)}>remove</button>
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