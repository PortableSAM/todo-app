import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoItemList extends Component {
	render() {
		const { toDos, onToggle, onRemove } = this.props;

		return (
			<div>
				<TodoItem text="무엇이든 하자" />
				<TodoItem text="서비스 앱 만들자" />
				<TodoItem text="자주자주 토이프로젝트" />
			</div>
		);
	}
}

export default TodoItemList;
// toDos : toDo객체 Arr
// onToggle : checkbox 조작 함수
// onRemove : Item 삭제 함수
