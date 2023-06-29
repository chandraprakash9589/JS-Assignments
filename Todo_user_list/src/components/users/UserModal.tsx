import React, { useState } from 'react';
import Modal from '../common/Modal';

interface User {
  name: string;
  phone: string;
  email: string;
  username: string;
}

interface UserModalProps {
  onSubmit: (user: User) => void;
}

const UserModal: React.FC<UserModalProps> = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = () => {
    const user: User = { name, phone, email, username };
    onSubmit(user);
    closeModal();
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button onClick={openModal}>Create User</button>
      <Modal isOpen={isOpen} onClose={closeModal}>
        <h2>Create User</h2>
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
        <button onClick={handleSubmit}>Create</button>
      </Modal>
    </>
  );
};

export default UserModal;
