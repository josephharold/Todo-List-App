import React from 'react';
import { ButtonDelete, ButtonComplete,ButtonEdit } from './Buttons';

const ListItem = (props)=>{

	const completeItem = ()=>{
		props.completeItem();
	}

	const deleteItem = ()=>{
		props.deleteItem();
	}
	const editItem = ()=>{
		props.editItem();
	}
	return(
		<li>
			{props.children}
			<ButtonComplete>example</ButtonComplete>
			<ButtonDelete deleteItem = {()=>props.deleteItem()}></ButtonDelete>
			<ButtonEdit></ButtonEdit>
		</li>
	)
}

export {ListItem};