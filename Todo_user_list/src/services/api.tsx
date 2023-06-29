export interface User {
  id: number;
  name: string;
  phone: string;
  email: string;
  username: string;
}

const BASE_URL = 'http://localhost:3008';

// Fetch Users
export const fetchUsersAPI = async () => {
  const response = await fetch(`${BASE_URL}/users`);
  const data = await response.json();
  return data;
};

// Create User
export const createUserAPI = async (user: User) => {
  const response = await fetch(`${BASE_URL}/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });
  const data = await response.json();
  return data;
};

// Update User
export const updateUserAPI = async (user: User) => {
  const response = await fetch(`${BASE_URL}/users/${user.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });
  const data = await response.json();
  return data;
};

