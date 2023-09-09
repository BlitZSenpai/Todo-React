import PropTypes from "prop-types";

export const TaskItem = ({todo}) => {
  return (
      <li key={todo.id}>
        <label>
          <input type="checkbox" checked={todo.completed}/>
          {todo.title}
        </label>
        <button>remove</button>
      </li>
  )
}

TaskItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
};