import React, {useState, useEffect} from "react";
import axios from "axios";
import { ListItem } from "./ListItem";
import { AddItem } from "./AddItem";
/* 
	solve fetch API
	make CRUD functions
*/
const TodoList = ()=>{
	const [list, setList] = useState([]);

	useEffect(() => {
		axios
		.get('https://jsonplaceholder.typicode.com/todos')
		.then(response => {
			setList(response.data.filter((element, index)=>{
				return element.userId ===1;
			}))
		})
		.catch(setList([]));
	}, []);
	const toggleComplete = (completed)=>{
		// replace code 
	}
	const deleteItem = (userId,listItemId)=>{
		let dummyList = [...list];
		setList(dummyList.filter(elem=> {return !(elem.userId==userId && elem.id==listItemId)}));
	}
	
	const addToState = (element)=>{
		let dummyList = [...list]
		dummyList.unshift(element)
		setList(dummyList);
	}

	return(
		<React.Fragment>
			<h1>this is a react fragment</h1>
			<div>
				<AddItem addToState = {(element)=> addToState(element)}></AddItem>
			</div>
			{
				list.map((element,index)=>{
					return <ListItem 
								key = {element.title + element.userId + element.completed}
								deleteItem = {()=> deleteItem(element.userId, element.id)}
								toggleComplete = {()=> toggleComplete(element.userId, element.id, element.completed, index)}
							>
								{element.title}|| {element.completed}
							</ListItem>		
					}
				)
			}
		</React.Fragment>
	)
}


export {TodoList}