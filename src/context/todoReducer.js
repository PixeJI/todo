import { getLocalStorage, setLocalStorage } from '../utils';
import {
  ADD_TASK,
  REMOVE_TASK,
  SET_CURRENT,
  UPDATE_TASK,
  CLEAR_TASK,
  GET_TASKS,
  SET_COMPLETED
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case ADD_TASK: {
      const task = action.payload;
      task.id = new Date().getTime();
      const newState = {
        ...state,
        tasks: sortByTitleReverse([task, ...state.tasks]),
      }
      setLocalStorage(newState.tasks);
      return newState
    }
    case REMOVE_TASK: {
      const newState = {
        ...state,
        tasks: state.tasks.filter(i => i.id !== action.payload)
      }
      setLocalStorage(newState.tasks);
      return newState
    }
    case SET_CURRENT: {
      return {
        ...state,
        currentTask: action.payload
      }
    }
    case UPDATE_TASK: {
      const newState = {
        ...state,
        tasks: sortByTitleReverse(state.tasks.map(task =>
          task.id === action.payload.id ? action.payload : task
        ))
      }
      setLocalStorage(newState.tasks);
      return newState
    }
    case CLEAR_TASK: {
      return {
        ...state,
        currentTask: null
      }
    }
    case GET_TASKS: {
      return {
        ...state,
        tasks: sortByTitleReverse(getLocalStorage())
      }
    }
    case SET_COMPLETED: {
      const newState = {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.payload.id ? { ...action.payload, completed: !action.payload.completed } : task
        )
      };
      setLocalStorage(newState.tasks);
      return newState;
    }
    default:
      return state;
  }
};

const sortByTitleReverse = (tasks) => {
  tasks.sort((a, b) => {
    return a.title < b.title ? 1 : -1;
  })
  return tasks;
}
