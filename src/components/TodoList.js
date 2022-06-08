import React, {useState, useEffect} from "react";

/* 
	solve fetch API
	make CRUD functions
*/
const TodoList = ()=>{
	const [list, setList] = useState([]);

	useEffect(() => {
		console.log("fetching API");
	}, []);
	return(
		<React.Fragment>
			<h1>this is a react fragment</h1>
		</React.Fragment>
	)
}