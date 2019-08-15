import React, { useReducer } from 'react';
import TodoContext from './todoContext';
import TodoReducer from './todoReducer';
import { 
  ADD_TASK, 
  REMOVE_TASK, 
  SET_CURRENT, 
  UPDATE_TASK,
  CLEAR_TASK,
  GET_TASKS,
  SET_COMPLETED
} from './../types';
const TodoState = props => {
  const initialState = {
    tasks: [],
    currentTask: null
  };
  const [state, dispatch] = useReducer(TodoReducer, initialState);
  const addTask = task => {
    dispatch({
      type: ADD_TASK,
      payload: task
    });
  }
  const removeTask = id => {
    dispatch({
      type: REMOVE_TASK,
      payload: id
    });
  }
  const setCurrentTask = task =>{
    dispatch({ type: SET_CURRENT, payload: task });
  }
  const clearCurrentTask = () => {
    dispatch({ type: CLEAR_TASK});
  }
  const updateTask = task =>{
    dispatch({ type: UPDATE_TASK, payload: task });
  }
  const getTasks = () =>{
    dispatch({ type: GET_TASKS });
  }
  const setCompleted = (task)=>{
    dispatch({ type: SET_COMPLETED , payload: task});
  }

  return (
    <TodoContext.Provider
      value={{
        tasks: state.tasks,
        currentTask: state.currentTask,
        addTask,
        removeTask,
        setCurrentTask,
        updateTask,
        clearCurrentTask,
        getTasks,
        setCompleted
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoState;
