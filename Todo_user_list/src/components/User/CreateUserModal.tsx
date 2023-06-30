import React, { Component, FormEvent } from 'react';
import { connect } from 'react-redux';

import { createUser } from '../../store/actions/usersActions';
import { User } from '../../store/reducers/usersReducer';

interface CreateUserModalProps {
  createUser: (user: User) => void;
}

interface CreateUserModalState {
  name: string;
  phone: string;
  email: string;
  username: string;
}

class CreateUserModal extends Component<CreateUserModalProps, CreateUserModalState> {
  state: CreateUserModalState = {
    name: '',
    phone: '',
    email: '',
    username: '',
  };

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      [e.target.name]: e.target.value,
    } as Pick<CreateUserModalState, keyof CreateUserModalState>);
  };

  handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const { name, phone, email, username } = this.state;
    const newUser: User = {
      id: Date.now(),
      name,
      phone,
      email,
      username,
    };
    this.props.createUser(newUser);
    this.setState({
      name: '',
      phone: '',
      email: '',
      username: '',
    });
  };

  render() {
    const { name, phone, email, username } = this.state;

    return (
      <div>
        <h2>Create User</h2>
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
          <button type="submit">Create</button>
        </form>
      </div>
    );
  }
}

export default connect(null, { createUser })(CreateUserModal);
