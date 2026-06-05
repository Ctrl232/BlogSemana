const BASE = 'https://dummyjson.com'

export const getPosts = ({ limit = 9, skip = 0 } = {}) =>
  fetch(`${BASE}/posts?limit=${limit}&skip=${skip}`).then(r => r.json())

export const getPostById = (id) =>
  fetch(`${BASE}/posts/${id}`).then(r => r.json())

export const getPostsByUser = (userId) =>
  fetch(`${BASE}/posts/user/${userId}`).then(r => r.json())

export const getPostComments = (postId) =>
  fetch(`${BASE}/posts/${postId}/comments`).then(r => r.json())

export const getPostsByTag = (tag) =>
  fetch(`${BASE}/posts/tag/${tag}`).then(r => r.json())

export const getTags = () =>
  fetch(`${BASE}/posts/tag-list`).then(r => r.json())