import React, { createContext, useReducer } from 'react';

import './App.css';

import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'
import Filter from './components/Filter'

import { todoReducer, filterReducer} from './store/reducers'
import initialState from './initialState.json'


export const TodoContext = createContext(null)

function App(props) {
  const [todos, dispatchTodos] = useReducer(todoReducer, initialState)
  const [filter, dispatchFilter] = useReducer(filterReducer, 'ALL')
  

  const filteredTodos = todos.filter(todo => {
    if (filter === 'ALL') {
      return true;
    }

    if (filter === 'COMPLETE' && todo.completed) {
      return true;
    }

    if (filter === 'INCOMPLETE' && !todo.completed) {
      return true;
    }

    return false;
  });
  
  return (
    <div className="App">
      <h2>Yet Another "Todo List" App</h2>
      <TodoContext.Provider value={todos}>
        <TodoForm dispatch={dispatchTodos} />
        <TodoList dispatch={dispatchTodos} todos={filteredTodos} />
        <Filter dispatch={dispatchFilter} />
      </TodoContext.Provider>
    </div>
  );
}

export default App;
