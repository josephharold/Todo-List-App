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
			setList(response.data)
			console.log(list);
		})
		.catch(err => console.log(err));
	}, []);
	const display =	list.filter(indx=>{return indx.userId === 1}).map(indx=>{
		return <ListItem>{indx.title}|| {indx.completed}</ListItem>		
	}
	)
	return(
		<React.Fragment>
			<h1>this is a react fragment</h1>
			{display}
		</React.Fragment>
	)
}


export {TodoList}