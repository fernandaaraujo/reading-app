import * as API from '../utils/ReadableAPI'

import {
  GET_CATEGORIES_POSTS,
  GET_ALL_POSTS,
  GET_POST,
  CREATE_POST,
  UPDATE_POST_VOTES,
  EDIT_POST,
  DELETE_POST,
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

export function getCategoryPosts(category) {
  return dispatch => {
    API.getCategoryPosts(category).then(posts => {
      dispatch({
        type: GET_CATEGORIES_POSTS,
        posts
      })
    })
  }
}

export function getPosts() {
  return dispatch => {
    API.getPosts().then(posts => {
      dispatch({
        type: GET_ALL_POSTS,
        posts
      })
    })
  }
}

export function getPost(post) {
  return dispatch => {
    API.getPost(post).then(post => {
      dispatch({
        type: GET_POST,
        post
      })
    })
  }
}

export function createPost(post) {
  return dispatch => {
    API.createPost(post).then(post => {
      dispatch({
        type: CREATE_POST,
        post
      })
    })
  }
}

export function editPost(post) {
  return dispatch => {
    API.editPost(post).then(post => {
      dispatch({
        type: EDIT_POST,
        post
      })
    })
  }
}

export function deletePost(post) {
  return dispatch => {
    API.deletePost(post).then(post => {
      dispatch({
        type: DELETE_POST,
        post
      })
    })
  }
}

export function updatePostVotes(post, option) {
  return dispatch => {
    API.updatePostVotes(post, option).then(post => {
      dispatch({
        type: UPDATE_POST_VOTES,
        post
      })
    })
  }
}
