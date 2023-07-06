import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import EditUserModal from './EditUserModal';
import AddUserModal from './AddUserModal';
interface User {
  id: number;
  name: string;
  phone: string;
  email: string;
  username: string;
}

interface UsersState {
  users: User[];
}

class Users extends Component<{}, UsersState> {
  state: UsersState = {
    users: [],
  };

  componentDidMount() {
    this.fetchUsers();
  }

  fetchUsers = () => {
    axios
      .get('http://localhost:3008/users')
      .then((response) => {
        this.setState({ users: response.data });
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
      });
  };

  handleAddUser = (user: User) => {
    axios
      .post('http://localhost:3008/users', user)
      .then((response) => {
        this.setState((prevState) => ({
          users: [...prevState.users, response.data],
          
        }));
      })
      .catch((error) => {
        console.error('Error adding user:', error);
      });
  };

  handleUpdateUser = (user: User) => {
    axios
      .put(`http://localhost:3008/users/${user.id}`, user)
      .then((response) => {
        const updatedUsers = this.state.users.map((u) => (u.id === user.id ? response.data : u));
        this.setState({ users: updatedUsers });
      })
      .catch((error) => {
        console.error('Error updating user:', error);
      });
  };

  handleDeleteUser = (userId: number) => {
    axios
      .delete(`http://localhost:3008/users/${userId}`)
      .then(() => {
        const updatedUsers = this.state.users.filter((user) => user.id !== userId);
        this.setState({ users: updatedUsers });
      })
      .catch((error) => {
        console.error('Error deleting user:', error);
      });
  };

  render() {
    const { users } = this.state;

    return (
      <div>
        <h2>Users</h2>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Username</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.phone}</td>
                <td>{user.email}</td>
                <td>{user.username}</td>
                <td>
                  <Link to={`/users/${user.id}/todos`} className="btn btn-primary btn-sm">
                    View Todos
                  </Link>
                  <Link to={`/users/${user.id}/posts`} className="btn btn-info btn-sm">
                    View Posts
                  </Link>
                  <button onClick={() => this.handleDeleteUser(user.id)} className="btn btn-danger btn-sm">
                    Delete
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary btn-sm"
                    data-bs-toggle="modal"
                    data-bs-target={`#editUserModal-${user.id}`}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#addUserModal"
        >
          Add User
        </button>

        <AddUserModal onAddUser={this.handleAddUser} />
        {users.map((user) => (
          <EditUserModal key={user.id} user={user} onUpdateUser={this.handleUpdateUser} />
        ))}
      </div>
    );
  }
}

export default Users;
