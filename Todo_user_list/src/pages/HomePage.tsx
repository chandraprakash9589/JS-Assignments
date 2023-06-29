import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchUsersAPI, User } from '../services/api';

interface UserListProps {
  users: User[];
}

const UserList: React.FC<UserListProps> = ({ users }) => (
  <ul>
    {users.map((user) => (
      <li key={user.id}>{user.name}</li>
    ))}
  </ul>
);

const HomePage: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        setLoading(true);
        const response = await fetchUsersAPI();
        
        if (response.ok) {
          const usersData = await response.json();
          setUsers(usersData);
        } else {
          throw new Error(`Error ${response.status}: ${response.statusText}`);
        }
      } catch (error) {
        console.error('Error fetching users:', error);
      } finally {
        setLoading(false);
      }
    };

    getUsers();
  }, []);

  return (
    <div>
      <h1>User List</h1>
      <Link to="/users/create">Create User</Link>
      {loading ? <p>Loading...</p> : <UserList users={users} />}
    </div>
  );
};

export default HomePage;
