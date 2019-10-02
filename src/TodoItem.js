import React, { Component } from 'react';
import './TodoItem.css';

class TodoItem extends Component {
	shouldComponentUpdate(nextProps, nextState) {
		return this.props.checked !== nextProps.checked;
	}
	render() {
		const { text, checked, id, onToggle, onRemove } = this.props;
		/* 
        text : toDo 내용
        checked : checkbox 상태
        id : toDo 객체 id
        onToggle : checkbox on off 함수
        onRemove : Item Delete 함수
        */
		return (
			<div className="todo-item" onClick={() => onToggle(id)}>
				<div
					className="remove"
					onClick={e => {
						e.stopPropagation();
						onRemove(id);
						// e.stopPropagation -> onToggle이 실행 않도록 함
					}}
				>
					&times;
				</div>
				<div className={`todo-text ${checked && 'checked'}`}>
					<div>{text}</div>
				</div>
				{checked && <div className="check-mark">✔</div>}
			</div>
		);
	}
}

export default TodoItem;
