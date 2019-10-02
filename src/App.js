import React, { Component } from 'react';
import ToDoListTempl from './TodoListTempl';
import Form from './Form';

class App extends Component {
	render() {
		return <ToDoListTempl form={<Form />}></ToDoListTempl>;
	}
}

export default App;
