 import {
  ADD_COMMENT,
  UPDATE_COMMENT_VOTES,
  EDIT_COMMENT,
  DELETE_COMMENT,
  GET_POST_COMMENTS,
  SORT_VOTESCORE_ASC,
  SORT_VOTESCORE_DESC,
  SORT_TIMESTAMP_ASC,
  SORT_TIMESTAMP_DESC
} from '../constants';

import orderBy from 'lodash.orderby';

export function comments(state={}, action) {
  switch (action.type) {
    case SORT_VOTESCORE_DESC:
      return orderBy(state, 'voteScore', 'desc');

    case SORT_VOTESCORE_ASC:
      return orderBy(state, 'voteScore', 'asc');

    case SORT_TIMESTAMP_DESC:
      return orderBy(state, 'timestamp', 'desc');

    case SORT_TIMESTAMP_ASC:
      return orderBy(state, 'timestamp', 'asc');

    case ADD_COMMENT:
      return state.comments.concat(action.comment);

    case GET_POST_COMMENTS:
      return action.comments.filter(comment => !comment.deleted);

    case EDIT_COMMENT:
    case DELETE_COMMENT:
    case UPDATE_COMMENT_VOTES:
      const updatedComments = [];
        state.map(comment => (
          comment.id === action.comment.id ?
          updatedComments.push(action.comment) :
          updatedComments.push(comment)
        ));

      return updatedComments.filter(comment => !comment.deleted);

    default:
      return state;
  }
}

export function sortComments(state={sort:'SORT_VOTESCORE_ASC'}, action) {
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
