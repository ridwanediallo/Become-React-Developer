import React from 'react'
import TodoListItem from './TodoListItem'
import NewTodoForm from './NewTodoForm'
import './TodoList.css'

export default function TodoList({todos = [{text: 'Hello'}]}) {
  return (
    <div className="list-wrapper">
      <NewTodoForm />
        {todos.map(todo => <TodoListItem todo={todo} />)}
    </div>
  )
}

