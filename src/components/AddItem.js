import React from 'react';
import { random } from './Random';
export const AddItem = (props)=>{
	const onKeyPress = (e)=>{
		e.key == "Enter" ? props.addToState({userId: random(), id: random(), title: e.target.value, completed: false}): console.log("not working");
	}
	return(
		<React.Fragment>
			<input type="text" id="todoItem" onKeyPress = {(e)=>onKeyPress(e)}/>
		</React.Fragment>	
	)
}