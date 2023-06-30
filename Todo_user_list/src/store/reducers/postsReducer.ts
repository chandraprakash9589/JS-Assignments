import { PostActionTypes, FETCH_POSTS_SUCCESS } from '../types';

export interface Post {
  id: number;
  title: string;
}

export interface PostsState {
  posts: Post[];
}

const initialState: PostsState = {
  posts: [],
};

const postsReducer = (state = initialState, action: PostActionTypes): PostsState => {
  switch (action.type) {
    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        posts: action.payload,
      };
    default:
      return state;
  }
};

export default postsReducer;
export {};

// Existing code of usersReducer.ts
// ...
