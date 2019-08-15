import React, { useContext, useState, useEffect } from 'react'
import TodoContext from '../context/todoContext'
import './../App.css';

const AddTask = () => {
    const todoContext = useContext(TodoContext);
    const { addTask, currentTask, updateTask, clearCurrentTask } = todoContext;
    const [task, setTask] = useState({
        title: '',
        description: '',
        completed: false
    });

    useEffect(() => {
        if (currentTask) {
            setTask(currentTask)
        } else {
            clear()
        }
    }, [todoContext, currentTask])


    const { title, description } = task;


    const onChange = e => {
        setTask({ ...task, [e.target.name]: e.target.value });
    }

    const onSubmit = e => {
        e.preventDefault();
        if (currentTask) {
            updateTask(task);
            clearCurrentTask();
        } else {
            addTask(task);
        }
        clear()
    };

    const clear = () => {
        setTask({
            title: '',
            description: '',
            completed: false
        })
    }
    return (
        <form onSubmit={onSubmit}>
            <input
                type='text'
                placeholder='title'
                name='title'
                required
                value={title}
                onChange={onChange}
            />
            <textarea
                type='text'
                placeholder='description'
                name='description'
                value={description}
                onChange={onChange}
            />

            <div>
                <input
                    type='submit'
                    value={currentTask ? 'Update Task' : 'Add Task'}
                    className='btn btn-primary btn-block'
                />
            </div>
            {currentTask && (
                <div>
                    <button className='btn btn-light btn-block' onClick={() => { clearCurrentTask() }}>Cancel</button>
                </div>
            )}
        </form >
    )
}

export default AddTask
