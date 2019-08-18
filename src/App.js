import React from 'react';
import './App.css';
import TodoState from './context/TodoState';
import TodoList from './components/TodoList';
import AddTask from './components/AddTask';
const App = () => {
  return (
    <TodoState>
      <div className="app">
        <h2 className="center"> Todo list</h2>
        <div>
          <AddTask/>
          <TodoList/>
        </div>
      </div>
    </TodoState>
  );
}

export default App;
