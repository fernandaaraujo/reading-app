import { categories } from './categories';
import { post, posts, sortPosts } from './posts';
import { comments, sortComments } from './comments';

import { combineReducers } from 'redux';

export default combineReducers({
  categories,
  post,
  posts,
  comments,
  sortPosts,
  sortComments
});
