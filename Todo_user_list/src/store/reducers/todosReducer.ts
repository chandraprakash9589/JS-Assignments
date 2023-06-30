import { TodoActionTypes, FETCH_TODOS_SUCCESS } from '../types';

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export interface TodosState {
  todos: Todo[];
}

const initialState: TodosState = {
  todos: [],
};

const todosReducer = (state = initialState, action: TodoActionTypes): TodosState => {
  switch (action.type) {
    case FETCH_TODOS_SUCCESS:
      return {
        ...state,
        todos: action.payload,
      };
    default:
      return state;
  }
};

export default todosReducer;
export {};

// Existing code of usersReducer.ts
// ...
