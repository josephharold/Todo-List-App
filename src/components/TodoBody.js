import React from 'react';
import { TodoEditForm } from './TodoForm.edit';

export const TodoBody =(props)=>{
	const handleClick = (id, completed)=>{
		completed === true ? props.completeTodo(id, false) : props.completeTodo(id, true);
	}
	const Body = ()=>{
		return props.edit=== props.todoId ?
			<TodoEditForm
				class="todoTitle"
				todoTitle = {props.todoTitle}
				handleEdit={props.handleEdit}	
				todoId={props.todoId}
				resetInput = {()=>props.onEditHandle()}
			></TodoEditForm>
			:
			<span 
				class="todoTitle"
				style={props.completed === true ? {'textDecoration': 'line-through'}:{'textDecoration': 'none'}}
				onClick={()=>handleClick(props.todoId, props.completed)}
			>{
				props.todoTitle
			}</span>
	}
	return(
		<Body/>
	)	
}