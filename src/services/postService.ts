import { api } from './api'

export const postService = {
  getAllPosts: async () => {
    const { data } = await api.get('/posts/')
    return data
  },

  getPostById: async (id: string) => {
    const { data } = await api.get(`/posts/${id}`)
    return data
  },
}

export const authorService = {
  getAllAuthors: async () => {
    const { data } = await api.get('/authors/')
    return data
  },
}

export const categoryService = {
  getAllCategories: async () => {
    const { data } = await api.get('/categories/')
    return data
  },
}
