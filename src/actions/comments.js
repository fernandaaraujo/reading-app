import * as API from '../utils/ReadableAPI'

import {
  ADD_COMMENT,
  GET_COMMENT,
  UPDATE_COMMENT_VOTES,
  EDIT_COMMENT,
  DELETE_COMMENT,
  GET_POST_COMMENTS,
  SORT_VOTESCORE_ASC,
  SORT_VOTESCORE_DESC,
  SORT_TIMESTAMP_ASC,
  SORT_TIMESTAMP_DESC
} from '../constants';

export function sortVotescoreAsc() {
  return {
    type: SORT_VOTESCORE_ASC
  }
}

export function sortVotescoreDesc() {
  return {
    type: SORT_VOTESCORE_DESC
  }
}

export function sortTimestampAsc() {
  return {
    type: SORT_TIMESTAMP_ASC
  }
}

export function sortTimestampDesc() {
  return {
    type: SORT_TIMESTAMP_DESC
  }
}

export function getComment(comment) {
  return dispatch => {
    API.getComment(comment).then(comment => {
      dispatch({
        type: GET_COMMENT,
        comment
      })
    })
  }
}

export function createComment(comment) {
  return dispatch => {
    API.createComment(comment).then(comment => {
      dispatch({
        type: ADD_COMMENT,
        comment
      })
    })
  }
}

export function deleteComment(comment) {
  return dispatch => {
    API.deleteComment(comment).then(comment => {
      dispatch({
        type: DELETE_COMMENT,
        comment
      })
    })
  }
}

export function editComment(comment) {
  return dispatch => {
    API.editComment(comment).then(comment => {
      dispatch({
        type: EDIT_COMMENT,
        comment
      })
    })
  }
}

export function updateCommentVotes(comment, option) {
  return dispatch => {
    API.updateCommentVotes(comment, option).then(comment => {
      dispatch({
        type: UPDATE_COMMENT_VOTES,
        comment
      })
    })
  }
}

export function getPostComments(post) {
  return dispatch => {
    API.getPostComments(post).then(comments => {
      dispatch({
        type: GET_POST_COMMENTS,
        comments
      })
    })
  }
}
