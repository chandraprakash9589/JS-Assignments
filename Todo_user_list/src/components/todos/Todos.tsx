import React from 'react';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

interface TodosProps {
  todos: Todo[];
}

const Todos: React.FC<TodosProps> = ({ todos }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Completed</th>
        </tr>
      </thead>
      <tbody>
        {todos.map((todo) => (
          <tr key={todo.id}>
            <td>{todo.id}</td>
            <td>{todo.title}</td>
            <td>{todo.completed ? 'Yes' : 'No'}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Todos;
