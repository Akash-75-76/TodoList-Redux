// src/components/Todo.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTodo, markAsDone } from '../features/todo/todoSlice';
import AddForm from './AddForm';

export default function Todo() {
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleMarkAsDone = (id) => {
    dispatch(markAsDone(id));
  };

  return (
    <>
      <AddForm />
      <h3>Todos</h3>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.task} - {todo.isDone ? "✅ Done" : "❌ Not Done"}
            <button onClick={() => handleMarkAsDone(todo.id)} style={{ marginLeft: '10px' }}>
              ✅ Mark as Done
            </button>
            <button onClick={() => handleDelete(todo.id)} style={{ marginLeft: '10px' }}>
              🗑️ Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
