import { useEffect, useState } from "react";

import { FormComponent } from "./form";
import { TaskList } from "./task-list";
import "./App.css";

function App() {
	const [todos, setTodos] = useState(() => {
		const localValue = localStorage.getItem("ITEMS");
		if (localValue == null) return [];

		return JSON.parse(localValue);
	});

	useEffect(() => {
		localStorage.setItem("ITEMS", JSON.stringify(todos));
	}, [todos]);

	const addTask = (title) => {
		setTodos((currentTodos) => {
			return [
				...currentTodos,
				{
					id: crypto.randomUUID(),
					title,
					completed: false,
				},
			];
		});
	};

	const toggleTodo = (id, completed) => {
		setTodos((currentTodos) =>
			currentTodos.map((todo) => {
				if (todo.id === id) {
					return { ...todo, completed };
				}
				return todo;
			})
		);
	};

	const removeTask = (id) => {
		setTodos((currentTodos) => currentTodos.filter((todo) => todo.id !== id));
	};

	return (
		<>
			<FormComponent addTask={addTask} />
			<TaskList todos={todos} removeTask={removeTask} toggleTodo={toggleTodo} />
		</>
	);
}

export default App;
