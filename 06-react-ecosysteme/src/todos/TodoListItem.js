import React from 'react';
import './TodoListItem.css';

export default function TodoListItem({ todo }) {
  return (
    <div className="todo-item-container">
      <h3>{todo.text}</h3>
      <div className="buttons-container">
        <div className="completed-button">Mark as complete</div>
        <div className="remove-button">Remove</div>
      </div>
    </div>
  );
}

