import React, { useState, useEffect } from 'react';
import { randomKey } from './Random';

export const TodoAddForm = (props)=>{
	const [input, setInput] = useState({});

	const handleChange = (e)=>{
		setInput(e.target.value);
	}
	const handleKeyPress = (e)=>{
		if(e.key === 'Enter'){
			props.addTodo(
				{id: randomKey(),title: input}
			);	
			e.target.value = ''
		}	
	}

	return(
		<React.Fragment>
			<div class="container d-flex justify-content-center">
				<input class="todoAddInput"type="text" placeholder='todo' onChange={(e)=>handleChange(e)} onKeyDown={(e)=>handleKeyPress(e)}/>
			</div>
		</React.Fragment>
	)
}
