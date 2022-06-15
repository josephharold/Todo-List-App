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
			<input type="text" placeholder='todo' onChange={(e)=>handleChange(e)} onKeyDown={(e)=>handleKeyPress(e)}/>
		</React.Fragment>
	)
}
