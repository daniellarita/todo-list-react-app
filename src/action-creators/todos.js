import {ADD_TODO} from '../constants';
import {MARK_AS_COMPLETE} from '../constants';

export const addTodo = function (todo) {
  return {
    type: ADD_TODO,
    todo: todo
  };
};

export const markAsComplete = function (i) {
  return {
    type: MARK_AS_COMPLETE,
    i: i
  };
};