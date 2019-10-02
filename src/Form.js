import React from 'react';
import './Form.css';

const Form = ({ value, onChange, onCreate, onKeyPress }) => {
	return (
		<div className="form">
			<input value={value} onChange={onChange} onCreate={onCreate} onKeyPress={onKeyPress} />
			<div className="create-button" onClick={onCreate}>
				ADD
			</div>
		</div>
	);
};
/* 
value = input 내용
onCreate = button 클릭시 실행 함수
onChange = input 내용이 변경될 때 실행 함수
onKeyPress = input에서 Key를 입력 될 때 실행 함수(Enter눌렀을때 onCreate와 동일))
*/
export default Form;
