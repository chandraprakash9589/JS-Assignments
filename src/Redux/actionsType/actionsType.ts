// Action Types
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const ADD_USER_SUCCESS = 'ADD_USER_SUCCESS';
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS';
export const DELETE_USER_SUCCESS = 'DELETE_USER_SUCCESS';


export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';

export const FETCH_TODOS_SUCCESS ="FETCH_TODOS_SUCCESS"






export const FETCH_COMMENTS_SUCCESS = 'FETCH_COMMENTS_SUCCESS';
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
export const UPDATE_COMMENT_SUCCESS = 'UPDATE_COMMENT_SUCCESS';
export const DELETE_COMMENT_SUCCESS = 'DELETE_COMMENT_SUCCESS';

export type CommentActionTypes =
  | { type: typeof FETCH_COMMENTS_SUCCESS; payload: Comment[] }
  | { type: typeof ADD_COMMENT_SUCCESS; payload: Comment }
  | { type: typeof UPDATE_COMMENT_SUCCESS; payload: Comment }
  | { type: typeof DELETE_COMMENT_SUCCESS; payload: number };
