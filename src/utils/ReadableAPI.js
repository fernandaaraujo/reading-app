const api = 'http://localhost:3001';

const headers = {
  Accept: 'application/json',
  Authorization: 'token-api'
};

export const getCategories = () =>
  fetch(`${api}/categories`, { headers })
    .then(res => res.json())
    .then(data => data.categories);

export const getCategoryPosts = category =>
  fetch(`${api}/${category.name}/posts`, { headers })
    .then(res => res.json());

export const getPosts = () =>
  fetch(`${api}/posts`, { headers })
    .then(res => res.json());

export const getPost = post =>
  fetch(`${api}/posts/${post.id}`, { headers })
    .then(res => res.json());

export const createPost = data =>
  fetch(`${api}/posts`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then(res => res.json());

export const updatePostVotes = (post, option) =>
  fetch(`${api}/posts/${post.id}`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ option })
  }).then(res => res.json());

export const editPost = ({ id, title, body, category }) =>
  fetch(`${api}/posts/${id}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ title, body, category, timestamp: Date.now() })
  }).then(res => res.json());

export const deletePost = post =>
  fetch(`${api}/posts/${post.id}`, { method: 'DELETE', headers })
    .then(res => res.json());

export const getPostComments = post =>
  fetch(`${api}/posts/${post.id}/comments`, { headers })
    .then(res => res.json());

export const createComment = data =>
  fetch(`${api}/comments`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then(res => res.json());

export const getComment = comment =>
  fetch(`${api}/comments/${comment.id}`, { headers })
    .then(res => res.json());

export const updateCommentVotes = (comment, option) =>
  fetch(`${api}/comments/${comment.id}`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ option })
  }).then(res => res.json());

export const editComment = ({ id, body }) =>
  fetch(`${api}/comments/${id}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ timestamp: Date.now(), body })
  }).then(res => res.json());

export const deleteComment = comment =>
  fetch(`${api}/comments/${comment.id}`, { method: 'DELETE', headers })
    .then(res => res.json());
