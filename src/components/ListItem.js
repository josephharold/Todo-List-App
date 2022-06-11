import React from 'react';
import { ButtonDelete, ButtonComplete,ButtonEdit } from './Buttons';

const ListItem = (props)=>{
	return(
		<li>
			{props.children}
			<ButtonComplete toggleComplete={()=>props.toggleComplete()}>toggleComplete</ButtonComplete>
			<ButtonDelete deleteItem = {()=>props.deleteItem()}></ButtonDelete>
			<ButtonEdit ></ButtonEdit>
		</li>
	)
}

export {ListItem};