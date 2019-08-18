import React, { useContext, useEffect } from 'react'
import TodoItem from './../components/TodoItem';
import TodoContext from './../context/todoContext';
const TodoList = () => {
    const todoContext = useContext(TodoContext);
    const { tasks, getTasks } = todoContext;

    useEffect(() => {
        getTasks();
    }, [])

    return (
        <div className="tasks-container">
            {
                tasks.map(task => (
                    <TodoItem key={task.id} task={task} />
                ))
            }
        </div>
    )
}

export default TodoList
