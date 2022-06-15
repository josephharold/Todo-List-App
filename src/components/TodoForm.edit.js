import React, {useState} from 'react';


export const TodoEditForm = (props)=>{
	const [input, setInput] = useState({});

	const handleChange = (e)=>{
		setInput(e.target.value);
	}
	const handleKeyPress = (e)=>{
		if(e.key === 'Enter'){
			props.handleEdit(props.todoId, input);
			props.resetInput()
		}	
	}

	return(
		<React.Fragment>
			<input type="text" class="todoEditInput"placeholder={props.todoTitle} onChange={(e)=>handleChange(e)} onKeyDown={(e)=>handleKeyPress(e)}/>
		</React.Fragment>
	)
}