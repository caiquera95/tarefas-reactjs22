import React, { useState } from 'react';
import './addtask.css';
import Button from './Button'

import {HiPlus} from 'react-icons/hi'

import toast, { Toaster } from 'react-hot-toast';


const AddTask = ({handleTaskAddition}) => {

    const [inputData, setInputData] = useState('');

    const handleInputChange = (e) => {
        setInputData(e.target.value)
    }

    const handleAddTaskClick = (e) => {
        e.preventDefault();
        if(inputData === ''){
            // alert('Insira alguma Cidade')
            toast('Insira alguma Tarefa', {
                icon: 'ℹ️',
              });
            return;
        }
        handleTaskAddition(inputData)
        setInputData('')
    }

    return ( 
        <div className='add-task-container'>
        <Toaster position='top-right'/>

            <form>
            <input onChange={handleInputChange} 
            value={inputData} 
            type='text' 
            placeholder='Informe uma tarefa'
            />

            <Button onClick={handleAddTaskClick}><HiPlus/></Button>
            </form>
        </div>
    );
}
 
export default AddTask;