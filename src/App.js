import React, { useState } from 'react'
import Header from './component/Header'
import Task from './component/Tasks';
import Footer from './component/Footer';


export default function App() {
  const [displayInput, setDispalyTaskInput] = useState(()=> true)

    function toggleDisplay() {
        setDispalyTaskInput(prev => !prev)
    }
  return (
    <div className="container">
      <Header displayTaskInput={displayInput} trigger={toggleDisplay}/>
      <Task displayInput={displayInput}/>
      <Footer/>
    </div>
  );
}

// class Footer extends React.Component {
//   render() {
//     return  <h1>this is the footer</h1>
//   }
// }

// *********************useState hook*******************

// import React from 'react';
// import { useState } from 'react';

// function def () {
//   console.log('hello')
//   return 5
// }

// function App () {
//   // const [count, setcount] = useState(5)

//   // const [count, setcount] = useState ( () => 4)

//   // const [state, setState] = useState (() => {return {count: def(), theme: 'green'}})

//   const [count, setCount] = useState ( () => def())
//   const [theme, setTheme] = useState ( () => 'green')
  
//   function decrementCount () {
//   //   setcount (prev => prev -1)


//   // setState ( state => { return {...state, count: state.count  -1}})
//   // setState (state => {return {...state, theme: 'blue'}})

//   setCount (prev => prev -1)
//   const themes = ['red', 'green', 'blue', 'yellow', 'black']
//   setTheme (themes[count%5])
//   }

//   function incrementCount () {
//   //   setcount (prev => prev +1)


//   // setState ( state => { return {...state, count: state.count  +1}})
//   // setState (state => {return {...state, theme: 'red'}})


//   setCount (prev => prev +1)
//   const themes = ['red', 'green', 'blue', 'yellow', 'black']
//   setTheme (themes[count%5])
//   }

  
//   // const count = state.count
//   // const theme = state.theme

//   return (
//     <>
//       <button onClick={decrementCount}>-</button>
//       <span>{count} {theme}</span>
//       <button onClick={incrementCount}>+</button>
//     </>
//   )
// }

// *****************end of use state *****************

// *******************useEffect **********************

// import React, { useState, useEffect, useDebugValue} from 'react';

// function App () {

//   const [resourceType, setResourceType] = useState ('posts') 
//   const [items, setItems] = useState ([])

//   useEffect ( ()=>{
//     fetch (`http://jsonplaceholder.typicode.com/${resourceType}`)
//       .then (data => data.json())
//       .then (json => setItems (json))
//   }, [resourceType])

//   return (
//     <>
//       <div>
//         <button onClick={() => setResourceType('posts')}>Posts</button>
//         <button onClick={() => setResourceType('Users')}>Users</button>
//         <button onClick={() => setResourceType('Comments')}>Comments</button>
//       </div>
//       <h1>{resourceType}</h1>
//       {items.map(data => {
//         return <pre key={data.id}>{JSON.stringify(data)}</pre> 
//         })}
//     </>
//   )
// }

// function App () {

//   const [windowWidth, setWindowWidth] = useState(window.innerWidth)

//   const handleResize =  () => {
//     setWindowWidth(window.innerWidth)
//   }

//   useEffect (() => {
//     window.addEventListener('resize', handleResize)
//     console.log("resized")
//     return () => {
//       window.removeEventListener('resize', handleResize)
//     }
//   },[])


//   return (
//     <div>{windowWidth}</div>
//   )
// }

// ********************endl of  useEffect *******************


// *************************use memo*******************

// import React, { useState, useMemo} from 'react';

// function App () {
//   const [number, setNumber] = useState(() => 0)
//   const [dark, setDark] = useState(false)
//   const doubleNumber = useMemo (() => slowFunction(number), [number])
//   const themeStyles = {
//     backgroundColor: dark ? 'black' : 'white',
//     color: dark? 'white' : 'black'
//   }

//   return (
//     <>
//       <input type='number' value={number} onChange={e => setNumber (parseInt(e.target.value))}></input>
//       <button onClick={() => setDark(prev => !prev)}>Change Theme</button>
//       <div style={themeStyles}>{doubleNumber}</div>
//     </>
//   )
// }

// function slowFunction (num) {
//   console.log('Calling Slow Function')
//   for( let i=0; i <= 100000000; i++) {}
//   return num*2
// }

// ***********************useRef***********************

// import React, { useEffect, useState, useRef} from 'react'

// function App () {
//   const [name, setName] = useState(() => '')
//   // const renderCount = useRef(1)
//   // useEffect(() => {renderCount.current += 1})
  
//   // const inputref = useRef()
//   // function focuss() {
//   //   inputref.current.focus()
//   // }

//   const prevName = useRef('')
//   useEffect(() => {prevName.current = name}, [name])

//   return (
//     <>
//       {/* <input value={name} onChange={e => setName(e.target.value)} /> */}

//       {/* <input ref={inputref} value={name} onChange={e => setName(e.target.value)} /> */}

//       <input value={name} onChange={e => setName(e.target.value)} />

//       {/* <div>My name is {name}</div> */}
//       <div>My name is {name}  it used to be {prevName.current}</div>

//       {/* <div>{renderCount.current}</div> */}
//       {/* <button onClick={focuss}>Focus on input</button> */}
//     </>
//   )
// }

