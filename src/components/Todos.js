import React, {useState} from 'react';
import { TodoBody } from './TodoBody';

export const Todos = (props)=>{
	const [edit, setEdit] = useState();

	let list = props.todos.map((e)=>{
		return (
			<div key= {e.id}>
				<TodoBody
					handleEdit = {props.handleEdit}
					todoId={e.id}
					onEditHandle = {()=>setEdit(null)}
					todoTitle={e.title}
					completed={e.completed}
					edit = {edit}
					completeTodo ={props.completeTodo}
				/>
				<button onClick = {()=>setEdit(e.id)}>edit</button>
				<button onClick={()=>props.handleDelete(e.id)}>delete</button>
			</div>

		)})
	return (
		<React.Fragment>
			{list}
		</React.Fragment>
	)
}