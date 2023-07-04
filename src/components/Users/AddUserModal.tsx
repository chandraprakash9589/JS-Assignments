import React, { Component, SyntheticEvent } from 'react';

interface User {
  id: number;
  name: string;
  phone: string;
  email: string;
  username: string;
  // userId:number;
}

interface AddUserModalProps {
  onAddUser: (user: User) => void;
}

interface AddUserModalState {
  name: string;
  phone: string;
  email: string;
  username: string;
}

class AddUserModal extends Component<AddUserModalProps, AddUserModalState> {
  state: AddUserModalState = {
    name: '',
    phone: '',
    email: '',
    username: '',
  };

  handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    this.setState({ [name]: value } as Pick<AddUserModalState, keyof AddUserModalState>);
  };

  handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    const { name, phone, email, username } = this.state;
    if (name && phone && email && username) {
      const newUser: User = { id: 0, name, phone, email, username };
      this.props.onAddUser(newUser);
      this.setState({ name: '', phone: '', email: '', username: '' });
    }
  };

  render() {
    const { name, phone, email, username } = this.state;

    return (
      <div className="modal fade" id="addUserModal" tabIndex={-1} aria-labelledby="addUserModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="addUserModalLabel">
                Add User
              </h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form onSubmit={this.handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={name}
                    onChange={this.handleInputChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">
                    Phone
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="phone"
                    name="phone"
                    value={phone}
                    onChange={this.handleInputChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={email}
                    onChange={this.handleInputChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">
                    Username
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    name="username"
                    value={username}
                    onChange={this.handleInputChange}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Add
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddUserModal;
