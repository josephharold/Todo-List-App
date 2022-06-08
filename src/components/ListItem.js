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
			{props.itemTitle}
			<ButtonComplete>example</ButtonComplete>
			<ButtonDelete></ButtonDelete>
			<ButtonEdit></ButtonEdit>
		</li>
	)
}

export {ListItem};