import React, { Component } from 'react';
import { connect } from 'react-redux';
import EditUserModal from './EditUserModal';
import { RootState } from '../../store/types';
import { User } from '../../store/reducers/usersReducer';

interface UserPageProps {
  users: User[];
}

class UserPage extends Component<UserPageProps> {
  render() {
    const { users } = this.props;

    return (
      <div>
        <h1>User Page</h1>
        {users.map((user) => (
          <EditUserModal key={user.id} userId={user.id} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  users: state.users.users,
});

export default connect(mapStateToProps)(UserPage);
