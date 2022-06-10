import React from 'react';
/* 
>add in constant item above
>delete inside the list item 
>edit inside the list item
>toggle complete inside the list item
*/
const ButtonDelete =(props)=>{
	return(
		<span>
			<button onClick={()=>props.deleteItem()}>Delete Item</button>
		</span>
	)			
}

const ButtonComplete = (props)=>{
	return(
		<span>
			<button onClick={()=> props.completeItem}>{props.children}</button>
		</span>
	)
}

const ButtonEdit = (props)=>{
	return(
		<span>
			<button onClick={()=> props.editItem}>Complete Item</button>
		</span>
	)
}

export {ButtonComplete, ButtonDelete, ButtonEdit};