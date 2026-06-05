const BASE = 'https://dummyjson.com'

export const getUsers = ({ limit = 20, skip = 0 } = {}) =>
  fetch(`${BASE}/users?limit=${limit}&skip=${skip}&select=id,firstName,lastName,image,username,email,phone`).then(r => r.json())

export const getUserById = (id) =>
  fetch(`${BASE}/users/${id}`).then(r => r.json())