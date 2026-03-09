import { api } from './api'

export const postService = {
  getAll: async () => {
    const { data } = await api.get('/posts/')
    return data
  },

  getById: async (id: string) => {
    const { data } = await api.get(`/posts/${id}`)
    return data
  },
}

export const authorService = {
  getAll: async () => {
    const { data } = await api.get('/authors/')
    return data
  },
}

export const categoryService = {
  getAll: async () => {
    const { data } = await api.get('/categories/')
    return data
  },
}
