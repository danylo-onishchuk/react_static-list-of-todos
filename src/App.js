import React from 'react';
import './App.scss';
import { TodoList } from './components/TodoList';
import todos from './api/todos';
import users from './api/users';

const preparedTodos = todos.map(item => ({
  ...item,
  user: users.find(user => user.id === item.userId),
}));

export function App() {
  return (
    <div className="App">
      <h1>Static list of todos</h1>
      <p>
        <span>Todos: </span>
        {todos.length}
      </p>

      <p>
        <span>Users: </span>
        {users.length}
      </p>
      <TodoList preparedTodos={preparedTodos} />
    </div>
  );
}
