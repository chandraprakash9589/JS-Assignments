import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchUsers, deleteUser } from '../../store/actions/usersActions';

import { RootState } from '../../store/types';
import { User } from '../../store/reducers/usersReducer';

interface UserListProps {
  users: User[];
  fetchUsers: () => void;
  deleteUser: (id: number) => void;
}

class UserList extends Component<UserListProps> {
  componentDidMount() {
    this.props.fetchUsers();
  }

  handleDeleteUser = (id: number) => {
    this.props.deleteUser(id);
  };

  render() {
    const { users } = this.props;

    return (
      <div>
        <h2>User List</h2>
        <Link to="/users/new">Create User</Link>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <Link to={`/users/${user.id}/posts`}>{user.name}</Link>
              <button onClick={() => this.handleDeleteUser(user.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  users: state.users.users,
});

export default connect(mapStateToProps, { fetchUsers, deleteUser })(UserList);
