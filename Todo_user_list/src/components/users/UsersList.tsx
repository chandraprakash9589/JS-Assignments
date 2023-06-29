import React from 'react';
import { Link } from 'react-router-dom';

interface User {
  id: number;
  name: string;
}

interface UserListProps {
  users: User[];
}

const UserList: React.FC<UserListProps> = ({ users }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>
              <Link to={`/users/${user.id}/todos`}>View Todos</Link>
              <Link to={`/users/${user.id}/posts`}>View Posts</Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserList;
