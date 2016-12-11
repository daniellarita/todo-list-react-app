import React, {Component} from 'react';
import store from '../store';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';
import {addTodo, markAsComplete} from '../action-creators/todos';
import FilterContainer from '../containers/FilterContainer';


export default class extends Component {

  constructor() {
    super();
    this.state = Object.assign({
    	incompletedViewSelected:false
    },store.getState());

    this.handleTodoInput=this.handleTodoInput.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
    this.markAsComplete=this.markAsComplete.bind(this);
    this.handleView=this.handleView.bind(this);
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
  	store.dispatch(addTodo(this.state.todo));
  }

  markAsComplete(i){
  	store.dispatch(markAsComplete(i));
  	console.log(this.state.isComplete)
  }

  handleView(){
  	this.setState({
  		incompletedViewSelected:!this.state.incompletedViewSelected
  	})
  }


  render() {
  	 var isIncomplete=function(todo){
  	 	return false===todo.isComplete;
  	 }
  	const incompleteTodos=this.state.todos.filter(isIncomplete);


  	const todolist=this.state.incompletedViewSelected ? incompleteTodos : this.state.todos; 

    return (
    	<div>
	      <TodoForm
	      newTodo={this.state.todo}
	      handleTodoInput={this.handleTodoInput}
	      handleSubmit={this.handleSubmit}
	      />
		  <TodoList
		      todos={todolist}
		      markAsComplete={this.markAsComplete}
		  /> 
	      <FilterContainer 
	      	handleView={this.handleView}
	      	completedViewSelected={this.state.incompletedViewSelected}
	      />
		</div>
    );
  }

}