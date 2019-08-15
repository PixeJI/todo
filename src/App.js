import React from 'react';
import './App.css';
import TodoState from './context/TodoState';
import TodoList from './components/TodoList';
import AddTask from './components/AddTask';
const App = () => {
  return (
    <TodoState>
      <div className="App container">
        <h2> Todo list</h2>
        <div className='grid-2'>
          <AddTask/>
          <TodoList/>
        </div>
      </div>
    </TodoState>
  );
}

export default App;
