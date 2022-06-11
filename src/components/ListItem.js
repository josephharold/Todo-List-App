import React from 'react';
import { ButtonDelete, ButtonComplete,ButtonEdit } from './Buttons';

const ListItem = (props)=>{
	if(props.isComplete===true){
		return(
			<li style={{textDecoration: 'line-through'}}>
				{props.children}
				<ButtonComplete toggleComplete={()=>props.toggleComplete()}>toggleComplete</ButtonComplete>
				<ButtonDelete deleteItem = {()=>props.deleteItem()}></ButtonDelete>
				<ButtonEdit ></ButtonEdit>
			</li>
		)
	}else{
		return(
			<li>
				{props.children}
				<ButtonComplete toggleComplete={()=>props.toggleComplete()}>toggleComplete</ButtonComplete>
				<ButtonDelete deleteItem = {()=>props.deleteItem()}></ButtonDelete>
				<ButtonEdit ></ButtonEdit>
			</li>
		)

	}
}

export {ListItem};