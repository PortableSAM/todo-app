import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoItemList extends Component {
	shouldComponentUpdate(nextProps, nextState) {
		return this.props.toDos !== nextProps.toDos;
	}
	render() {
		const { toDos, onToggle, onRemove } = this.props;

		const toDoList = toDos.map(({ id, text, checked }) => (
			<TodoItem id={id} text={text} checked={checked} onToggle={onToggle} onRemove={onRemove} key={id} />
		));

		return <div>{toDoList}</div>;
	}
}

export default TodoItemList;
// toDos : toDo객체 Arr
// onToggle : checkbox 조작 함수
// onRemove : Item 삭제 함수
