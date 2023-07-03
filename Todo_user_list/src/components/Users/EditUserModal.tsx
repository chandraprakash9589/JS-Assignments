import React, { Component, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';

interface User {
  id: number;
  name: string;
  phone: string;
  email: string;
  username: string;
}

interface EditUserModalProps {
  user: User;
  onUpdateUser: (user: User) => void;
}

interface EditUserModalState {
  name: string;
  phone: string;
  email: string;
  username: string;
}

class EditUserModal extends Component<EditUserModalProps, EditUserModalState> {
  state: EditUserModalState = {
    name: this.props.user.name,
    phone: this.props.user.phone,
    email: this.props.user.email,
    username: this.props.user.username,
  };

  handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    this.setState({ [name]: value } as Pick<EditUserModalState, keyof EditUserModalState>);
  };

  handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const { name, phone, email, username } = this.state;
    const { user } = this.props;

    const updatedUser: User = {
      ...user,
      name,
      phone,
      email,
      username,
    };

    this.props.onUpdateUser(updatedUser);
  };

  render() {
    const { name, phone, email, username } = this.state;
    const { user } = this.props;

    return (
      <div
        className="modal fade"
        id={`editUserModal-${user.id}`}
        tabIndex={-1}
        aria-labelledby={`editUserModalLabel-${user.id}`}
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id={`editUserModalLabel-${user.id}`}>
                Edit User
              </h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">
              <form onSubmit={this.handleSubmit}>
                <div className="mb-3">
                  <label htmlFor={`editName-${user.id}`} className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id={`editName-${user.id}`}
                    name="name"
                    value={name}
                    onChange={this.handleInputChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor={`editPhone-${user.id}`} className="form-label">
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="form-control"
                    id={`editPhone-${user.id}`}
                    name="phone"
                    value={phone}
                    onChange={this.handleInputChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor={`editEmail-${user.id}`} className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id={`editEmail-${user.id}`}
                    name="email"
                    value={email}
                    onChange={this.handleInputChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor={`editUsername-${user.id}`} className="form-label">
                    Username
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id={`editUsername-${user.id}`}
                    name="username"
                    value={username}
                    onChange={this.handleInputChange}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Update
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EditUserModal;
