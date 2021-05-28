import { combineReducers } from 'redux';
import CommentsReducer from './comments/comments.reducers';
import PostsReducer from './posts/posts.reducer';
import UserReducer from './users/users.reducer';

export default combineReducers({
  users: UserReducer,
  posts: PostsReducer,
  comments: CommentsReducer,
});
