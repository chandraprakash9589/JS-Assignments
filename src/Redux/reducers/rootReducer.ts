import { combineReducers } from 'redux';
import { userReducer,todoReducer,commentReducer ,postReducer} from './reducers'
// import postReducer from './postReducer';

const rootReducer = combineReducers({
  user: userReducer,
  todo: todoReducer,
  post: postReducer,
  comment: commentReducer,
});
//   posts: postReducer,

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
