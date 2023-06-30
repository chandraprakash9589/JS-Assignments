import { CommentActionTypes, FETCH_COMMENTS_SUCCESS } from '../types';

export interface Comment {
  id: number;
  body: string;
}

export interface CommentsState {
  comments: Comment[];
}

const initialState: CommentsState = {
  comments: [],
};

const commentsReducer = (state = initialState, action: CommentActionTypes): CommentsState => {
  switch (action.type) {
    case FETCH_COMMENTS_SUCCESS:
      return {
        ...state,
        comments: action.payload,
      };
    default:
      return state;
  }
};

export default commentsReducer;
export {};

// Existing code of usersReducer.ts
// ...
