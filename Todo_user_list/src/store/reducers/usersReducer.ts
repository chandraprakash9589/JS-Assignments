import { UserActionTypes, CREATE_USER_SUCCESS, UPDATE_USER_SUCCESS } from '../types';

export interface User {
  id: number;
  name: string;
  phone: string;
  email: string;
  username: string;
}

export interface UsersState {
  users: User[];
}

const initialState: UsersState = {
  users: [],
};

const usersReducer = (state = initialState, action: UserActionTypes): UsersState => {
  switch (action.type) {
    case CREATE_USER_SUCCESS:
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        users: state.users.map((user) => (user.id === action.payload.id ? action.payload : user)),
      };
    default:
      return state;
  }
};

export default usersReducer;


export {};

// Existing code of usersReducer.ts
// ...
