import axios from "axios";
import { useId } from "react";
import { Dispatch } from "redux";
// import Posts from "../../components/Post/Post";
import {
  FETCH_USERS_SUCCESS,
  ADD_USER_SUCCESS,
  UPDATE_USER_SUCCESS,
  DELETE_USER_SUCCESS,
  FETCH_POSTS_SUCCESS,
  FETCH_TODOS_SUCCESS,
  FETCH_COMMENTS_SUCCESS 
} from "../actionsType/actionsType";




// Action Creators
export const fetchUsersSuccess = (users: any) => ({
  type: FETCH_USERS_SUCCESS,
  payload: users,
});

export const addUserSuccess = (user: any) => ({
  type: ADD_USER_SUCCESS,
  payload: user,
});

export const updateUserSuccess = (user: any) => ({
  type: UPDATE_USER_SUCCESS,
  payload: user,
});

export const deleteUserSuccess = (userId: any) => ({
  type: DELETE_USER_SUCCESS,
  payload: userId,
});

// Thunk to fetch users
export const fetchUsers = () => {
  return (dispatch: any) => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        dispatch({
          type: FETCH_USERS_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        // Handle error
      });
  };
};

// Thunk to add user
export const addUser = (user: any) => {
  return (dispatch: any) => {
    axios
      .post("https://jsonplaceholder.typicode.com/users", user)
      .then((response) => {
        dispatch({
          type: updateUserSuccess,
          payload: response.data,
        });
      })
      .catch((error) => {
        console.error("Error adding user:", error);
      });
  };
};

// Thunk to update user
export const updateUser = (user: any) => {
  return (dispatch: any) => {
    axios
      .put(`https://jsonplaceholder.typicode.com/users/${user.id}`, user)
      .then((response) => {
        dispatch(updateUserSuccess(response.data));
      })
      .catch((error) => {
        console.error("Error updating user:", error);
      });
  };
};

// Thunk to delete user
export const deleteUser = (userId: any) => {
  return (dispatch: any) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then(() => {
        dispatch(deleteUserSuccess(userId));
      })
      .catch((error) => {
        console.error("Error deleting user:", error);
      });
  };
};

//postsActions



export const fetchPostsSuccess = (posts: any) => {
  return {
    type: FETCH_POSTS_SUCCESS,
    payload: posts,
  };
};

export const fetchPosts = (userId: any) => {
  return (dispatch: Dispatch) => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
      .then((response) => {
        dispatch(fetchPostsSuccess(response.data));
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });
  };
};




//todo

export const fetchTodosSuccess = (posts: any)=> ({
  type: FETCH_TODOS_SUCCESS,
  payload: posts,
});

export const fetchTodos = (userId: number) => {
  return (dispatch: Dispatch) => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${userId}/todos`)
      .then((response) => {
        dispatch(fetchTodosSuccess(response.data));
      })
      .catch((error) => {
        console.error("Error fetching todos:", error);
      });
  };
};

// commnets

export const fetchCommentsSuccess = (comments: any)=> ({
  type: FETCH_COMMENTS_SUCCESS,
  payload: comments,
});

export const fetchComments = (postId: any) => {
  return (dispatch: Dispatch) => {
    axios
      .get(`https://jsonplaceholder.typicode.com/comments/${useId}/comments`)
      .then((response) => {
        dispatch(fetchCommentsSuccess(response.data));
      })
      .catch((error) => {
        console.error("Error fetching comments:", error);
      });
  };
};
