import axios from 'axios';
import React, {useEffect, useState} from 'react';
import { TodoAddForm } from './TodoForm.add';
import {Todos} from './Todos'
export const TodoList = ()=>{
	const [todos, setTodos] = useState([]);	
	// get from API
	useEffect(() => {
		axios
		.get('https://jsonplaceholder.typicode.com/todos')
		.then(res=> setTodos(res.data.filter(elem=> {return elem.userId === 1})))
		.catch(err=>console.log("woooooh", err));
	}, []);
	// for everyrender
	const addTodo = (todo)=>{
		const updatedTodos = [todo, ...todos];
		setTodos(updatedTodos);
	}
	const deleteTodo = (id)=>{
		let filteredTodo = [...todos].filter(
			todo=>{
				return !(todo.id === id)
			}
		)
		setTodos(filteredTodo);
		console.log(id);
	}
	const editTodo = (id, updatedTitle)=>{
		let updatedTodos = [...todos].map(todo=>{
			return todo.id===id ? (todo.title=updatedTitle, todo) : todo
		});
		setTodos(updatedTodos)
	}
	const completeTodo = (id, completed)=>{
		let updatedTodos = [...todos].map(todo=>{
			return todo.id===id ? (todo.completed=completed, todo) : todo
		});
		setTodos(updatedTodos);
	}
	return(
		<React.Fragment>
			<div class="d-flex justify-content-center">
				<h1>TodoList App</h1>
			</div>	
			<TodoAddForm addTodo = {addTodo}/>
			<Todos 
				todos={todos}
				handleDelete={(id)=>deleteTodo(id)}
				handleEdit = {editTodo}
				completeTodo = {completeTodo}
			></Todos>
		</React.Fragment>
	)
}
