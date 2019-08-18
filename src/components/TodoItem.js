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
        <div className="card container">
            <h3 className='text-left' > {title} </h3>
            <p className={`${completed ? 'completed' : ''} task-description`}> {description}</p>

            <div className="space-between">
                <div>
                    { !completed && (
                        <div>
                            <button className='flex btn btn-edit' onClick={onSetCurrent}>Edit</button>
                            <button className='flex btn btn-complete' onClick={onComplete}> Complete</button>
                        </div>
                    )}
                </div>
                <button className='btn btn-delete' onClick={onDelete}> Delete</button>
            </div>
        </div>
    )
}

export default TodoItem
