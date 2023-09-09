import PropTypes from "prop-types";
import { TaskItem } from "./taskitem"

export const TaskList = ({todos, removeTask, toggleTodo}) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TaskItem key={todo.id} removeTask={removeTask} {...todo} toggleTodo={toggleTodo} />
      ))}
    </ul>
  )
}

TaskList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired
    })
  ).isRequired,
  removeTask: PropTypes.func,
  toggleTodo: PropTypes.func,
};