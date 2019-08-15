import React, { useContext } from 'react';
import TodoContext from '../context/todoContext';
import './../App.css';
const TodoItem = ({ task }) => {
    const { title, description, id, completed } = task;
    const todoContext = useContext(TodoContext);
    const { removeTask, setCurrentTask, setCompleted } = todoContext;
    const onDelete = e => {
        removeTask(id);
    }
    const onSetCurrent = e => {
        setCurrentTask(task)
    }
    const onComplete = e => {
        setCompleted(task)
    }
    return (
        <div className="card bg-light">
            <h3 className='text-primary text-left' > {title} </h3>
            <p className={`${completed ? 'completed' : ''}`}> {description}</p>

            <div className="space-between">
                <div>
                    <button className={`${completed ? 'disabled' : ''} btn btn-dark btn-sm`} onClick={onSetCurrent}>Edit</button>
                    <button className='btn btn-danger btn-sm' onClick={onDelete}> Delete</button>
                </div>
                <button className={`${completed ? 'disabled' : ''} btn btn-primary btn-sm`} onClick={onComplete}> Complete</button>
            </div>
        </div>
    )
}

export default TodoItem
