import {
  GET_POST,
  GET_CATEGORIES_POSTS,
  GET_ALL_POSTS,
  CREATE_POST,
  UPDATE_POST_VOTES,
  EDIT_POST,
  DELETE_POST,
  SORT_VOTESCORE_ASC,
  SORT_VOTESCORE_DESC,
  SORT_TIMESTAMP_ASC,
  SORT_TIMESTAMP_DESC
} from '../constants';

export function posts(state={}, action){
  switch (action.type) {
    case SORT_VOTESCORE_DESC:
      return state.sort((actualPost, nextPost) => actualPost.voteScore - nextPost.voteScore);

    case SORT_VOTESCORE_ASC:
      return state.sort((actualPost, nextPost) => nextPost.voteScore - actualPost.voteScore);

    case SORT_TIMESTAMP_DESC:
      return state.sort((actualPost, nextPost) => new Date(actualPost.timestamp) - new Date(nextPost.timestamp));

    case SORT_TIMESTAMP_ASC:
      return state.sort((actualPost, nextPost) => new Date(nextPost.timestamp) - new Date(actualPost.timestamp));

    case GET_CATEGORIES_POSTS:
    case GET_ALL_POSTS:
      return action.posts.filter(post => !post.deleted);

    case CREATE_POST:
      return state.posts.concat(action.post);

    case DELETE_POST:
    case EDIT_POST:
    case UPDATE_POST_VOTES:
      const updatedPosts = [];
      state.map(post => (
        post.id === action.post.id ?
        updatedPosts.push(action.post) :
        updatedPosts.push(post)
      ));

      return updatedPosts.filter(post => !post.deleted);

    default:
      return state
  }
}

export function post(state={}, action){
  switch (action.type) {
    case GET_POST:
      return action.post;

      default:
        return state
  }
}

export function sortPosts(state={sort:'SORT_VOTESCORE_ASC'}, action) {
  switch (action.type) {
    case SORT_VOTESCORE_ASC:
      return { sort : 'SORT_VOTESCORE_ASC' }

    case SORT_VOTESCORE_DESC:
      return { sort : 'SORT_VOTESCORE_DESC' }

    case SORT_TIMESTAMP_ASC:
      return { sort : 'SORT_TIMESTAMP_ASC' }

    case SORT_TIMESTAMP_DESC:
      return { sort : 'SORT_TIMESTAMP_DESC' }

    default:
      return state
  }
}
