import { useState } from "react";

import PropTypes from "prop-types";

export const FormComponent = ({ addTask }) => {
	const [newTask, setNewTask] = useState("");

	const submitHandler = (e) => {
		e.preventDefault();
		if (newTask === "") return;
		addTask(newTask);

		setNewTask("");
	};

	return (
		<form onSubmit={submitHandler} className="form-container">
			<input
				value={newTask}
				type="text"
				id="text"
				placeholder="Add Task"
				onChange={(e) => setNewTask(e.target.value)}
				className="form-input"
			/>
			<button className="form-btn">Add</button>
		</form>
	);
};

FormComponent.propTypes = {
	addTask: PropTypes.func,
};
