import React, {useState} from 'react';
import { TodoBody } from './TodoBody';

export const Todos = (props)=>{
	const [edit, setEdit] = useState();

	let list = props.todos.map((e)=>{
		return (
			<div class="todo container d-flex align-items-center justify-content-center mb-1 mt-1"key= {e.id}>
				<TodoBody
					handleEdit = {props.handleEdit}
					todoId={e.id}
					onEditHandle = {()=>setEdit(null)}
					todoTitle={e.title}
					completed={e.completed}
					edit = {edit}
					completeTodo ={props.completeTodo}
				/>
				<button class="btn btn-primary m-1" onClick = {()=>setEdit(e.id)}>edit</button>
				<button class="btn btn-secondary m-1" onClick={()=>props.handleDelete(e.id)}>delete</button>
			</div>

		)})
	return (
		<React.Fragment>
			{list}
		</React.Fragment>
	)
}