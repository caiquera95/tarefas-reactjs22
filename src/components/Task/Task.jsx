import React from 'react';
import './tasks.css';
import { IoClose, IoCheckmarkSharp, IoCheckmarkDone } from 'react-icons/io5'


const Task = ({task, handleTaskClick, handleTaskDeletion}) => {
    return (  
        <div className='task-container' 
        style={task.completed ? { 'backgroundColor': '#3d8a8b' } : {} }
        >
            <div className='task-title' >
                <span>{task.title}</span>
            </div>

            <div className='buttons-container'>
                <button 
                // style={task.completed ? { color: 'red' } : {} }
                className='btns' 
                onClick={() => handleTaskClick(task.id)}>
                    
                    {task.completed ? <IoCheckmarkDone/> :  <IoCheckmarkSharp />}
                </button >
                <button className='btns' onClick={() => handleTaskDeletion(task.id)}><IoClose /></button >
            </div>
        </div>
    );
}
 
export default Task;