// import { combineReducers } from 'redux';
// import axios from 'axios';
// import { Link } from 'react-router-dom';

// import {
//   FETCH_USERS_SUCCESS,
//   ADD_USER_SUCCESS,
//   UPDATE_USER_SUCCESS,
//   DELETE_USER_SUCCESS,
//   FETCH_POSTS_SUCCESS,
//   FETCH_COMMENTS_SUCCESS,
// } from '../actionsType/actionsType';

// interface User {
//   id: any;
//   name: string;
//   phone: string;
//   email: string;
//   username: string;
// }

// interface UserState {
//   users: User[];
// }

// interface FetchUsersSuccessAction {
//   type: typeof FETCH_USERS_SUCCESS;
//   payload: User[];
// }

// interface AddUserSuccessAction {
//   type: typeof ADD_USER_SUCCESS;
//   payload: User;
// }

// interface UpdateUserSuccessAction {
//   type: typeof UPDATE_USER_SUCCESS;
//   payload: User;
// }

// interface DeleteUserSuccessAction {
//   type: typeof DELETE_USER_SUCCESS;
//   payload: number;
// }

// type UserActionTypes =
//   | FetchUsersSuccessAction
//   | AddUserSuccessAction
//   | UpdateUserSuccessAction
//   | DeleteUserSuccessAction;

// interface Post {
//   id: number;
//   userId: number;
//   title: string;
//   body: string;
// }

// interface TodoState {
//   posts: Post[];
// }

// interface FetchPostsSuccessAction {
//   type: typeof FETCH_POSTS_SUCCESS;
//   payload: Post[];
// }

// type TodoActionTypes = FetchPostsSuccessAction;

// interface Comment {
//   id: number;
//   postId: number;
//   name: string;
//   email: string;
//   body: string;
// }

// interface CommentsState {
//   comments: Comment[];
// }

// interface FetchCommentsSuccessAction {
//   type: typeof FETCH_COMMENTS_SUCCESS;
//   payload: Comment[];
// }

// type CommentActionTypes = FetchCommentsSuccessAction;

// const initialUserState: UserState = {
//   users: [],
// };

// const initialTodoState: TodoState = {
//   posts: [],
// };

// const initialCommentsState: CommentsState = {
//   comments: [],
// };

// export const userReducer = (state: UserState = initialUserState, action: UserActionTypes): UserState => {
//   switch (action.type) {
//     case FETCH_USERS_SUCCESS:
//       return {
//         ...state,
//         users: action.payload,
//       };
//     case ADD_USER_SUCCESS:
//       return {
//         ...state,
//         users: [...state.users, action.payload],
//       };
//     case UPDATE_USER_SUCCESS:
//       return {
//         ...state,
//         users: state.users.map((user) => (user.id === action.payload.id ? action.payload : user)),
//       };
//     case DELETE_USER_SUCCESS:
//       return {
//         ...state,
//         users: state.users.filter((user) => user.id !== action.payload),
//       };
//     default:
//       return state;
//   }
// };

// export const todoReducer = (state: TodoState = initialTodoState, action: TodoActionTypes): TodoState => {
//   switch (action.type) {
//     case FETCH_POSTS_SUCCESS:
//       return {
//         ...state,
//         posts: action.payload,
//       };
//     default:
//       return state;
//   }
// };

// export const commentsReducer = (state: CommentsState = initialCommentsState, action: CommentActionTypes): CommentsState => {
//   switch (action.type) {
//     case FETCH_COMMENTS_SUCCESS:
//       return {
//         ...state,
//         comments: action.payload,
//       };
//     default:
//       return state;
//   }
// };



// export const fetchPosts = (userId: string) => {
//   return (dispatch: any) => {
//     axios
//       .get(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
//       .then((response) => {
//         dispatch({
//           type: FETCH_POSTS_SUCCESS,
//           payload: response.data,
//         });
//       })
//       .catch((error) => {
//         console.error('Error fetching posts:', error);
//       });
//   };
// };




const initialState = {
  posts:[],
  users:[],
  comments: [],
  todos:[]
};
 export const userReducer = (state = initialState , action: any) => {
  switch (action.type) {
    case 'FETCH_USERS_SUCCESS':
      return {
        ...state,
        users: action.payload,
      };
    case 'CREATE_USER_SUCCESS':
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case 'UPDATE_USER_SUCCESS':
      const updatedUsers = state.users.map((user: any) => {
        if (user.id === action.payload.id) {
          return action.payload;
        }
        return user;
      });
      return {
        ...state,
        users: updatedUsers,
      };
    default:
      return state;
  }
};

 export const todoReducer = (state = initialState , action: any) => {
  switch (action.type) {
    case 'FETCH_TODOS_SUCCESS':
      return {
        ...state,
        todos: action.payload,
      };
    default:
      return state;
  }
};

export const postReducer = (state = initialState , action: any) => {
  switch (action.type) {
    case 'FETCH_POSTS_SUCCESS':
      return {
        ...state,
        posts: action.payload,
      };
    default:
      return state;
  }
};

 export const commentReducer = (state = initialState , action: any) => {
  switch (action.type) {
    case 'FETCH_COMMENTS_SUCCESS':
      return {
        ...state,
        comments: action.payload,
      };
    default:
      return state;
  }
};




