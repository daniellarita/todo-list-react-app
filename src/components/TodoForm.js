import React from 'react';

export default function (props) {

  const todoChange = e => {
    props.handleTodoInput(e.target.value);
  };

  return (
    <div id="todos">
      <h3>To-do Form</h3>
      <form onSubmit={props.handleSubmit}>
        <div>
          <input type="text" value={props.newTodo} placeholder="What do you need to do?" onChange={todoChange}/>
        </div>
        <pre>{props.newTodo || 'Write a to-do above!'}</pre>
        <button type="submit">Submit To-do</button>
      </form>
    </div>
  );

}