import {createStore} from 'redux';
import reducer from './reducers/todo-reducer';

export default createStore(reducer);