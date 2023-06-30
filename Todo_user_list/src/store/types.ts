import { Action } from 'redux';
import { User } from './reducers/usersReducer';
import { Post } from './reducers/postsReducer';

import { Comment } from './reducers/commentsReducer';
import { Todo } from './reducers/todosReducer';

export const CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS';
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_COMMENTS_SUCCESS = 'FETCH_COMMENTS_SUCCESS';
export const FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';

interface CreateUserSuccessAction extends Action<typeof CREATE_USER_SUCCESS> {
  payload: User;
}

interface UpdateUserSuccessAction extends Action<typeof UPDATE_USER_SUCCESS> {
  payload: User;
}

interface FetchPostsSuccessAction extends Action<typeof FETCH_POSTS_SUCCESS> {
  payload: Post[];
}

interface FetchCommentsSuccessAction extends Action<typeof FETCH_COMMENTS_SUCCESS> {
  payload: Comment[];
}

interface FetchTodosSuccessAction extends Action<typeof FETCH_TODOS_SUCCESS> {
  payload: Todo[];
}

interface FetchUsersSuccessAction extends Action<typeof FETCH_USERS_SUCCESS> {
  payload: User[];
}

export type UserActionTypes = CreateUserSuccessAction | UpdateUserSuccessAction | FetchUsersSuccessAction;
export type PostActionTypes = FetchPostsSuccessAction;
export type CommentActionTypes = FetchCommentsSuccessAction;
export type TodoActionTypes = FetchTodosSuccessAction;

export interface RootState {
  users: {
    users: User[];
  };
  posts: {
    posts: Post[];
  };
  comments: {
    comments: Comment[];
  };
  todos: {
    todos: Todo[];
  };
}
