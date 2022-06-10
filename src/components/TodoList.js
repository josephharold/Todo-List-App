import React, {useState, useEffect} from "react";
import axios from "axios";
import { ListItem } from "./ListItem";
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
		.catch(err => console.log(err));
	}, []);

	const deleteItem = (userId,listItemId)=>{
		console.log(userId, listItemId);
		let dummyList = [...list];
		setList(dummyList.filter(elem=> {return !(elem.userId==userId && elem.id==listItemId)}));
	}
	const editItem = ()=>{
		
	}

	return(
		<React.Fragment>
			<h1>this is a react fragment</h1>
			{
				list.map(element=>{
					return <ListItem 
								key = {element.title + element.userId + element.completed}
								deleteItem = {()=> deleteItem(element.userId, element.id)}
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