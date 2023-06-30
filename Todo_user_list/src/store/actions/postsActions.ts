import axios from 'axios';
import { Dispatch } from 'redux';
import { PostActionTypes, FETCH_POSTS_SUCCESS } from '../types';

const API_BASE_URL = 'http://localhost:3008';

export const fetchPosts = (userId: number) => {
  return async (dispatch: Dispatch<PostActionTypes>) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/users/${userId}/posts`);
      dispatch({ type: FETCH_POSTS_SUCCESS, payload: response.data });
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };
};
export {}