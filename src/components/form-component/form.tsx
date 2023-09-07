const TodoForm = () => {
  return (
    <form action="submit" className="form">
      <label>Add a Task: </label>
        <input type="text" />
      <button type="submit">Add</button>
    </form>
  )
}

export default TodoForm;