import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";

function Dates() {
	const [todos, setTodos] = useState([]);
	const [date, setDate] = useState("");
	const navigate = useNavigate();
	

	function addDate() {
		let dates = localStorage.getItem("dates") ? JSON.parse(localStorage.getItem("dates")) : [];
		if (todos.length === 0) {
			alert("Please, fill todo field ");
			return;
		}
		if (date.length === 0) {
			alert("Please, choose the date");
			return;
		}
		if (!dates.some((elem) => elem.date === date)) {
			dates.push({ date: date, todo: [{ value: todos, id: uuidv4() }], id: uuidv4() });
		} else {
			dates = dates.map((elem) => {
				if (elem.date === date) elem.todo.push({ value: todos, id: uuidv4() });
				return elem;
			});
		}
		localStorage.setItem("dates", JSON.stringify(dates));
		setTodos([]);
	}

	return (
		<>
			<h3>Todo list with dates</h3>
			<div>
				<input value={todos} onChange={(e) => setTodos(e.target.value)}></input>
				<input value={date} type="date" onChange={(e) => setDate(e.target.value)}></input>
				<button onClick={addDate}>ADD</button>
			</div>
			<ul>
				{localStorage.getItem("dates") &&
					JSON.parse(localStorage.getItem("dates")).map((elem) => (
						<li key={elem.id}>
							{elem.todo.length > 1 ? elem.date + "(" + elem.todo.length + ")" : elem.date}
							<button
								onClick={() => {
									localStorage.setItem("id", elem.id);
									navigate("/dateitem");
								}}
							>
								{" > "}
							</button>
						</li>
					))}
			</ul>
		</>
	);
}

export default Dates;