// ******************end of useRef**********************

// **********************useContext*********************


// import React, { useState, useRef, useContext, useEffect } from 'react'
// import ContextComponent from './FunctionContextComponent'
// import ClassContext from './ClassContextComponent'


// export const ThemeContext = React.createContext()

// function App () {
//   const [darkTheme, setDarkTheme] = useState(true)

//   function toggleTheme() {
//     setDarkTheme(prev => !prev)
//     console.log(darkTheme)
//   }

//   return(
//     <ThemeContext.Provider value={darkTheme}>
//       <button onClick={toggleTheme} >toggle Theme</button>
//       <ContextComponent></ContextComponent>
//       <ClassContext></ClassContext>
//     </ThemeContext.Provider>
//   )
// }

// export default App;

// import React from 'react'
// import ContextComponent from './FunctionContextComponent'
// import { ThemeProvider } from './ThemeContext'


// function App () {
//   return(
//     <ThemeProvider>
//       <ContextComponent />
//     </ThemeProvider>
//   )
// }

// export default App;

// ***************************end of useContext************


// *************************useReducer*********************

// import React from 'react';
// import { useState, useReducer } from 'react';

// const ACTION = {
//   INCREMENT: 'increment',
//   DECREMENT: 'decrement',
//   RESET: 'reset'
// }

// function reducer(state, action) {
//   switch(action.type) {
//     case ACTION.INCREMENT:
//       return {count: state.count +1}
//     case ACTION.DECREMENT:
//       return {count: state.count -1}
//     case ACTION.RESET:
//       return {count: 0}
//     default:
//       return state
//   }
// }

// function App () {
//   const [state, dispatch] = useReducer(reducer, {count: 0})
//   const [count, setcount] = useState(0)

//   function decrementCount () {
//     // setcount (prev => prev -1)
//     dispatch({type: ACTION.DECREMENT})
//   }

//   function incrementCount () {
//     // setcount (prev => prev +1)
//     dispatch({type: ACTION.INCREMENT})
//   }

//   const size = {
//     'font-size': '100px',
//     'min-width': '150px'
//   }
//   return (
//     <>
//       <button style={size} onClick={decrementCount}>-</button>
//       <span style={size}>{state.count}</span>
//       <button style={size} onClick={incrementCount}>+</button>
//     </>
//   )
// }

// export default App


// import React, { useState, useReducer} from 'react'
// import Todo from './Todo'

// export const ACTIONS ={
//   ADD_TODO: 'addTodo',
//   TOGGLE_TODO: 'toggleTodo',
//   DELETE_TODO: 'deleteTodo'
// }

// function reducer(todo, action) {
//   switch (action.type) {
//     case ACTIONS.ADD_TODO:
//       return [...todo, newTodo(action.payload.name)]
//     case ACTIONS.TOGGLE_TODO:
//       return todo.map(data => {
//         if (data.id === action.payload.id) {
//           return {...data, complete: !data.complete}
//         }
//         return data
//       })
//     case ACTIONS.DELETE_TODO:
//       return todo.filter(data => data.id !== action.payload.id)
//   }
// }

// function newTodo(name) {
//   return { id: Date.now(), name: name, complete: false}
// }

// export default function App() {
//   const [todo, dispatch] = useReducer(reducer, [])
//   const [name, setName] = useState(() => '')
//   function handleSubmit(e) {
//     e.preventDefault()
//     dispatch({type: ACTIONS.ADD_TODO, payload: {name: name}})
//     setName('')
//     console.log(todo)
//   }

//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <input type='text' value={name} onChange={e => setName(e.target.value)}/>
//       </form>
//       {todo.map(data => <Todo key={data.id} todo={data} dispatch={dispatch}/>)}
//     </>
//   )
// }


// import React, {useState, useReducer} from 'react'
// import TodoList from './Todo'

// export const ACTION = {
//   ADD_TODO: 'addTodo',
//   DELETE_TODO: 'deleteTodo',
//   TOGGLE_TODO: 'toggleTodo'
// }

// function reducer(todo, actions) {
//   switch(actions.type) {
//     case ACTION.ADD_TODO:
//       return [...todo, {id: Date.now(), name:actions.payload.name, complete: false}]
//     case ACTION.TOGGLE_TODO:
//       return todo.map(data => {
//         if (data.id === actions.payload.id) {
//           return { ...data, complete: !data.complete}
//         }
//         return data
//       })
//     case ACTION.DELETE_TODO:
//       return todo.filter(data => data.id !== actions.payload.id)
//     default:
//       return todo
//   }
// }

// export default function App() {
//   const [name, setName] = useState(() => '')
//   const [todo, dispatch] = useReducer(reducer, [])
//   function handleInput(e) {
//     e.preventDefault()
//     dispatch({type: ACTION.ADD_TODO, payload: {name: name}})
//     setName('')
//   }
//   return (
//     <>
//       <form onSubmit={handleInput}>
//         <input value={name} onChange={(e) => setName(e.target.value)} />
//       </form>
//       {todo.map(data => <TodoList key={data.id} todo={data} dispatch={dispatch}/>)}
//     </>
//   )
// }

// **********end of useReducer***************

// import React from "react";
// import Input from "./FunctionContextComponent";

// export default function App() {
//     return (
//         <Input/>
//     )
// }w