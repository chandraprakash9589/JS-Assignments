import React, { Component, FormEvent, ChangeEvent } from 'react';
import { connect } from 'react-redux';

import { updateUser } from '../../store/actions/usersActions';
import { RootState } from '../../store/types';
import { User } from '../../store/reducers/usersReducer';

interface EditUserModalProps {
  userId: number;
  users: User[];
  updateUser: (user: User) => void;
}

interface EditUserModalState {
  name: string;
  phone: string;
  email: string;
  username: string;
}

class EditUserModal extends Component<EditUserModalProps, EditUserModalState> {
  state: EditUserModalState = {
    name: '',
    phone: '',
    email: '',
    username: '',
  };

  componentDidMount() {
    const { userId, users } = this.props;
    const user = users.find((user) => user.id === userId);
    if (user) {
      this.setState({
        name: user.name,
        phone: user.phone,
        email: user.email,
        username: user.username,
      });
    }
  }

  handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      [e.target.name]: e.target.value,
    } as Pick<EditUserModalState, keyof EditUserModalState>);
  };

  handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const { userId, updateUser } = this.props;
    const { name, phone, email, username } = this.state;
    const updatedUser: User = {
      id: userId,
      name,
      phone,
      email,
      username,
    };
    updateUser(updatedUser);
  };

  render() {
    const { name, phone, email, username } = this.state;

    return (
      <div>
        <h2>Edit User</h2>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="name" value={name} onChange={this.handleChange} placeholder="Name" required />
          <input type="text" name="phone" value={phone} onChange={this.handleChange} placeholder="Phone" required />
          <input type="email" name="email" value={email} onChange={this.handleChange} placeholder="Email" required />
          <input
            type="text"
            name="username"
            value={username}
            onChange={this.handleChange}
            placeholder="Username"
            required
          />
          <button type="submit">Update</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  users: state.users.users,
});

export default connect(mapStateToProps, { updateUser })(EditUserModal);
