import React, { useState, useEffect, useMemo } from 'react';
import {v4 as uuidv4} from 'uuid';
import './app.css';

import Tasks from './components/Task/Tasks'
import AddTask from './components/addTask/AddTask'

import toast, { Toaster } from 'react-hot-toast';



const App = () => {
  const [tasks, setTasks] = useState([
      
  ])

  useEffect(() =>{
    const taskStorage = localStorage.getItem('tasks');
    if(taskStorage){
        setTasks(JSON.parse(taskStorage));
    }
  }, [])
  
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map ((task) => {
      if (task.id === taskId) 
      return {
        ...task, completed: !task.completed }

        return task;
    });
    setTasks(newTasks);
  };

  const handleTaskAddition = (taskTitle) => {
    const newTasks = [
      ...tasks, 
      {
        title: taskTitle,
        id: uuidv4(),
        completed: false,
      },
    ];
    setTasks(newTasks);
  }

  const handleTaskDeletion = (taskId) => {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
    toast.success('Excluído');
  };

  return (
  <>
  <Toaster position='top-right'/>
    <div className='container'>
      <h2>Lista de Tarefas </h2>
      
      <AddTask handleTaskAddition={handleTaskAddition}/> 
      <Tasks tasks={tasks} handleTaskClick={handleTaskClick} handleTaskDeletion={handleTaskDeletion} />
    </div>
    
  </>
  );
};

export default App;
