import axios from "axios";
import { ThunkAction } from "redux-thunk";

import { Todo } from "../reducers/todosReducer";
import { FETCH_TODOS_SUCCESS } from "../types";
import { RootState } from "../types";
export const fetchTodosSuccess = (todos: Todo[]) => ({
  type: FETCH_TODOS_SUCCESS,
  payload: todos,
});

export const fetchTodos =
  (userId: number): ThunkAction<void, RootState, unknown, any> =>
  async (dispatch) => {
    try {
      const response = await axios.get(
        `http://localhost:3008/users/${userId}/todos`
      );
      dispatch(fetchTodosSuccess(response.data));
    } catch (error) {
      console.log("Error:", error);
    }
  };
