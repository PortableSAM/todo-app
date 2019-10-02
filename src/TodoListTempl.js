import React from 'react';
import './TodoListTempl.css';

const TodoListTempl = ({ form, children }) => {
	return (
		<main className="todo-list-templ">
			<div className="title">오늘은 무엇을 할까?</div>
			<section className="form-wrapper">{form}</section>
			<section className="todos-wrapper">{children}</section>
		</main>
	);
};

export default TodoListTempl;
