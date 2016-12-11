import {ADD_TODO} from '../constants';
import {MARK_AS_COMPLETE} from '../constants';

const initialState = {
	todos:[] 
};

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case ADD_TODO: 
    	let obj={
    		description:action.todo,
    		i:state.todos.length,
    		isComplete:false
    	}
       return Object.assign({}, state, {
       		todos:state.todos.concat(obj)
       });
    case MARK_AS_COMPLETE:
    	var newState=Object.assign({},state);
    	newState.todos[action.i].isComplete=true;
    	return newState;
    default: 
       return state;
  }
}
