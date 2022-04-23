import React from 'react'
import {ACTIONS} from './Tasks'
import cancel from '../cancel.png'

export default function DisplayTask({tasks, dispatch}) {
    return (
        <div style={{borderLeft: tasks.highlight? '3px solid green' : '0px solid green'}} className='tiles'>
            <div className='displayTask' onClick={() => dispatch({type: ACTIONS.TOGGLE_TASK, payload: { id: tasks.id}})}>
                <div className='task' >
                    <h3>{tasks.task}</h3> 
                    <p>{tasks.date}</p> 
                </div>
            </div>
            <img onClick={() => dispatch({type: ACTIONS.DELETE_TASK, payload: { id: tasks.id}})} src={cancel} className='cancel' alt='CANCEL' width='15px'/>
        </div>
    )
}