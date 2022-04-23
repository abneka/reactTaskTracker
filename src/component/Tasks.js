// const tasks = [
//     {
//         id : 1,
//         text : 'Doctors Appointment',
//         day : 'Feb 5th at 2:30pm',
//         reminder : true,
//     },
//     {
//         id : 3,
//         text : 'Meeting at school ',
//         day : 'Feb 6th at 1:30pm',
//         reminder : true,
//     },
//     {
//         id : 3,
//         text : 'Food Shopping',
//         day : 'Feb 5th at 2:30pm',
//         reminder : false,
//     },

// ]

import React, {useState, useReducer} from 'react'
import Button from './Button'
import DisplayTask from './DisplayTasks'

export const ACTIONS = {
    ADD_TASK : 'addTask',
    TOGGLE_TASK : 'toggleTask',
    DELETE_TASK : 'deleteTask'
}

function reducer(tasks, actions) {
    switch(actions.type) {
        case ACTIONS.ADD_TASK:
            return [...tasks, {id: Date.now(), task: actions.payload.task, date: actions.payload.date, highlight: false}]
        case ACTIONS.TOGGLE_TASK:
            return tasks.map(task => {
                if(task.id === actions.payload.id){
                    return {...task, highlight: !task.highlight}
                }
                return task
            })
        case ACTIONS.DELETE_TASK:
            return tasks.filter(task => task.id !== actions.payload.id)
        default:
            return tasks
    }
}

export default function Task({displayInput})  {
    const [tasks, dispatch] = useReducer(reducer, [])
    const [task, setTask] = useState(() => '')
    const [date, setDate] = useState(() => '')

    function handleInput(e) {
        e.preventDefault()
        if (task !== '' && date !== '') {
            dispatch({type: ACTIONS.ADD_TASK, payload: {task: task, date: date}})
            setTask('')
            setDate('')
        }
    }

    return (
        <div className='tasks'>
            <div style={{display: displayInput? 'flex' : 'none'}} className='tasksInput'>
                <form onSubmit={handleInput}>
                    <h3>Task</h3>
                    <input placeholder='Add Task' value={task} onChange={e => setTask(e.target.value)} />
                </form>
                <form onSubmit={handleInput}>
                    <h3>Day and Time</h3>
                    <input type='date' value={date} onChange={e => setDate(e.target.value)} />
                </form>
                <Button width={'85%'} text='Save Task' trigger={handleInput}/>
            </div>
            <div style={{display: tasks.length? 'none' : displayInput? 'none' : 'block'}}>
                <h3 style={{fontWeight: '100', textAlign: 'left', margin: '20px'}}>No tasks to show</h3>
            </div>
            {tasks.map(task => <DisplayTask key={task.id} tasks={task} dispatch={dispatch}/>)}
        </div> 
    )
}