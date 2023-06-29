import React, { useState } from 'react';
import Modal from '../common/Modal';

interface User {
  id: number;
  name: string;
  phone: string;
  email: string;
  username: string;
}

interface UserEditModalProps {
  user: User;
  onSubmit: (user: User) => void;
}

const UserEditModal: React.FC<UserEditModalProps> = ({ user, onSubmit }) => {
  const [name, setName] = useState(user.name);
  const [phone, setPhone] = useState(user.phone);
  const [email, setEmail] = useState(user.email);
  const [username, setUsername] = useState(user.username);
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = () => {
    const editedUser: User = { ...user, name, phone, email, username };
    onSubmit(editedUser);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Edit User</button>
      <Modal isOpen={isOpen} onClose={closeModal}>
        <h2>Edit User</h2>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Phone"
        />
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
        <button onClick={handleSubmit}>Update</button>
      </Modal>
    </>
  );
};

export default UserEditModal;
