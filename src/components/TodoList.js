import React from 'react';

export default function (props) {
  return (
    <div id="todo-list">
      <h3>To-dos</h3>
      <ol>
	     {props.todos.map((todo, i)=>{
	     	return <li style={ todo.isComplete ? { textDecoration: 'line-through' } : {} } key={i}>{todo.description}<button onClick={() => props.markAsComplete(todo.i)}>&#10003;</button></li>;	      
	     })
	  	}
  	  </ol>
    </div>
  );

}