import React, { Component } from 'react';

interface TodoListProps {
  todos: Todo[];
}

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

class TodoList extends Component<TodoListProps> {
  render() {
    const { todos } = this.props;

    return (
      <div>
        <h2>Todos</h2>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              {todo.title} - {todo.completed ? 'Completed' : 'Incomplete'}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoList;
export {}