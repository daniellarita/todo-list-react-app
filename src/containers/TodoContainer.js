import React, {Component} from 'react';
import store from '../store';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';
import {addTodo, markAsComplete} from '../action-creators/todos';


export default class extends Component {

  constructor() {
    super();
    this.state = store.getState();

    this.handleTodoInput=this.handleTodoInput.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
    this.markAsComplete=this.markAsComplete.bind(this);
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.setState(store.getState());
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  handleTodoInput(todo) {
  	console.log(todo);
    this.setState({ todo: todo });
  }

  handleSubmit(e){
  	e.preventDefault();
  	console.log("state before submit", this.state)
  	store.dispatch(addTodo(this.state.todo));
  }

  markAsComplete(i){
  	store.dispatch(markAsComplete(i));
  }

  render() {
    return (
    	<div>
	      <TodoForm
	      newTodo={this.state.todo}
	      handleTodoInput={this.handleTodoInput}
	      handleSubmit={this.handleSubmit}
	      />
	      <TodoList
	      todos={this.state.todos}
	      markAsComplete={this.markAsComplete}
	      />
	    </div>
    );
  }

}