import axios from 'axios';
import { Dispatch } from 'redux';
import { UserActionTypes, CREATE_USER_SUCCESS, UPDATE_USER_SUCCESS, FETCH_USERS_SUCCESS } from '../types';
import { User } from '../reducers/usersReducer';

const API_BASE_URL = 'http://localhost:3008';

export const createUser = (user: User) => {
  return async (dispatch: Dispatch<UserActionTypes>) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/users`, user);
      dispatch({ type: CREATE_USER_SUCCESS, payload: response.data });
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };
};

export const updateUser = (user: User) => {
  return async (dispatch: Dispatch<UserActionTypes>) => {
    try {
      const response = await axios.put(`${API_BASE_URL}/users/${user.id}`, user);
      dispatch({ type: UPDATE_USER_SUCCESS, payload: response.data });
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };
};

export const fetchUsers = () => {
  return async (dispatch: Dispatch<UserActionTypes>) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/users`);
      dispatch({ type: FETCH_USERS_SUCCESS, payload: response.data });
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };
};

export const deleteUser = (id: number) => {
  return async (dispatch: Dispatch<UserActionTypes>) => {
    try {
      await axios.delete(`${API_BASE_URL}/users/${id}`);
      // Optionally, you can dispatch an action to remove the deleted user from the state
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };
};
