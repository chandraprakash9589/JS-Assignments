import axios from 'axios';
import { Dispatch } from 'redux';
import { CommentActionTypes, FETCH_COMMENTS_SUCCESS } from '../types';

const API_BASE_URL = 'http://localhost:3008';

export const fetchComments = (postId: number) => {
  return async (dispatch: Dispatch<CommentActionTypes>) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/posts/${postId}/comments`);
      dispatch({ type: FETCH_COMMENTS_SUCCESS, payload: response.data });
    } catch (error) {
      console.error('Error fetching comments:', error);
    }
  };
};
