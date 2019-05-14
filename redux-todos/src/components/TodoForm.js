import React, { useState, useCallback, useEffect } from 'react'
import * as actions from '../store/actions'
import { useSelector, useDispatch } from 'react-redux'

// function useLogger(when=3000, deps=[]) {
//     let interval = useCallback(setInterval(
//         useCallback(useSelector(store => store.todos), deps)
//     , when))

//     useEffect(() => [interval, window.clearInterval.bind(window)])
// }

export default function TodoForm(props) {
    const [newTodo, setNewTodo] = useState([])
    const dispatch = useDispatch()
    // const [logStore, stopLoggingStore] = useLogger()

    function handleSubmit(evt) {
        evt.preventDefault()
        dispatch(actions.addTodo(newTodo))
        setNewTodo('')

        // logStore()
        
    }
    
    function handleChange(evt) {
        setNewTodo(evt.target.value)
    }

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Enter a new todo item"
                onChange={handleChange}
                value={newTodo}
            />
            <button role="submit">+</button>
        </form>
    )
}