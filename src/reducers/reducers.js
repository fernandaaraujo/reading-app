import { categories } from './reducers/categories';
import { post, posts, sortPosts } from './reducers/posts';
import { comments, sortComments } from './reducers/comments';

import { combineReducers } from 'redux';

export default combineReducers({
  categories,
  post,
  posts,
  comments,
  sortPosts,
  sortComments
});
