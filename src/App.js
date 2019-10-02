import React, { Component } from 'react';
import Form from './Form';
import TodoItemList from './TodoItemList';
import TodoListTempl from './TodoListTempl';

class App extends Component {
	id = 1; // 이미 0이 존재하므로 1으로 설정

	state = {
		input: '',
		toDos: [{ id: 0, text: '예제 화면 입니다.', checked: false }],
	};

	handleChange = e => {
		this.setState({
			input: e.target.value, // input 의 다음 바뀔 값
		});
	};

	handleCreate = () => {
		const { input, toDos } = this.state;
		this.setState({
			input: '', // 인풋 비우고
			// concat 을 사용하여 배열에 추가
			toDos: toDos.concat({
				id: this.id++,
				text: input,
				checked: false,
			}),
		});
	};

	handleKeyPress = e => {
		// 눌려진 키가 Enter 면 handleCreate 호출
		if (e.key === 'Enter') {
			this.handleCreate();
		}
	};

	handleToggle = id => {
		const { toDos } = this.state;

		// 파라미터 id를 가지고 몇번째 아이템인지 찾음.
		const index = toDos.findIndex(toDo => toDo.id === id);
		const selected = toDos[index]; // 선택된 개체
		const nextToDos = [...toDos]; // 배열을 복사

		// 기존의 값들을 복사, checked value 덮어쓰기

		nextToDos[index] = {
			...selected,
			checked: !selected.checked,
		};

		this.setState({
			toDos: nextToDos,
		});
	};

	handleRemove = id => {
		const { toDos } = this.state;
		this.setState({
			toDos: toDos.filter(todo => todo.id !== id),
		});
	};
	render() {
		const { input, toDos } = this.state;
		const { handleChange, handleCreate, handleKeyPress, handleToggle, handleRemove } = this;
		return (
			<TodoListTempl
				form={
					<Form value={input} onKeyPress={handleKeyPress} onChange={handleChange} onCreate={handleCreate} />
				}
			>
				<TodoItemList toDos={toDos} onToggle={handleToggle} onRemove={handleRemove} />
			</TodoListTempl>
		);
	}
}

export default App;
