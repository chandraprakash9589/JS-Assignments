import { createStore, applyMiddleware, combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";
import usersReducer from "./store/reducers/usersReducer";
import postsReducer from "./store/reducers/postsReducer";
import todosReducer from "./store/reducers/todosReducer";
import commentsReducer from "./store/reducers/commentsReducer";

const rootReducer = combineReducers({
  users: usersReducer,
  posts: postsReducer,
  comments: commentsReducer,
  todos: todosReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
export default store;
